import React, { useState, useEffect } from 'react'
import Rating from 'react-rating'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

import { Table } from '../../../components/Table'
import { Loader } from '../../../components/Loader'
import { getData } from '../../../api/get-data'
import { STANDINGS_20_URL } from '../../../api/data-url'
import { Filters as Standings20Filters } from './Filters'
import {
  TableStyles,
  AllFilters,
  TeamLogo,
  TeamName,
  Rank,
  Wins,
  Draws,
  Loss,
  Points,
  CellValue,
  HeaderValue,
  HeaderWins,
  HeaderDraws,
  HeaderLoss,
  HeaderPoints,
} from './styled'

const columnsStandings = [
  {
    accessor: 'Pořadí',
    Cell: data => <Rank>{data.cell.value}</Rank>,
  },
  {
    accessor: 'teamLogo',
    Cell: data => {
      return <TeamLogo src={data.cell.value} alt={data.row.original.teamName} />
    },
  },
  {
    accessor: 'teamName',
    Cell: data => {
      return (
        <CellValue>
          <TeamName>{data.cell.value}</TeamName>
          <Rating
            readonly
            emptySymbol={<TiStarOutline style={{ color: 'gold' }} />}
            fullSymbol={<TiStarFullOutline style={{ color: 'gold' }} />}
            initialRating={parseFloat(data.row.original.teamRating) || 0}
          />
        </CellValue>
      )
    },
  },
  {
    accessor: 'Z',
    Header: () => <HeaderValue title="Zápasy">{'Z'}</HeaderValue>,
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
  {
    accessor: 'V',
    Header: () => <HeaderWins title="Výhry">{'V'}</HeaderWins>,
    Cell: data => <Wins>{data.cell.value}</Wins>,
  },
  {
    accessor: 'R',
    Header: () => <HeaderDraws title="Remízy">{'R'}</HeaderDraws>,
    Cell: data => <Draws>{data.cell.value}</Draws>,
  },
  {
    accessor: 'P',
    Header: () => <HeaderLoss title="Prohry">{'P'}</HeaderLoss>,
    Cell: data => <Loss>{data.cell.value}</Loss>,
  },
  {
    accessor: 'Skóre',
    isSorted: false,
    Header: () => <HeaderValue title="Skóre">{':'}</HeaderValue>,
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
  {
    accessor: 'Body',
    Header: () => <HeaderPoints title="Body">{'B'}</HeaderPoints>,
    Cell: data => <Points>{data.cell.value}</Points>,
  },
  {
    accessor: 'PIM',
    Header: () => <HeaderValue title="Tr. Minuty">{'PIM'}</HeaderValue>,
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
  {
    accessor: 'VG',
    Header: () => <HeaderValue title="Vstř. góly">{'VG'}</HeaderValue>,
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
  {
    accessor: 'OG',
    Header: () => <HeaderValue title="Obd. góly">{'OG'}</HeaderValue>,
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
  {
    accessor: 'Střely',
    Header: () => <HeaderValue title="Střely">{'S'}</HeaderValue>,
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
  {
    accessor: 'vhazování %',
    Header: () => <HeaderValue title="Vhazování">{'FO%'}</HeaderValue>,
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
]

const columnsHide736 = ['vhazování %', 'Střely', 'OG', 'VG']
const columnsHide480 = ['teamName']

const Standings = props => {
  const { fetchUrl, tabName, Filters } = props
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(fetchUrl, data => {
      const newData = data[tabName].elements.slice(0).filter(i => i.teamName)
      setData(newData)
      setFilteredData(newData)
      setIsLoading(false)
    })
  }, [fetchUrl, tabName])

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Filters data={data} setFilteredData={setFilteredData} />
      <AllFilters>
        <TableStyles>
          <Table
            columns={columnsStandings}
            data={filteredData}
            columnsHide736={columnsHide736}
            columnsHide480={columnsHide480}
          />
        </TableStyles>
      </AllFilters>
    </>
  )
}

const Standings20 = () => (
  <Standings
    fetchUrl={STANDINGS_20_URL}
    tabName={'Standing_ALL4publish'}
    Filters={Standings20Filters}
  />
)

export { Standings20 as default, Standings }
