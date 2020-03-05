import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { useMedia } from 'use-media'
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
        Cell: data => {
          return (
            <>
              <TeamLogo src={data.cell.value} alt={'team'} />
            </>
          )
        },
      },
      {
        accessor: 'Jméno',
        Cell: data => {
          return <>{data.cell.value}</>
        },
      },
      {
        accessor: 'Zápasů',
        Header: 'GP',
        show: min530,
        Cell: data => {
          return <CellValue>{data.cell.value}</CellValue>
        },
      },
      {
        accessor: 'Gólů',
        Header: 'G',
        show: min530,
        Cell: data => {
          return <CellValue>{data.cell.value}</CellValue>
        },
      },
      {
        accessor: 'Asistencí',
        Header: 'A',
        show: min530,
        Cell: data => {
          return <CellValue>{data.cell.value}</CellValue>
        },
      },
      {
        accessor: 'Bodů',
        Header: 'B',
        Cell: data => {
          return <CellValue>{data.cell.value}</CellValue>
        },
      },
    ],
    [min530]
  )

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

export { Best10KlasikPoints }
