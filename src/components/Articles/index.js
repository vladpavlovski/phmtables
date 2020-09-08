import React, { useMemo, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { useHistory, Link } from 'react-router-dom'
import { DataTable } from '../DataTable'
import { getArticleRoute, getArticleGeneratedRoute } from '../../routes'
import { GET_ARTICLES_LIST } from '../../graphql/requests'
import DashboardContext from '../../contexts/dashboard'

const Articles = () => {
  const history = useHistory()
  const { newArticleCreated, setNewArticleCreated } = useContext(
    DashboardContext
  )
  const { loading, error, data, refetch } = useQuery(GET_ARTICLES_LIST)
  useEffect(() => {
    if (newArticleCreated) {
      refetch()
      setNewArticleCreated(false)
    }
  }, [newArticleCreated, refetch, setNewArticleCreated, data])

  const options = useMemo(
    () => ({
      filterType: 'multiselect',
      print: false,
      searchOpen: false,
      download: false,
      responsive: 'vertical',
      onRowClick: (rowData, rowMeta) => {
        if (data) {
          const { gameId } = data.articles[rowMeta.dataIndex]
          history.push(getArticleRoute(gameId))
        }
      },
    }),
    [data, history]
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
    <DataTable
      title="Articles"
      columns={columns}
      data={(data && data.articles) || []}
      options={options}
    />
  )
}

export { Articles as default }
