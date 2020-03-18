import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { Tab, Tabs, TabPanel } from 'react-tabs'

import { Table } from '../../components/Table'
import { LoaderPHM } from '../../components/Loader'
import { getData } from '../../api/get-data'
import {
  PLAYERS_URL,
  ALL_PLAYERS_19,
  ALL_PLAYERS_18,
  ALL_PLAYERS_17,
} from '../../api/data-url'
import { Filters } from './Filters'
import {
  TableStyles,
  AllFilters,
  TabInsider,
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
  PhmTabList,
} from './styled'
import { TiStarFullOutline } from 'react-icons/ti'

const AllPlayersYears = () => {
  const [data2020, setData2020] = useState([])
  const [filteredData2020, setFilteredData2020] = useState([])
  const [data2019, setData2019] = useState([])
  const [filteredData2019, setFilteredData2019] = useState([])
  const [data2018, setData2018] = useState([])
  const [filteredData2018, setFilteredData2018] = useState([])
  const [data2017, setData2017] = useState([])
  const [filteredData2017, setFilteredData2017] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [tabIndex, setTabIndex] = useState(0)

  const requestData = useCallback((url, tabName, setData, setFilteredData) => {
    getData(url, data => {
      const newData = data[tabName].elements.slice(0)
      setData(newData)
      setFilteredData(newData)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    requestData(
      PLAYERS_URL,
      'allPlayers4publish',
      setData2020,
      setFilteredData2020
    )
    requestData(
      ALL_PLAYERS_19,
      'allPlayers19_4publish',
      setData2019,
      setFilteredData2019
    )
    requestData(
      ALL_PLAYERS_18,
      'allPlayers18_4publish',
      setData2018,
      setFilteredData2018
    )
    requestData(
      ALL_PLAYERS_17,
      'allPlayers17_4publish',
      setData2017,
      setFilteredData2017
    )
  }, [requestData])

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
    ],
    []
  )

  const renderTable = useCallback(
    (data, filteredData, setFilteredData) => (
      <TabInsider>
        <Filters data={data} setFilteredData={setFilteredData} />
        <AllFilters>
          <TableStyles>
            <Table columns={columns} data={filteredData} />
          </TableStyles>
        </AllFilters>
      </TabInsider>
    ),
    [columns]
  )

  const render2020 = useCallback(
    () => renderTable(data2020, filteredData2020, setFilteredData2020),
    [data2020, filteredData2020, renderTable]
  )
  const render2019 = useCallback(
    () => renderTable(data2019, filteredData2019, setFilteredData2019),
    [data2019, filteredData2019, renderTable]
  )
  const render2018 = useCallback(
    () => renderTable(data2018, filteredData2018, setFilteredData2018),
    [data2018, filteredData2018, renderTable]
  )
  const render2017 = useCallback(
    () => renderTable(data2017, filteredData2017, setFilteredData2017),
    [data2017, filteredData2017, renderTable]
  )

  useEffect(() => {
    switch (tabIndex) {
      case 0:
        if (data2020.length === 0) {
          setIsLoading(true)
        }
        break
      case 1:
        if (data2019.length === 0) {
          setIsLoading(true)
        }
        break
      case 2:
        if (data2018.length === 0) {
          setIsLoading(true)
        }
        break
      case 3:
        if (data2017.length === 0) {
          setIsLoading(true)
        }
        break
      default:
    }
  }, [
    data2017.length,
    data2018.length,
    data2019.length,
    data2020.length,
    requestData,
    tabIndex,
  ])

  return (
    <Tabs
      forceRenderTabPanel
      onSelect={index => {
        setIsLoading(false)
        setTabIndex(index)
      }}
    >
      <PhmTabList className={'react-tabs__tab-list'}>
        <Tab>2020</Tab>
        <Tab>2019</Tab>
        <Tab>2018</Tab>
        <Tab>2017</Tab>
      </PhmTabList>

      <TabPanel>{isLoading ? <LoaderPHM /> : render2020()}</TabPanel>
      <TabPanel>{isLoading ? <LoaderPHM /> : render2019()}</TabPanel>
      <TabPanel>{isLoading ? <LoaderPHM /> : render2018()}</TabPanel>
      <TabPanel>{isLoading ? <LoaderPHM /> : render2017()}</TabPanel>
    </Tabs>
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

export { AllPlayersYears }
