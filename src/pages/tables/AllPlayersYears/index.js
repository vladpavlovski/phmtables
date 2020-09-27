import React, { useState, useEffect, useCallback } from 'react'
import { Tab, Tabs, TabPanel } from 'react-tabs'

import { Table } from '../../../components/Table'
import { LoaderPHM } from '../../../components/Loader'
import { getData } from '../../../api/get-data'
import {
  PLAYERS_URL,
  ALL_PLAYERS_19,
  ALL_PLAYERS_18,
  ALL_PLAYERS_17,
  ALL_PLAYERS_ALL_TIME,
} from '../../../api/data-url'
import { Filters } from '../AllPlayers/Filters'
import {
  TableStyles,
  AllFilters,
  TabInsider,
  PhmTabList,
} from '../AllPlayers/styled'

import { columnsAllPlayers } from '../AllPlayers'

const AllPlayersYears = () => {
  const [dataAllTime, setDataAllTime] = useState([])
  const [filteredDataAllTime, setFilteredDataAllTime] = useState([])
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
      const newData = data[tabName].elements.slice(0).filter(i => i.ID)
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
    requestData(
      ALL_PLAYERS_ALL_TIME,
      'allPlayersAllTime',
      setDataAllTime,
      setFilteredDataAllTime
    )
  }, [requestData])

  const renderTable = useCallback(
    (data, filteredData, setFilteredData) => (
      <TabInsider>
        <Filters data={data} setFilteredData={setFilteredData} />
        <AllFilters>
          <TableStyles>
            <Table columns={columnsAllPlayers} data={filteredData} />
          </TableStyles>
        </AllFilters>
      </TabInsider>
    ),
    []
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

  const renderAllTime = useCallback(
    () => renderTable(dataAllTime, filteredDataAllTime, setFilteredDataAllTime),
    [dataAllTime, filteredDataAllTime, renderTable]
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
      case 4:
        if (dataAllTime.length === 0) {
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
    dataAllTime.length,
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
        <Tab>Všechny sezóny</Tab>
      </PhmTabList>

      <TabPanel>{isLoading ? <LoaderPHM /> : render2020()}</TabPanel>
      <TabPanel>{isLoading ? <LoaderPHM /> : render2019()}</TabPanel>
      <TabPanel>{isLoading ? <LoaderPHM /> : render2018()}</TabPanel>
      <TabPanel>{isLoading ? <LoaderPHM /> : render2017()}</TabPanel>
      <TabPanel>{isLoading ? <LoaderPHM /> : renderAllTime()}</TabPanel>
    </Tabs>
  )
}

export { AllPlayersYears as default }
