import React, { useState, useMemo, useEffect } from 'react'

import { useTable } from 'react-table'
import { getData } from './data'
import { TableStyles } from './styled'
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
  } = useTable({
    columns,
    data,
  })

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => {
            return (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.Hreader}
              >
                {headerGroup.headers.map(column => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                      <div>
                        {column.canFilter && column.Filter
                          ? column.render('Filter')
                          : null}
                      </div>
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
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
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

  const columns = useMemo(
    () => [
      {
        Header: 'Datum a Místo',
        accessor: 'Datum a Místo',
        Cell: row => (
          <ul>
            {row.cell.value.split(',').map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      },
      {
        Header: 'Detaily zápasu',
        accessor: 'Detaily zápasu',
        Cell: row => (
          <ul>
            {row.cell.value.split(',').map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      },
      {
        Header: 'Zúčastněné týmy',
        accessor: 'Zúčastněné týmy',
        Cell: row => (
          <ol>
            {row.cell.value.split(',').map(item => (
              <li key={item}>
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
          <img
            width={70}
            height={70}
            src={row.cell.value}
            alt={data[row.row.index]}
          />
        ),
      },
      {
        Header: 'Skóre',
        accessor: 'Skóre',
        width: 300,
      },
      {
        Header: 'Tým (hosté)',
        accessor: 'Tým (hosté)',
        Cell: row => (
          <img
            width={70}
            height={70}
            src={row.cell.value}
            alt={data[row.row.index]}
          />
        ),
      },
      {
        Header: 'Časoměřič',
        accessor: 'Časoměřič',
      },
      {
        Header: 'Rozhodčí',
        accessor: 'Rozhodčí',
      },
    ],
    [data]
  )
  return (
    <>
      <Filters data={data} setFilteredData={setFilteredData} />
      <TableStyles>
        <Table columns={columns} data={filteredData} />
      </TableStyles>
    </>
  )
}

export { Result }
