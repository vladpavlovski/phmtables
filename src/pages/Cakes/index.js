import React, { useState, useMemo, useEffect } from 'react'
import { Table } from '../../components/Table'

import { LoaderPHM } from '../../components/Loader'

import { TableStyles, YablochnyjPirog } from './styled'

const allCakesData = [
  {
    name: 'yablochnyj',
    weght: '1kg',
    time: '2d',
  },
  {
    name: 'yablochnyj',
    weght: '1kg',
    time: '2d',
  },
  {
    name: 'yablochnyj',
    weght: '1kg',
    time: '2d',
  },
]

const Cakes = () => {
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setFilteredData(allCakesData)
    setIsLoading(false)
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Название',
        accessor: 'name',
        Cell: data => {
          return <YablochnyjPirog>{data.cell.value}</YablochnyjPirog>
        },
      },
      {
        Header: 'Вес',
        accessor: 'weght',
        Cell: data => {
          return <>{data.cell.value}</>
        },
      },
      {
        Header: 'Время изготовления',
        accessor: 'time',
        Cell: data => {
          return <>{data.cell.value}</>
        },
      },
    ],
    []
  )

  return isLoading ? (
    <LoaderPHM />
  ) : (
    <TableStyles>
      <Table columns={columns} data={filteredData} />
    </TableStyles>
  )
}

export { Cakes }
