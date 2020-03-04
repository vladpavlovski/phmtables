import React, { useState, useMemo, useEffect } from 'react'
// import { useMedia } from 'use-media'
import { Table } from '../../components/Table'
import { LoaderPHM } from '../../components/Loader'
import { getData } from '../../api/get-data'
import { PLAYERS_URL } from '../../api/data-url'
import { Filters } from './Filters'
import {
  TableStyles,
  AllFilters,
  TeamName,
  PlayerName,
  PlayerPhoto,
  PlayerCellWrapper,
  ZoomWrapper,
  PlayerPhotoZoomed,
  CellValue,
  Goals,
  Assistance,
  Points,
  Pim,
  Star,
} from './styled'

const AllPlayers = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(PLAYERS_URL, data => {
      const newData = data['allPlayers4publish'].elements.slice(0)
      setData(newData)
      setFilteredData(newData)
      setIsLoading(false)
    })
  }, [])

  // const min736 = useMedia({ minWidth: '736px' })
  // const min480 = useMedia({ minWidth: '480px' })

  const columns = useMemo(
    () => [
      // {
      //   accessor: 'Pořadí',
      //   Cell: data => <div>{data.cell.value}</div>,
      // },
      {
        accessor: 'Fotka',
        Cell: data => {
          return (
            data.cell.value !== '' && (
              <PlayerCell
                src={data.cell.value}
                alt={data.data[data.row.index]['Jméno']}
              />
            )
          )
        },
      },
      {
        accessor: 'Jméno',
        Header: 'Jméno',
        Cell: data => {
          return (
            <>
              <PlayerName>{data.cell.value}</PlayerName>
              <TeamName>{data.data[data.row.index]['Tým']}</TeamName>
            </>
          )
        },
      },
      {
        accessor: 'Zápasů',
        Header: 'Zápasů',
        Cell: data => {
          return <CellValue>{data.cell.value}</CellValue>
        },
      },
      {
        accessor: 'Gólů',
        Header: 'Gólů',
        Cell: data => {
          return <Goals>{data.cell.value}</Goals>
        },
      },
      {
        accessor: 'Asistencí',
        Header: 'Asistencí',
        Cell: data => {
          return <Assistance>{data.cell.value}</Assistance>
        },
      },
      {
        accessor: 'Bodů',
        Header: 'Bodů',
        Cell: data => {
          return <Points>{data.cell.value}</Points>
        },
      },
      {
        accessor: 'PIM',
        Header: 'Tr.min',
        Cell: data => {
          return <Pim>{data.cell.value}</Pim>
        },
      },
      {
        accessor: 'Hvězda',
        Header: 'Hvězda',
        Cell: data => {
          return <Star>{data.cell.value}</Star>
        },
      },
    ],
    []
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

const PlayerCell = props => {
  const [hovered, setHovered] = useState(false)

  return (
    <PlayerCellWrapper
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
    >
      <PlayerPhoto {...props} />
      {hovered && (
        <ZoomWrapper>
          <PlayerPhotoZoomed {...props} />
        </ZoomWrapper>
      )}
    </PlayerCellWrapper>
  )
}

export { AllPlayers }
