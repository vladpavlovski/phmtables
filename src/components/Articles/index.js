import React, {
  useState,
  useMemo,
  useEffect,
  useContext,
  useCallback,
} from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useHistory, Link } from 'react-router-dom'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core'

import { DataTable } from '../DataTable'
import { getArticleRoute, getArticleGeneratedRoute } from '../../routes'
import {
  GET_ARTICLES_LIST,
  DELETE_COMPOSED_ARTICLE,
} from '../../graphql/requests'
import DashboardContext from '../../contexts/dashboard'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const generateIframeCode = props => {
  const { title, link } = props
  const generateId = value => {
    return `${value.replace(/\s/g, '_').toLowerCase()}_id`
  }
  const code = `
  <iframe id="${generateId(
    title
  )}" title="${title}" width="920" height="7000" src="${
    window.location.origin
  }${link}">
  </iframe>

  <script>
    function checkSize() {
      if (window.innerWidth < 920) {
        document.getElementById("${generateId(
          title
        )}").width = window.innerWidth - 40
      }
    }

    checkSize()
      window.addEventListener('resize', checkSize)
      window.onunload = function() {
        window.removeEventListener('resize', checkSize)
    }
  </script>
  `

  return code
}

const CopyIframeButton = props => {
  const { gameId } = props

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(!copied)
      }, 3000)
    }
  }, [copied])

  return (
    <CopyToClipboard
      text={generateIframeCode({
        title: `article_${gameId}`,
        link: getArticleGeneratedRoute(gameId),
      })}
      onCopy={() => {
        setCopied(true)
      }}
    >
      <Button
        size="small"
        variant="contained"
        color="primary"
        disabled={copied}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        {copied ? 'Copied!' : 'Copy Iframe code'}
      </Button>
    </CopyToClipboard>
  )
}

const Articles = () => {
  const history = useHistory()

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [deleteConfirmation, setDeleteConfirmation] = useState(false)
  const [dataForDelete, setDataForDelete] = useState(null)

  const { newArticleCreated, setNewArticleCreated } = useContext(
    DashboardContext
  )
  const { loading, error, data, refetch } = useQuery(GET_ARTICLES_LIST)
  const [deleteArticle] = useMutation(DELETE_COMPOSED_ARTICLE)

  useEffect(() => {
    if (newArticleCreated) {
      refetch()
      setNewArticleCreated(false)
    }
  }, [newArticleCreated, refetch, setNewArticleCreated, data])

  const deleteDialogClose = useCallback(() => {
    setDeleteDialogOpen(false)
  }, [])

  useEffect(() => {
    if (deleteConfirmation && dataForDelete && data) {
      dataForDelete.data.forEach(row => {
        const { gameId } = data.articles[row.dataIndex]
        deleteArticle({ variables: { gameId } })
      })
      setDeleteConfirmation(false)
    }
  }, [data, dataForDelete, deleteArticle, deleteConfirmation])

  const onRowsDelete = useCallback(rowsDeleted => {
    setDeleteDialogOpen(true)
    setDataForDelete(rowsDeleted)
  }, [])

  const options = useMemo(
    () => ({
      filterType: 'multiselect',
      print: false,
      searchOpen: false,
      download: false,
      responsive: 'vertical',
      rowsPerPage: 50,
      rowsPerPageOptions: [10, 25, 50, 100],
      onRowClick: (rowData, rowMeta) => {
        if (data) {
          const { gameId } = data.articles[rowMeta.dataIndex]
          history.push(getArticleRoute(gameId))
        }
      },
      onRowsDelete: onRowsDelete,
    }),
    [data, history, onRowsDelete]
  )

  const columns = useMemo(
    () => [
      {
        name: 'gameId',
        label: 'Game Id',
        options: {
          filter: false,
          sort: true,
          customBodyRenderLite: dataIndex => {
            const gameId = data && data.articles[dataIndex].gameId
            return (
              <Link
                to={getArticleGeneratedRoute(gameId)}
                target="_blank"
                onClick={e => {
                  e.stopPropagation()
                }}
              >
                {gameId}
              </Link>
            )
          },
        },
      },
      {
        name: 'copyIframeCode',
        label: 'Copy Iframe',
        options: {
          filter: false,
          sort: true,
          customBodyRenderLite: dataIndex => {
            const gameId = data && data.articles[dataIndex].gameId
            return <CopyIframeButton gameId={gameId} />
          },
        },
      },
      { name: 'teamOneNameFull', label: 'Team 1' },
      { name: 'teamTwoNameFull', label: 'Team 2' },
      { name: 'date', label: 'Date' },
      {
        name: 'periodsResult',
        label: 'Periods Result',
        options: { filter: false, sort: false },
      },
    ],
    [data]
  )

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <>
      <DataTable
        title="Articles"
        columns={columns}
        data={(data && data.articles) || []}
        options={options}
      />
      <Dialog
        open={deleteDialogOpen}
        onClose={deleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to delete these articles?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action will permanently delete articles
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteDialogClose} color="primary">
            Disagree
          </Button>
          <Button
            onClick={() => {
              setDeleteConfirmation(true)
              deleteDialogClose()
            }}
            color="primary"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export { Articles as default }
