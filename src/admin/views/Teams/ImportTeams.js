import React, { useState, useCallback, useContext } from 'react'
import { useMutation } from '@apollo/client'
import { Button, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { Title } from '../../../components/Title'
import { IMPORT_TEAMS } from '../../../graphql/requests'

import DashboardContext from '../../../contexts/dashboard'

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />

const ImportTeams = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const { setNewTeamsImported } = useContext(DashboardContext)

  const [importTeams] = useMutation(IMPORT_TEAMS, {
    onCompleted: () => {
      setOpenSnackbar(true)
      setNewTeamsImported(true)
      setSubmitting(false)
    },
  })

  const handleCloseSnackbar = useCallback(() => {
    setOpenSnackbar(false)
  }, [])

  return (
    <>
      <Title>Import Teams</Title>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
          setSubmitting(true)
          importTeams()
        }}
      >
        {isSubmitting ? 'Importing...' : 'Import teams'}
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

export { ImportTeams as default }
