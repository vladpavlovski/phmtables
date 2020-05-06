import React, { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../../routes'
import { DataTable } from '../DataTable'

const GET_ARTICLES_LIST = gql`
  query getArticles {
    articles {
      id
      gameId
      teamOneNameFull
      teamTwoNameFull
      date
      periodsResult
    }
  }
`

const columns = [
  { name: 'gameId', label: 'Game Id' },
  { name: 'teamOneNameFull', label: 'Team 1' },
  { name: 'teamTwoNameFull', label: 'Team 2' },
  { name: 'date', label: 'Date' },
  {
    name: 'periodsResult',
    label: 'Periods Result',
    options: { filter: false, sort: false },
  },
]

export const Articles = () => {
  const history = useHistory()
  const { loading, error, data } = useQuery(GET_ARTICLES_LIST)

  const options = useMemo(
    () => ({
      filterType: 'multiselect',
      print: false,
      searchOpen: true,
      download: false,
      responsive: 'stacked',
      onRowClick: (rowData, rowMeta) => {
        // console.log('gameId:', data.articles[rowMeta.dataIndex].gameId)

        history.push(ROUTES.DASHBOARD)
      },
    }),
    [history]
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
