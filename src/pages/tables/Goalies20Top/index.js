import React, { useState, useEffect } from 'react'

import { Table } from '../../../components/Table'
import { LoaderPHM } from '../../../components/Loader'
import { getData } from '../../../api/get-data'
import { GOALIES_20_URL } from '../../../api/data-url'

import { Filters } from '../Goalies20Klasik/Filters'
import {
  TableStyles,
  AllFilters,
  AvatarLogo,
  TeamName,
  TeamNameSmall,
  Rank,
  Wins,
  Loss,
  Points,
  CellValue,
  HeaderValue,
  HeaderWins,
  HeaderLoss,
  HeaderPoints,
} from '../Standings20/styled'

const columnsGoalies = [
  {
    accessor: 'Pořadí',
    Header: () => <HeaderValue title="Pořadí">{'#'}</HeaderValue>,
    Cell: data => <Rank>{data.cell.value}</Rank>,
  },
  {
    accessor: 'Fotka',
    Cell: data => {
      return (
        <AvatarLogo src={data.cell.value} alt={data.row.original['Jméno']} />
      )
    },
  },
  {
    accessor: 'Jméno',
    Header: () => <HeaderValue title="Jméno">{'Jméno'}</HeaderValue>,
    Cell: data => {
      return (
        <CellValue left>
          <TeamName>{data.cell.value}</TeamName>
          <TeamNameSmall>{data.row.original['Tým']}</TeamNameSmall>
        </CellValue>
      )
    },
  },
  {
    accessor: 'Vítězství',
    Header: () => <HeaderValue title="Vítězství">{'Vítězství'}</HeaderValue>,
    Cell: data => <CellValue>{data.cell.value || 'Nan'}</CellValue>,
  },
  {
    accessor: 'Zápasů',
    Header: () => <HeaderWins title="Zápasů">{'Zápasů'}</HeaderWins>,
    Cell: data => <Wins>{data.cell.value}</Wins>,
  },
  {
    accessor: 'Úspěšnost',
    Header: () => <HeaderWins title="Úspěšnost">{'Úspěšnost'}</HeaderWins>,
    Cell: data => <Wins>{`${Math.round(data.cell.value * 100) / 100}%`}</Wins>,
  },
  {
    accessor: 'Zákroků',
    Header: () => <HeaderWins title="Zákroků">{'Zákroků'}</HeaderWins>,
    Cell: data => <Wins bold>{data.cell.value}</Wins>,
  },
  {
    accessor: 'ObGóly',
    Header: () => <HeaderLoss title="Ob.Góly">{'Ob.Góly'}</HeaderLoss>,
    Cell: data => <Loss>{data.cell.value}</Loss>,
  },

  {
    accessor: 'Nuly',
    Header: () => <HeaderPoints title="Nuly">{'Nuly'}</HeaderPoints>,
    Cell: data => <Points>{data.cell.value}</Points>,
  },
  {
    accessor: 'Průměr',
    Header: () => <HeaderValue title="Průměr">{'Průměr'}</HeaderValue>,
    Cell: data => (
      <CellValue>{Math.round(data.cell.value * 100) / 100}</CellValue>
    ),
  },
  {
    accessor: 'Trmin',
    Header: () => <HeaderValue title="Tr. minuty">{'Tr.min'}</HeaderValue>,
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
  {
    accessor: 'Hvězda',
    Header: () => <HeaderValue title="Hvězda">{'Hvězda'}</HeaderValue>,
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
]

const columnsHide736 = ['Hvězda', 'Trmin']
const columnsHide480 = ['Jméno']

const Goalies = props => {
  const { fetchUrl, tabName } = props
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(fetchUrl, data => {
      const newData = data[tabName].elements.slice(0).filter(i => i.ID)
      setData(newData)
      setFilteredData(newData)
      setIsLoading(false)
    })
  }, [fetchUrl, tabName])

  return isLoading ? (
    <LoaderPHM />
  ) : (
    <>
      <Filters data={data} setFilteredData={setFilteredData} />
      <AllFilters>
        <TableStyles>
          <Table
            columns={columnsGoalies}
            data={filteredData}
            columnsHide736={columnsHide736}
            columnsHide480={columnsHide480}
          />
        </TableStyles>
      </AllFilters>
    </>
  )
}

const Goalies20Klasik = () => (
  <Goalies fetchUrl={GOALIES_20_URL} tabName={'allGoaliesTOP4publish'} />
)

export { Goalies20Klasik as default, Goalies }
