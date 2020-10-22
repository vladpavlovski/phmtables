import React, { Fragment, useMemo, useEffect, useContext } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { DataTable } from '../../../components/DataTable'
import { getPlayerRoute } from '../../../routes'

import DashboardContext from '../../../contexts/dashboard'

export const GET_ALL_PLAYERS = gql`
  query getPlayers {
    players {
      id
      playerId
      avatar
      country
      city
      position
      firstName
      lastName
      teams {
        id
        name
        fullName
      }
    }
  }
`

const PlayersTable = () => {
  const history = useHistory()
  const { loading, error, data, refetch } = useQuery(GET_ALL_PLAYERS)
  const { newPlayersImported, setNewPlayersImported } = useContext(
    DashboardContext
  )
  useEffect(() => {
    if (newPlayersImported) {
      refetch()
      setNewPlayersImported(false)
    }
  }, [refetch, data, newPlayersImported, setNewPlayersImported])

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
          const { id } = data.players[rowMeta.dataIndex]
          history.push(getPlayerRoute(id))
        }
      },
      customToolbarSelect: () => {},
      selectableRows: 'none',
    }),
    [data, history]
  )

  // console.log('data:', data)

  const columns = useMemo(
    () => [
      {
        name: 'commonName',
        label: 'Name',
        options: {
          filter: false,
          sort: true,
          customBodyRenderLite: dataIndex => {
            // console.log('dataIndex: ', dataIndex, data.players)
            return (
              <span>{`${data.players[dataIndex].firstName} ${data.players[dataIndex].lastName}`}</span>
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
            const teams = data.players[dataIndex].teams
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
    [data]
  )

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <DataTable
      title="Players"
      columns={columns}
      data={(data && data.players) || []}
      options={options}
    />
  )
}

export { PlayersTable as default }
