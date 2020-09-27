import React, { useState, useEffect } from 'react'

import { Table } from '../../../components/Table'
import { LoaderPHM } from '../../../components/Loader'
import { getData } from '../../../api/get-data'
import { PLAYERS_URL } from '../../../api/data-url'
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
import { TiStarFullOutline } from 'react-icons/ti'

const columnsAllPlayers = [
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
    Header: 'Z',
    Cell: data => {
      return <CellValue>{data.cell.value}</CellValue>
    },
  },
  {
    accessor: 'Gólů',
    Header: 'G',
    Cell: data => {
      return <Goals>{data.cell.value}</Goals>
    },
  },
  {
    accessor: 'Asistencí',
    Header: 'A',
    Cell: data => {
      return <Assistance>{data.cell.value}</Assistance>
    },
  },
  {
    accessor: 'Bodů',
    Header: 'B',
    Cell: data => {
      return <Points>{data.cell.value}</Points>
    },
  },
  {
    accessor: 'PIM',
    Header: 'Tr.M',
    Cell: data => {
      return <Pim>{data.cell.value}</Pim>
    },
  },
  {
    accessor: 'Hvězda',
    Header: <TiStarFullOutline style={{ color: 'gold' }} />,
    Cell: data => {
      return <Star>{data.cell.value}</Star>
    },
  },
]

const AllPlayers = props => {
  const { fetchUrl, tabName } = props
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(fetchUrl, data => {
      const newData = data[tabName].elements.slice(0).filter(i => i.ID)
      setData(newData)
      setFilteredData(newData)
      setIsLoading(false)
    })
  }, [fetchUrl, tabName])

  return isLoading ? (
    <LoaderPHM />
  ) : (
    <>
      <Filters data={data} setFilteredData={setFilteredData} />
      <AllFilters>
        <TableStyles>
          <Table columns={columnsAllPlayers} data={filteredData} />
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

const AllPlayersAll = () => (
  <AllPlayers fetchUrl={PLAYERS_URL} tabName={'allPlayers4publish'} />
)
export { AllPlayersAll as default, AllPlayers, columnsAllPlayers }
