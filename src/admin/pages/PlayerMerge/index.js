import React, { Fragment, useState, useCallback, useMemo } from 'react'

import { gql, useQuery, useMutation } from '@apollo/client'
import { Container, Grid, Paper, Button, Snackbar } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { GET_ALL_TEAMS } from '../../../graphql/requests'
import { Title } from '../../../components/Title'
import { DataTable } from '../../../components/DataTable'
import { Loader } from '../../../components/Loader'
import Layout from '../../../components/Layout'
import { useStyles } from './styled'

import { TableMerge } from './TableMerge'

const GET_REGISTERED_PLAYERS = gql`
  query getPlayers {
    players {
      id
      playerId
      firstName
      lastName
      birthday
      avatar
      isActive
      country
      city
      position
      stick
      height
      weight
      startLeagueDate
      jersey
      gender
      disabled
      teams {
        id
        name
        fullName
        logoRound
      }
    }
  }
`

const GET_IMPORTED_PLAYERS = gql`
  query playersStorage {
    playersStorage {
      id
      playerId
      name
      team
      avatar
      isActive
      birthday
      country
      city
      position
      stick
      height
      weight
      startLeagueDate
      jersey
      gender
    }
  }
`

const UPDATE_PLAYER = gql`
  mutation updatePlayer($input: PlayerInput!) {
    updatePlayer(input: $input) {
      playerId
      firstName
      lastName
      birthday
      avatar
      isActive
      country
      city
      position
      stick
      height
      weight
      startLeagueDate
      jersey
      gender
      disabled
    }
  }
`

const registeredInitialState = {
  id: '',
  playerId: '',
  userId: '',
  firstName: '',
  lastName: '',
  birthday: '',
  avatar: '',
  isActive: true,
  country: '',
  city: '',
  position: '',
  stick: '',
  height: '',
  weight: '',
  startLeagueDate: '',
  jersey: '',
  gender: '',
  teams: null,
}

