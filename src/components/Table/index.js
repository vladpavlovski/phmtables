import React, { useEffect, useState } from 'react'
import { useTable, useSortBy, useExpanded } from 'react-table'

const Table = ({ columns, data, rowOnMouseEnter, columnToSort }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    toggleSortBy,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded
  )

  const [cts, setCts] = useState(columnToSort)

  useEffect(() => {
    if (cts && columnToSort && cts.columnId === columnToSort.columnId) {
      toggleSortBy(cts.columnId, cts.desc, false)
      setCts(null)
    }
  }, [columnToSort, cts, rowOnMouseEnter, rows, toggleSortBy])

  useEffect(() => {
    rowOnMouseEnter(rows[0])
  }, [rowOnMouseEnter, rows])

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
                    {column.isSorted && (
                      <span>{column.isSortedDesc ? ' 🔽' : ' 🔼'}</span>
                    )}
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
            <tr
              {...row.getRowProps()}
              onMouseEnter={() => rowOnMouseEnter(row)}
              onTouchStart={() => rowOnMouseEnter(row)}
            >
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

Table.defaultProps = {
  rowOnMouseEnter: () => {},
  columnToSort: null,
}

export { Table }
