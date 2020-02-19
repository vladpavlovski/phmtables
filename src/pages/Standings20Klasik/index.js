import React, { useState, useMemo, useEffect } from 'react'
import Rating from 'react-rating'
import { useMedia } from 'use-media'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

import { Table } from '../../components/Table'
import { LoaderPHM } from '../../components/Loader'
import { getData } from '../../api/get-data'
import { STANDINGS_URL } from '../../api/data-url'

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
} from '../Standings20/styled'

const Standings20Klasik = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(STANDINGS_URL, data => {
      const newData = data['Standing_KLASIK4publish'].elements.slice(0)
      setData(newData)
      setFilteredData(newData)
      setIsLoading(false)
    })
  }, [])

  const min736 = useMedia({ minWidth: '736px' })

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
        Cell: data => {
          return (
            <>
              <TeamName>{data.cell.value}</TeamName>
              <Rating
                readonly
                emptySymbol={<TiStarOutline style={{ color: 'gold' }} />}
                fullSymbol={<TiStarFullOutline style={{ color: 'gold' }} />}
                initialRating={parseFloat(data.row.original.teamRating) || 0}
              />
            </>
          )
        },
      },
      {
        accessor: 'Z',
        Header: 'GP',
        Cell: data => <div>{data.cell.value}</div>,
      },
      {
        accessor: 'V',
        Header: 'V',
        Cell: data => <Wins>{data.cell.value}</Wins>,
      },
      {
        accessor: 'R',
        Header: 'R',
        Cell: data => <Draws>{data.cell.value}</Draws>,
      },
      {
        accessor: 'P',
        Header: 'P',
        Cell: data => <Loss>{data.cell.value}</Loss>,
      },
      {
        accessor: 'Skóre',
        Header: 'Skóre',
        Cell: data => <div>{data.cell.value}</div>,
      },

      {
        accessor: 'Body',
        Header: 'B',
        Cell: data => <Points>{data.cell.value}</Points>,
      },
      {
        accessor: 'PIM',
        Header: 'PIM',
        Cell: data => <div>{data.cell.value}</div>,
      },
      {
        accessor: 'VG',
        Header: 'VG',
        show: min736,
        Cell: data => <div>{data.cell.value}</div>,
      },
      {
        accessor: 'OG',
        Header: 'OG',
        show: min736,
        Cell: data => <div>{data.cell.value}</div>,
      },
      {
        accessor: 'Střely',
        Header: 'Střely',
        show: min736,
        Cell: data => <div>{data.cell.value}</div>,
      },
      {
        accessor: 'vhazování %',
        Header: 'vhazování %',
        show: min736,
        Cell: data => <div>{data.cell.value}</div>,
      },
    ],
    [min736]
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

export { Standings20Klasik }