const importedInitialState = {
  playerId: '',
  name: '',
  birthday: '',
  avatar: '',
  isActive: true,
  country: '',
  city: '',
  position: '',
  stick: '',
  height: '',
  weight: '',
  startLeagueDate: '',
  jersey: '',
  gender: '',
  team: '',
}
const PlayerMerge = () => {
  const classes = useStyles()
  const [searchImportedPlayer, setSearchImportedPlayer] = useState('')
  const [isMerged, setIsMerged] = useState(false)
  const [isMergable, setIsMergable] = useState(false)
  const [registeredPlayerData, setRegisteredPlayerData] = useState(
    registeredInitialState
  )
  const [importedPlayerData, setImportedPlayerData] = useState(
    importedInitialState
  )

  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false)

  const { loading: teamsLoading, data: teamsData } = useQuery(GET_ALL_TEAMS)

  const {
    loading: rpLoading,
    error: rpError,
    data: registeredPlayers,
  } = useQuery(GET_REGISTERED_PLAYERS)

  const {
    loading: ipLoading,
    error: ipError,
    data: importedPlayers,
  } = useQuery(GET_IMPORTED_PLAYERS)

  const [updatePlayer, { loading: upLoading, error: upError }] = useMutation(
    UPDATE_PLAYER,
    {
      onCompleted: () => {
        setIsUpdateSuccessful(true)
      },
    }
  )

  const cleanUpMerge = useCallback(() => {
    setRegisteredPlayerData(registeredInitialState)
    setImportedPlayerData(importedInitialState)
    setIsMerged(false)
    setIsMergable(false)
  }, [])

  const makeMerge = useCallback(() => {
    const {
      name,
      team,
      birthday,
      startLeagueDate,
      ...restImported
    } = importedPlayerData

    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]

    const foundTeam = teamsData.teams.find(
      t =>
        t.name.toLowerCase() === team.toLowerCase() ||
        t.fullName.toLowerCase() === team.toLowerCase()
    )

    const newTeams = [
      ...new Set([...registeredPlayerData.teams, foundTeam]),
    ].map(({ __typename, ...keepAttrs }) => keepAttrs)

    setRegisteredPlayerData({
      ...restImported,
      id: registeredPlayerData.id,
      firstName,
      lastName,
      teams: newTeams,
      birthday: registeredPlayerData.birthday || birthday || null,
      startLeagueDate:
        registeredPlayerData.startLeagueDate || startLeagueDate || null,
    })
    setIsMerged(true)
  }, [importedPlayerData, registeredPlayerData, teamsData])

  const changeRegisteredField = useCallback(
    (e, name) => {
      const value = e.target.value
      const { [name]: _, ...rest } = registeredPlayerData
      setRegisteredPlayerData({ ...rest, [name]: value })
    },
    [registeredPlayerData]
  )

  const changeImportedField = useCallback(
    (e, name) => {
      const value = e.target.value
      const { [name]: _, ...rest } = importedPlayerData
      setRegisteredPlayerData({ ...rest, [name]: value })
    },
    [importedPlayerData]
  )

  const registeredPlayersOptions = useMemo(
    () => ({
      filterType: 'multiselect',
      print: false,
      searchOpen: false,
      download: false,
      responsive: 'vertical',
      rowsPerPage: 50,
      rowsPerPageOptions: [10, 25, 50, 100],
      tableBodyHeight: '500px',
      onRowClick: (rowData, rowMeta) => {
        if (registeredPlayers) {
          const rowPlayer = registeredPlayers.players[rowMeta.dataIndex]

          const { firstName, lastName, __typename, ...rest } = rowPlayer
          const commonName = `${firstName} ${lastName}`
          setSearchImportedPlayer(commonName)
          setRegisteredPlayerData({ firstName, lastName, ...rest })
        }
      },
      customToolbarSelect: () => {},
      selectableRows: 'none',
    }),
    [registeredPlayers]
  )

  const importedPlayersOptions = useMemo(
    () => ({
      filterType: 'multiselect',
      print: false,
      searchOpen: true,
      download: false,
      responsive: 'vertical',
      rowsPerPage: 50,
      rowsPerPageOptions: [10, 25, 50, 100],
      tableBodyHeight: '500px',
      searchText: searchImportedPlayer,
      onRowClick: (rowData, rowMeta) => {
        const rowPlayer = importedPlayers.playersStorage[rowMeta.dataIndex]
        const { __typename, ...rest } = rowPlayer

        setImportedPlayerData({ ...rest })
        setIsMergable(true)
      },
      customToolbarSelect: () => {},
      selectableRows: 'none',
    }),
    [importedPlayers, searchImportedPlayer]
  )

  const registeredPlayersColumns = useMemo(
    () => [
      {
        name: 'commonName',
        label: 'Name',
        options: {
          filter: false,
          sort: true,
          customBodyRenderLite: dataIndex => {
            return (
              <span>{`${registeredPlayers.players[dataIndex].firstName} ${registeredPlayers.players[dataIndex].lastName}`}</span>
            )
          },
        },
      },
      { name: 'playerId', label: 'Player ID' },
      {
        name: 'team',
        label: 'Team',
        options: {
          filter: true,
          sort: true,
          customBodyRenderLite: dataIndex => {
            const teams = registeredPlayers.players[dataIndex].teams
            return (
              teams && (
                <span>
                  {teams.map((t, i) => (
                    <Fragment key={t.id}>
                      <span>{`${t.name}`}</span>
                      {i !== teams.length - 1 && ', '}
                    </Fragment>
                  ))}
                </span>
              )
            )
          },
        },
      },
      { name: 'position', label: 'Position' },
    ],
    [registeredPlayers]
  )

  const importedPlayersColumns = useMemo(
    () => [
      {
        name: 'name',
        label: 'Name',
        options: {
          filter: false,
          sort: true,
        },
      },
      { name: 'playerId', label: 'Player ID' },
      {
        name: 'team',
        label: 'Team',
        options: {
          filter: true,
          sort: true,
        },
      },
      { name: 'position', label: 'Position' },
    ],
    []
  )

  const submitUpdatedPlayer = useCallback(() => {
    updatePlayer({
      variables: {
        input: registeredPlayerData,
      },
    })
  }, [registeredPlayerData, updatePlayer])

  return (
    <Layout>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className={classes.fixedHeight}>
            {rpLoading ? (
              <Loader width={150} height={150} noText />
            ) : rpError ? (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <pre>{rpError.toString()}</pre>
              </Alert>
            ) : (
              <DataTable
                title="Registered players"
                columns={registeredPlayersColumns}
                data={(registeredPlayers && registeredPlayers.players) || []}
                options={registeredPlayersOptions}
              />
            )}
          </Grid>
          <Grid item xs={12} md={6} className={classes.fixedHeight}>
            {ipLoading ? (
              <Loader width={150} height={150} noText />
            ) : ipError ? (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <pre>{ipError.toString()}</pre>
              </Alert>
            ) : (
              <DataTable
                title="Imported players"
                columns={importedPlayersColumns}
                data={(importedPlayers && importedPlayers.playersStorage) || []}
                options={importedPlayersOptions}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Merge Fields</Title>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <TableMerge
                    data={registeredPlayerData}
                    changeField={changeRegisteredField}
                    setFieldData={setRegisteredPlayerData}
                    classes={classes}
                    teamsData={teamsData}
                    teamsLoading={teamsLoading}
                  />
                </Grid>
                <Grid item xs={2}>
                  {isMergable && registeredPlayerData.id && (
                    <>
                      <Button
                        fullWidth
                        type="button"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={makeMerge}
                      >
                        {isMerged ? 'Merged 👍🏻' : 'Merge ⬅️'}
                      </Button>
                      <Button
                        fullWidth
                        type="button"
                        variant="contained"
                        className={classes.submit}
                        onClick={cleanUpMerge}
                      >
                        {'Clean Up 🧻'}
                      </Button>
                    </>
                  )}
                  {isMerged && (
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      disabled={upLoading}
                      onClick={submitUpdatedPlayer}
                    >
                      {upLoading ? 'Saving...' : 'Save 💾'}
                    </Button>
                  )}
                  {upError && (
                    <Alert severity="error">
                      <AlertTitle>Error</AlertTitle>
                      <pre>{upError.toString()}</pre>
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={5}>
                  <TableMerge
                    data={importedPlayerData}
                    changeField={changeImportedField}
                    setFieldData={setImportedPlayerData}
                    classes={classes}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Snackbar
          open={isUpdateSuccessful}
          autoHideDuration={6000}
          onClose={() => {
            setIsUpdateSuccessful(false)
          }}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={() => {
              setIsUpdateSuccessful(false)
            }}
            severity="success"
          >
            Player successfully merged!
          </Alert>
        </Snackbar>
      </Container>
    </Layout>
  )
}

export { PlayerMerge as default }
