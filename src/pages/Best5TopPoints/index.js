import React, { useState, useMemo, useEffect } from 'react'

import { Table } from '../../components/Table'
import { LoaderPHM } from '../../components/Loader'
import { getData } from '../../api/get-data'
import { PLAYERS_URL } from '../../api/data-url'

import {
  TableStyles,
  // AllFilters,
  // TeamName,
  // PlayerName,
  // PlayerPhoto,
  // PlayerCellWrapper,
  // ZoomWrapper,
  // PlayerPhotoZoomed,
  // CellValue,
  // Goals,
  // Assistance,
  // Points,
  // Pim,
  // Star,
} from '../AllPlayers/styled'

const Best5TopPoints = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(PLAYERS_URL, data => {
      const newData = data['Best5TOPpoints4publish'].elements.slice(0)
      setData(newData)
      setFilteredData(newData)
      setIsLoading(false)
    })
  }, [])

  const columns = useMemo(
    () => [
      {
        accessor: 'TeamLogo',
        Cell: data => {
          return (
            <>
              <img src={data.cell.value} width="50" height="50" alt={'team'} />
              {/* <PlayerName>{data.cell.value}</PlayerName>
            <TeamName>{data.data[data.row.index]['Tým']}</TeamName> */}
            </>
          )
        },
      },
      {
        accessor: 'Jméno',
        Header: 'Jméno',
        Cell: data => {
          return (
            <>
              {data.cell.value}
              {/* <PlayerName>{data.cell.value}</PlayerName>
            <TeamName>{data.data[data.row.index]['Tým']}</TeamName> */}
            </>
          )
        },
      },
      {
        accessor: 'Zápasů',
        Header: 'GP',
        Cell: data => {
          return (
            <>
              {data.cell.value}
              {/* <PlayerName>{data.cell.value}</PlayerName>
            <TeamName>{data.data[data.row.index]['Tým']}</TeamName> */}
            </>
          )
        },
      },
      {
        accessor: 'Gólů',
        Header: 'G',
        Cell: data => {
          return (
            <>
              {data.cell.value}
              {/* <PlayerName>{data.cell.value}</PlayerName>
            <TeamName>{data.data[data.row.index]['Tým']}</TeamName> */}
            </>
          )
        },
      },
      {
        accessor: 'Asistencí',
        Header: 'A',
        Cell: data => {
          return (
            <>
              {data.cell.value}
              {/* <PlayerName>{data.cell.value}</PlayerName>
            <TeamName>{data.data[data.row.index]['Tým']}</TeamName> */}
            </>
          )
        },
      },
      {
        accessor: 'Bodů',
        Header: 'B',
        Cell: data => {
          return (
            <>
              {data.cell.value}
              {/* <PlayerName>{data.cell.value}</PlayerName>
            <TeamName>{data.data[data.row.index]['Tým']}</TeamName> */}
            </>
          )
        },
      },
    ],
    []
  )

  return isLoading ? (
    <LoaderPHM />
  ) : (
    <>
      {/* <Filters data={data} setFilteredData={setFilteredData} /> */}
      {/* <AllFilters> */}
      <TableStyles>
        <Table columns={columns} data={filteredData} />
      </TableStyles>
      {/* </AllFilters> */}
    </>
  )
}

export { Best5TopPoints }
