import React, { useEffect, useState } from 'react'
import { useTable, useSortBy, useExpanded } from 'react-table'
import { useMedia } from 'use-media'

const Table = props => {
  const {
    columns,
    data,
    rowOnMouseEnter,
    columnToSort,
    columnsHide736,
    columnsHide480,
    columnsHide960,
    columnsHide630,
    columnsHide530,
    tabIndex,
  } = props
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    toggleSortBy,
    toggleHideColumn,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded
  )

  const min630 = useMedia({ minWidth: '630px' })
  const min960 = useMedia({ minWidth: '960px' })
  const min736 = useMedia({ minWidth: '736px' })
  const min480 = useMedia({ minWidth: '480px' })
  const min530 = useMedia({ minWidth: '530px' })

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

  useEffect(() => {
    columnsHide736.forEach(col => {
      toggleHideColumn(col, !min736)
    })
    columnsHide480.forEach(col => {
      toggleHideColumn(col, !min480)
    })
    columnsHide960.forEach(col => {
      toggleHideColumn(col, !min960)
    })
    columnsHide630.forEach(col => {
      toggleHideColumn(col, !min630)
    })
    //onlyFor tables "BEST10*"
    columnsHide530.forEach(col => {
      const togglePosition =
        min530 ||
        (!min530 && tabIndex === 1 && col === 'Zápasů') ||
        (!min530 && tabIndex === 2 && col === 'Gólů') ||
        (!min530 && tabIndex === 3 && col === 'Asistencí') ||
        (!min530 && tabIndex === 0 && col === 'Bodů')
      toggleHideColumn(col, !togglePosition)
    })
  }, [
    columnsHide736,
    min736,
    min480,
    toggleHideColumn,
    columnsHide480,
    columnsHide960,
    columnsHide630,
    min960,
    min630,
    columnsHide530,
    min530,
    tabIndex,
  ])

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
  columnsHide736: [],
  columnsHide480: [],
  columnsHide630: [],
  columnsHide960: [],
  columnsHide530: [],
  tabIndex: null,
}

export { Table }
