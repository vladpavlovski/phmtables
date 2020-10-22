import React, { useState, useCallback, useEffect, useContext } from 'react'
import { gql, useMutation } from '@apollo/client'
import { Button, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { Title } from '../../../components/Title'

import DashboardContext from '../../../contexts/dashboard'

export const IMPORT_PLAYERS = gql`
  mutation importPlayers {
    importPlayers {
      id
    }
  }
`

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />

const ImportPlayers = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const { setNewPlayersImported } = useContext(DashboardContext)

  const [importPlayers, { data }] = useMutation(IMPORT_PLAYERS)

  const handleCloseSnackbar = useCallback(() => {
    setOpenSnackbar(false)
  }, [])

  useEffect(() => {
    if (data && data.importPlayers) {
      setOpenSnackbar(true)
      setNewPlayersImported(true)
      setSubmitting(false)
    }
  }, [data, setNewPlayersImported])

  return (
    <>
      <Title>Import Players</Title>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
          setSubmitting(true)
          importPlayers()
        }}
      >
        {isSubmitting ? 'Importing...' : 'Import players to temporary database'}
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Article successfully created!
        </Alert>
      </Snackbar>
    </>
  )
}

export { ImportPlayers as default }
