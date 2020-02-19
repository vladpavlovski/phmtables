import React, { useState, useMemo, useEffect } from 'react'
import { useMedia } from 'use-media'
import { useTable, useSortBy, useExpanded } from 'react-table'

import Rating from 'react-rating'

import { LoaderPHM } from '../../components/Loader'
import { getData } from '../../api/get-data'

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
} from './styled'

import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

const standingsUrl =
  'https://docs.google.com/spreadsheets/d/1SKoCbwFLoSi_hH_b5mSzk38EU1iRFWf4QY0jkoOXm6E/edit?usp=sharing'

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded
  )

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => {
          return (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => {
                return (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                )
              })}
            </tr>
          )
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const Standings20 = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(standingsUrl, data => {
      const newData = data['Standing_ALL4publish'].elements.slice(0)
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

Standings20.propTypes = {}

export { Standings20 }
