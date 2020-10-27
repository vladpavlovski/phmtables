import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { useMedia } from 'use-media'
import { useTable, useSortBy, useExpanded } from 'react-table'
import { Loader } from '../../../components/Loader'
import { getData } from '../../../api/get-data'
import { RESULT_20_URL } from '../../../api/data-url'
import {
  TableStyles,
  TrOver,
  Tr,
  TrUnder,
  ScoreWrapper,
  ScoreLink,
  Score,
  LogoWrapper,
  Team,
  TeamHome,
  TeamLogo,
  TeamName,
  TeamNameHome,
  PhotoLink,
  Info,
  InfoDetails,
  InfoMobile,
  InfoMobileBottom,
  AllFilters,
} from './styled'
import { Filters } from './Filters'

import { TiStopwatch, TiCameraOutline } from 'react-icons/ti'
import { GiWhistle } from 'react-icons/gi'

const columnsHide630 = ['Datum a Místo', 'Fotoalbum']

const columnsHide960 = ['Časoměřič']

const Table = ({
  columns,
  data,
  renderRowUnder,
  renderRowOver,
  columnsHide960,
  columnsHide630,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    rows,
    prepareRow,
    visibleColumns,
    toggleHideColumn,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded
  )

  const min630 = useMedia({ minWidth: '630px' })
  const min960 = useMedia({ minWidth: '960px' })

  useEffect(() => {
    columnsHide960.forEach(col => {
      toggleHideColumn(col, !min960)
    })
    columnsHide630.forEach(col => {
      toggleHideColumn(col, !min630)
    })
  }, [toggleHideColumn, columnsHide960, columnsHide630, min960, min630])

  return (
    <table {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <React.Fragment key={row.index}>
              {!min630 && (
                <TrOver>
                  <td colSpan={visibleColumns.length}>
                    {renderRowOver({ row })}
                  </td>
                </TrOver>
              )}
              <Tr borders={min630} {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </Tr>
              {!min630 && (
                <TrUnder>
                  <td colSpan={visibleColumns.length}>
                    {renderRowUnder({ row })}
                  </td>
                </TrUnder>
              )}
            </React.Fragment>
          )
        })}
      </tbody>
    </table>
  )
}

Table.defaultProps = {
  columnsHide960: [],
  columnsHide630: [],
}

const Result = props => {
  const { fetchUrl, tabName } = props
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(fetchUrl, (data, tabletop) => {
      const newData = data[tabName].elements
        .slice(0)
        .filter(item => item['Game ID'] !== '')
      setData(newData)
      setFilteredData(newData)
      setIsLoading(false)
    })
  }, [fetchUrl, tabName])

  const min630 = useMedia({ minWidth: '630px' })

  const columns = useMemo(
    () => [
      {
        accessor: 'Datum a Místo',
        Cell: data => {
          const detailsValue = data.data[data.row.index]['Detaily zápasu']
            .split(',')
            .join(', ')
          const cellData = data.cell.value.split(',')
          return (
            <>
              <Info>{`${cellData[0]} ${cellData[1]}`}</Info>
              <Info>
                <strong>{`${cellData[2]} ${cellData[3]}`}</strong>
              </Info>
              <InfoDetails>{detailsValue}</InfoDetails>
            </>
          )
        },
      },
      {
        accessor: 'Tým (domácí)',
        Cell: data => {
          return (
            <TeamHome>
              <LogoWrapper>
                <TeamLogo src={data.cell.value} alt={data[data.row.index]} />
              </LogoWrapper>
              <TeamNameHome>{data.row.original['Tým 1 název']}</TeamNameHome>
            </TeamHome>
          )
        },
      },
      {
        accessor: 'Skóre',
        Cell: data => {
          const photoLink = data.data[data.row.index]['Fotoalbum']

          return (
            <>
              <ScoreWrapper>
                <ScoreLink
                  href={data.cell.row.original['Reportáž']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Score>{data.cell.value}</Score>
                </ScoreLink>
              </ScoreWrapper>
              {photoLink !== '' && photoLink !== 'Missing' && !min630 && (
                <PhotoLink
                  href={photoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiCameraOutline
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      fontSize: '4rem',
                    }}
                  />
                </PhotoLink>
              )}
            </>
          )
        },
      },
      {
        accessor: 'Tým (hosté)',
        Cell: data => {
          return (
            <Team>
              <LogoWrapper>
                <TeamLogo src={data.cell.value} alt={data[data.row.index]} />
              </LogoWrapper>
              <TeamName>{data.row.original['Tým 2 název']}</TeamName>
            </Team>
          )
        },
      },
      {
        accessor: 'Časoměřič',
        Cell: data => {
          return (
            <>
              <p>
                <TiStopwatch />
                {data.cell.value}
              </p>
              <p>
                <GiWhistle />
                {data.row.original['Rozhodčí']}
              </p>
            </>
          )
        },
      },
      {
        accessor: 'Fotoalbum',
        Cell: data => {
          return (
            data.cell.value !== '' &&
            data.cell.value !== 'Missing' && (
              <PhotoLink
                href={data.cell.value}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiCameraOutline style={{ fontSize: '4rem' }} />
              </PhotoLink>
            )
          )
        },
      },
    ],
    [min630]
  )

  const renderRowOver = useCallback(
    ({ row }) => <InfoMobile>{row.values['Datum a Místo']}</InfoMobile>,
    []
  )

  const renderRowUnder = useCallback(
    ({ row }) => (
      <InfoMobileBottom>
        {row.original['Detaily zápasu'].split(',').join(', ')}
      </InfoMobileBottom>
    ),
    []
  )

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Filters data={data} setFilteredData={setFilteredData} />
      <AllFilters>
        <TableStyles>
          <Table
            columns={columns}
            data={filteredData}
            renderRowUnder={renderRowUnder}
            renderRowOver={renderRowOver}
            columnsHide630={columnsHide630}
            columnsHide960={columnsHide960}
          />
        </TableStyles>
      </AllFilters>
    </>
  )
}

const Result20 = () => (
  <Result fetchUrl={RESULT_20_URL} tabName={'Matches4publish'} />
)

export { Result20 as default, Result, Table }
