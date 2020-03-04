import React, { useState, useMemo, useEffect } from 'react'

import { Table } from '../../components/Table'
import { LoaderPHM } from '../../components/Loader'
import { getData } from '../../api/get-data'
import { PLAYERS_URL } from '../../api/data-url'

import { ItemInfo } from '../../components/ItemInfo'

import { TableStyles } from '../AllPlayers/styled'

const Best10TopPoints = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [dataPreview, setDataPreview] = useState({
    previewImageLink: '',
    title: '',
    description: '',
    key: '',
    value: '',
  })

  useEffect(() => {
    getData(PLAYERS_URL, data => {
      const newData = data['Best10TOPpoints4publish'].elements.slice(0)
      setData(newData)
      rowOnMouseEnter({ original: newData[0] })
      // setFilteredData(newData)
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

  const rowOnMouseEnter = data => {
    const { original } = data
    const nextDataPreview = {
      previewImageLink: original['Fotka'],
      title: original['Jméno'],
      description: original['Tým'],
      key: 'Body',
      value: original['Bodů'],
    }
    setDataPreview(nextDataPreview)
  }

  return isLoading ? (
    <LoaderPHM />
  ) : (
    <>
      <ItemInfo data={dataPreview} />
      <TableStyles>
        <Table
          columns={columns}
          data={data}
          rowOnMouseEnter={rowOnMouseEnter}
        />
      </TableStyles>
    </>
  )
}

export { Best10TopPoints }
