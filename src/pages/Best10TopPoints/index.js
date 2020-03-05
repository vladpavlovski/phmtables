import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { useMedia } from 'use-media'
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

  const min736 = useMedia({ minWidth: '736' })

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
        show: min736,
        Cell: data => {
          return <>{data.cell.value}</>
        },
      },
      {
        accessor: 'Gólů',
        Header: 'G',
        show: min736,
        Cell: data => {
          return <>{data.cell.value}</>
        },
      },
      {
        accessor: 'Asistencí',
        Header: 'A',
        show: min736,
        Cell: data => {
          return <>{data.cell.value}</>
        },
      },
      {
        accessor: 'Bodů',
        Header: 'B',
        Cell: data => {
          return <>{data.cell.value}</>
        },
      },
    ],
    [min736]
  )

  return isLoading ? (
    <LoaderPHM />
  ) : (
    <>
      <ItemInfo data={dataPreview} />
      <TableStyles>
        <Table
          className="best-players"
          columns={columns}
          data={data}
          rowOnMouseEnter={rowOnMouseEnter}
        />
      </TableStyles>
    </>
  )
}

export { Best10TopPoints }
