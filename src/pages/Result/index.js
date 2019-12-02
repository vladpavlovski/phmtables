import React, { useState, useMemo, useEffect } from 'react'
import { useMedia } from 'use-media'

import { useTable, useSortBy } from 'react-table'
import { getData } from './data'
import {
  TableStyles,
  ScoreLink,
  Score,
  LogoWrapper,
  TeamLogo,
  PhotoLink,
  PhotoContent,
} from './styled'
import { Filters } from './Filters'

const spreadsheetUrl =
  'https://docs.google.com/spreadsheets/d/1XE3Vjp_E6tZ9nY1QKlNl9v1DAQqIeNIQJJuvXHQsE9Q/edit?usp=sharing'

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
    useSortBy
  )
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => {
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
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
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={row.index}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

const Result = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    getData(spreadsheetUrl, (data, tabletop) => {
      const newData = data.Data.elements.slice(1).filter(item => {
        return item['Game ID'] !== '' && item['Skóre'] !== ':'
      })
      // console.log('newData', newData)
      setData(newData)
      setFilteredData(newData)
    })
  }, [])

  // const min320 = useMedia({ minWidth: '320px' })
  const min480 = useMedia({ minWidth: '480px' })
  const min630 = useMedia({ minWidth: '630px' })
  const min736 = useMedia({ minWidth: '736px' })
  const min980 = useMedia({ minWidth: '980px' })
  const min1280 = useMedia({ minWidth: '1280px' })
  // const min1690 = useMedia({ minWidth: '1690px' })

  const columns = useMemo(
    () => [
      {
        Header: 'Datum a Místo',
        accessor: 'Datum a Místo',
        show: min480,
        Cell: row => (
          <div style={{}}>
            <ul>
              {row.cell.value.split(',').map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ),
      },
      {
        Header: 'Detaily zápasu',
        accessor: 'Detaily zápasu',
        show: min630,
        Cell: row => (
          <ul>
            {row.cell.value.split(',').map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ),
      },
      {
        Header: 'Zúčastněné týmy',
        accessor: 'Zúčastněné týmy',
        show: min736,
        Cell: row => (
          <ol>
            {row.cell.value.split(',').map((item, i) => (
              <li key={i}>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        ),
      },
      {
        Header: 'Tým (domácí)',
        accessor: 'Tým (domácí)',
        Cell: row => (
          <LogoWrapper>
            <TeamLogo src={row.cell.value} alt={data[row.row.index]} />
          </LogoWrapper>
        ),
      },
      {
        Header: 'Skóre',
        accessor: 'Skóre',
        Cell: data => {
          return (
            <ScoreLink
              href={data.cell.row.original['Link na Zápis z utkání']}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Score>{data.cell.value}</Score>
            </ScoreLink>
          )
        },
      },
      {
        Header: 'Tým (hosté)',
        accessor: 'Tým (hosté)',
        Cell: data => (
          <LogoWrapper>
            <TeamLogo src={data.cell.value} alt={data[data.row.index]} />
          </LogoWrapper>
        ),
      },
      {
        Header: 'Časoměřič',
        accessor: 'Časoměřič',
        show: min980,
      },
      {
        Header: 'Rozhodčí',
        accessor: 'Rozhodčí',
        show: min980,
      },
      {
        Header: 'Foto',
        accessor: 'Link na Fotoalbum',
        Cell: data => {
          return (
            data.cell.value !== '' &&
            data.cell.value !== 'Missing' && (
              <PhotoLink
                href={data.cell.value}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhotoContent>Foto</PhotoContent>
              </PhotoLink>
            )
          )
        },
      },
    ],
    [data, min480, min630, min736, min980]
  )
  return (
    <>
      {min1280 && <Filters data={data} setFilteredData={setFilteredData} />}
      <TableStyles>
        <Table columns={columns} data={filteredData} />
      </TableStyles>
    </>
  )
}

export { Result }
