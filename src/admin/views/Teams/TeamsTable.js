import React, { useMemo, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { DataTable } from '../../../components/DataTable'
import { getTeamRoute } from '../../../routes'
import { GET_ALL_TEAMS } from '../../../graphql/requests'

import DashboardContext from '../../../contexts/dashboard'

const TeamsTable = () => {
  const history = useHistory()
  const { loading, error, data, refetch } = useQuery(GET_ALL_TEAMS)
  const { newTeamsImported, setNewTeamsImported } = useContext(DashboardContext)
  useEffect(() => {
    if (newTeamsImported) {
      refetch()
      setNewTeamsImported(false)
    }
  }, [refetch, data, newTeamsImported, setNewTeamsImported])

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
          const { id } = data.teams[rowMeta.dataIndex]
          history.push(getTeamRoute(id))
        }
      },
      customToolbarSelect: () => {},
      selectableRows: 'none',
    }),
    [data, history]
  )

  const columns = useMemo(
    () => [
      { name: 'name', label: 'Name' },
      { name: 'nick', label: 'Nick' },
      { name: 'shortcut', label: 'Shortcut' },
    ],
    []
  )

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <DataTable
      title="Teams"
      columns={columns}
      data={(data && data.teams) || []}
      options={options}
    />
  )
}

export { TeamsTable as default }
