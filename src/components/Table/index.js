import React from 'react'
import { useTable, useSortBy, useExpanded } from 'react-table'

const Table = ({ columns, data, rowOnMouseEnter }) => {
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
}

export { Table }
