import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { useMedia } from 'use-media'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { Table } from '../../components/Table'
import { LoaderPHM } from '../../components/Loader'
import { getData } from '../../api/get-data'
import { PLAYERS_URL } from '../../api/data-url'

import { ItemInfo } from '../../components/ItemInfo'

import { TableStyles, TeamLogo, CellValue } from '../Best10TopPoints/styled'

const Best10KlasikPoints = () => {
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
      const newData = data['Best10KLASIKpoints4publish'].elements.slice(0)
      setData(newData)
      rowOnMouseEnter({ original: newData[0] })
      setIsLoading(false)
    })
  }, [rowOnMouseEnter])

  const min530 = useMedia({ minWidth: '530px' })

  const columns = useMemo(
    () => [
      {
        accessor: 'TeamLogo',
        Cell: data => <TeamLogo src={data.cell.value} alt={'team'} />,
      },
      {
        accessor: 'Jméno',
        Cell: data => <CellValue>{data.cell.value}</CellValue>,
      },
      {
        accessor: 'Zápasů',
        Header: 'GP',
        show: (!min530 && tabIndex === 1 && tabsOn) || min530,
        Cell: data => <CellValue>{data.cell.value}</CellValue>,
      },
      {
        accessor: 'Gólů',
        Header: 'G',
        show: (!min530 && tabIndex === 2 && tabsOn) || min530,
        Cell: data => <CellValue>{data.cell.value}</CellValue>,
      },
      {
        accessor: 'Asistencí',
        Header: 'A',
        show: (!min530 && tabIndex === 3 && tabsOn) || min530,
        Cell: data => <CellValue>{data.cell.value}</CellValue>,
      },
      {
        accessor: 'Bodů',
        Header: 'B',
        show: (!min530 && tabIndex === 0 && tabsOn) || min530,
        Cell: data => <CellValue>{data.cell.value}</CellValue>,
      },
    ],
    [min530, tabIndex, tabsOn]
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
    if (!min530) {
      setTabIndex(0)
      setTabsOn(true)
    }
  }, [min530])

  return isLoading ? (
    <LoaderPHM />
  ) : min530 ? (
    renderTable()
  ) : (
    <Tabs
      defaultFocus
      onSelect={index => {
        setTabIndex(index)
      }}
    >
      <TabList>
        <Tab>Body</Tab>
        <Tab>Zápasy</Tab>
        <Tab>Góly</Tab>
        <Tab>Asistencí</Tab>
      </TabList>

      <TabPanel>{renderTable()}</TabPanel>
      <TabPanel>{renderTable()}</TabPanel>
      <TabPanel>{renderTable()}</TabPanel>
      <TabPanel>{renderTable()}</TabPanel>
    </Tabs>
  )
}

export { Best10KlasikPoints }
