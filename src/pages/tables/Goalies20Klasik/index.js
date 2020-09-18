import React, { useState, useMemo, useEffect } from 'react'
// import Rating from 'react-rating'
import { useMedia } from 'use-media'
// import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

import { Table } from '../../../components/Table'
import { LoaderPHM } from '../../../components/Loader'
import { getData } from '../../../api/get-data'
import { GOALIES_20_URL } from '../../../api/data-url'

import { Filters } from './Filters'
import {
  TableStyles,
  AllFilters,
  AvatarLogo,
  TeamName,
  TeamNameSmall,
  Rank,
  Wins,
  // Draws,
  Loss,
  Points,
  CellValue,
  HeaderValue,
  HeaderWins,
  // HeaderDraws,
  HeaderLoss,
  HeaderPoints,
} from '../Standings20/styled'

const Goalies20Klasik = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(GOALIES_20_URL, data => {
      const newData = data[' allGoaliesKLASIK4publish'].elements
        .slice(0)
        .filter(i => i.ID)
      setData(newData)
      setFilteredData(newData)
      setIsLoading(false)
    })
  }, [])

  const min736 = useMedia({ minWidth: '736px' })
  const min480 = useMedia({ minWidth: '480px' })

  const columns = useMemo(
    () => [
      {
        accessor: 'Pořadí',
        Header: () => <HeaderValue title="Pořadí">{'Pořadí'}</HeaderValue>,
        Cell: data => <Rank>{data.cell.value}</Rank>,
      },
      {
        accessor: 'Fotka',
        Cell: data => {
          return (
            <AvatarLogo
              src={data.cell.value}
              alt={data.row.original['Jméno']}
            />
          )
        },
      },
      {
        accessor: 'Jméno',
        show: min480,
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
        Header: () => (
          <HeaderValue title="Vítězství">{'Vítězství'}</HeaderValue>
        ),
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
        Cell: data => (
          <Wins>{`${Math.round(data.cell.value * 100) / 100}%`}</Wins>
        ),
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
        show: min736,
        Cell: data => <CellValue>{data.cell.value}</CellValue>,
      },
      {
        accessor: 'Hvězda',
        Header: () => <HeaderValue title="Hvězda">{'Hvězda'}</HeaderValue>,
        show: min736,
        Cell: data => <CellValue>{data.cell.value}</CellValue>,
      },
    ],
    [min480, min736]
  )

  return isLoading ? (
    <LoaderPHM />
  ) : (
    <>
      <Filters data={data} setFilteredData={setFilteredData} />
      <AllFilters>
        <TableStyles>
          <Table columns={columns} data={filteredData} />
        </TableStyles>
      </AllFilters>
    </>
  )
}

export { Goalies20Klasik as default }
