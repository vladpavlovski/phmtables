import React, { useState, useMemo, useEffect } from 'react'
import Rating from 'react-rating'
import { useMedia } from 'use-media'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

import { Table } from '../../../components/Table'
import { LoaderPHM } from '../../../components/Loader'
import { getData } from '../../../api/get-data'
import { STANDINGS_21_URL } from '../../../api/data-url'

import { Filters } from './Filters'
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
} from '../Standings20/styled'

const Standings21Klasik = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(STANDINGS_21_URL, data => {
      const newData = data['Standing_KLASIK4publish'].elements.slice(0)
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
        Cell: data => <Rank>{data.cell.value}</Rank>,
      },
      {
        accessor: 'teamLogo',
        Cell: data => {
          return (
            <TeamLogo src={data.cell.value} alt={data.row.original.teamName} />
          )
        },
      },
      {
        accessor: 'teamName',
        show: min480,
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
        show: min736,
        Cell: data => <CellValue>{data.cell.value}</CellValue>,
      },
      {
        accessor: 'OG',
        Header: () => <HeaderValue title="Obd. góly">{'OG'}</HeaderValue>,
        show: min736,
        Cell: data => <CellValue>{data.cell.value}</CellValue>,
      },
      {
        accessor: 'Střely',
        Header: () => <HeaderValue title="Střely">{'S'}</HeaderValue>,
        show: min736,
        Cell: data => <CellValue>{data.cell.value}</CellValue>,
      },
      {
        accessor: 'vhazování %',
        Header: () => <HeaderValue title="Vhazování">{'FO%'}</HeaderValue>,
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

export { Standings21Klasik as default }
