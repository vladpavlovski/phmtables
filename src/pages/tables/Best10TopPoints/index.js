import React, { useState, useEffect, useCallback } from 'react'
import { useMedia } from 'use-media'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { Table } from '../../../components/Table'
import { LoaderPHM } from '../../../components/Loader'
import { getData } from '../../../api/get-data'
import { PLAYERS_URL } from '../../../api/data-url'

import { ItemInfo } from '../../../components/ItemInfo'

import { TableStyles, TeamLogo, CellValue } from './styled'

const columnsBest10 = [
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
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
  {
    accessor: 'Gólů',
    Header: 'G',
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
  {
    accessor: 'Asistencí',
    Header: 'A',
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
  {
    accessor: 'Bodů',
    Header: 'B',
    Cell: data => <CellValue>{data.cell.value}</CellValue>,
  },
]

const columnsHide530 = ['Bodů', 'Asistencí', 'Gólů', 'Zápasů']

const getColumnId = index => {
  let columnId
  switch (index) {
    case 0:
      columnId = 'Bodů'
      break
    case 1:
      columnId = 'Zápasů'
      break
    case 2:
      columnId = 'Gólů'
      break
    case 3:
      columnId = 'Asistencí'
      break
    default:
      columnId = null
  }

  return columnId
}

const Best10 = props => {
  const { fetchUrl, tabName } = props
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
  const [columnToSort, setColumnToSort] = useState(null)

  const rowOnMouseEnter = useCallback(
    data => {
      const { original } = data
      const nextDataPreview = {
        previewImageLink: original['Fotka'],
        title: original['Jméno'],
        description: original['Tým'],
        key: getColumnId(tabIndex),
        value: original[getColumnId(tabIndex)],
      }
      setDataPreview(nextDataPreview)
    },
    [tabIndex]
  )

  useEffect(() => {
    getData(fetchUrl, data => {
      const newData = data[tabName].elements.slice(0)
      setData(newData)
      rowOnMouseEnter({ original: newData[0] })
      setIsLoading(false)
    })
  }, [fetchUrl, rowOnMouseEnter, tabName])

  const min530 = useMedia({ minWidth: '530px' })

  const renderTable = useCallback(
    () => (
      <>
        <ItemInfo data={dataPreview} />
        <TableStyles>
          <Table
            columns={columnsBest10}
            data={data}
            rowOnMouseEnter={rowOnMouseEnter}
            columnToSort={columnToSort}
            columnsHide530={columnsHide530}
            tabIndex={min530 ? null : tabIndex}
          />
        </TableStyles>
      </>
    ),
    [columnToSort, data, dataPreview, min530, rowOnMouseEnter, tabIndex]
  )

  useEffect(() => {
    if (!min530) {
      setTabIndex(0)
    }
  }, [min530])

  const onTabSelect = useCallback(index => {
    setTabIndex(index)

    const columnId = getColumnId(index)
    if (columnId) {
      const newColumnToSort = {
        columnId,
        desc: true,
      }
      setColumnToSort(newColumnToSort)
    }
  }, [])

  return isLoading ? (
    <LoaderPHM />
  ) : min530 ? (
    renderTable()
  ) : (
    <Tabs defaultFocus onSelect={onTabSelect}>
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

const Best10TopPoints = () => (
  <Best10 fetchUrl={PLAYERS_URL} tabName={'Best10TOPpoints4publish'} />
)

export {
  Best10TopPoints as default,
  Best10,
  columnsBest10,
  columnsHide530,
  getColumnId,
}
