import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { useMedia } from 'use-media'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { Table } from '../../components/Table'
import { LoaderPHM } from '../../components/Loader'
import { getData } from '../../api/get-data'
import { PLAYERS_URL } from '../../api/data-url'

import { ItemInfo } from '../../components/ItemInfo'

import { TableStyles, TeamLogo } from './styled'

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
  const [tabIndex, setTabIndex] = useState(0)
  const [tabsOn, setTabsOn] = useState(false)
  const rowOnMouseEnter = useCallback(data => {
    const { original } = data
    const nextDataPreview = {
      previewImageLink: original['Fotka'],
      title: original['Jméno'],
      description: original['Tým'],
      key: 'Body',
      value: original['Bodů'],
    }
    setDataPreview(nextDataPreview)
  }, [])

  useEffect(() => {
    getData(PLAYERS_URL, data => {
      const newData = data['Best10TOPpoints4publish'].elements.slice(0)
      setData(newData)
      rowOnMouseEnter({ original: newData[0] })
      setIsLoading(false)
    })
  }, [rowOnMouseEnter])

  const min736 = useMedia({ minWidth: '736px' })

  const columns = useMemo(
    () => [
      {
        accessor: 'TeamLogo',
        Cell: data => <TeamLogo src={data.cell.value} alt={'team'} />,
      },
      {
        accessor: 'Jméno',
        Cell: data => <>{data.cell.value}</>,
      },
      {
        accessor: 'Zápasů',
        Header: 'GP',
        show: (!min736 && tabIndex === 1 && tabsOn) || min736,
        Cell: data => <>{data.cell.value}</>,
      },
      {
        accessor: 'Gólů',
        Header: 'G',
        show: (!min736 && tabIndex === 2 && tabsOn) || min736,
        Cell: data => <>{data.cell.value}</>,
      },
      {
        accessor: 'Asistencí',
        Header: 'A',
        show: (!min736 && tabIndex === 3 && tabsOn) || min736,
        Cell: data => <>{data.cell.value}</>,
      },
      {
        accessor: 'Bodů',
        Header: 'B',
        show: (!min736 && tabIndex === 0 && tabsOn) || min736,
        Cell: data => <>{data.cell.value}</>,
      },
    ],
    [min736, tabIndex, tabsOn]
  )

  const renderTable = useCallback(
    () => (
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
    ),
    [columns, data, dataPreview, rowOnMouseEnter]
  )

  useEffect(() => {
    if (!min736) {
      setTabIndex(0)
      setTabsOn(true)
    }
  }, [min736])

  return isLoading ? (
    <LoaderPHM />
  ) : min736 ? (
    renderTable()
  ) : (
    <Tabs
      defaultFocus
      onSelect={index => {
        setTabIndex(index)
      }}
    >
      <TabList>
        <Tab>B</Tab>
        <Tab>GP</Tab>
        <Tab>G</Tab>
        <Tab>A</Tab>
      </TabList>

      <TabPanel>{renderTable()}</TabPanel>
      <TabPanel>{renderTable()}</TabPanel>
      <TabPanel>{renderTable()}</TabPanel>
      <TabPanel>{renderTable()}</TabPanel>
    </Tabs>
  )
}

export { Best10TopPoints }
