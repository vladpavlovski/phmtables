import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { useMedia } from 'use-media'

import { useTable, useSortBy, useExpanded } from 'react-table'
import { getData } from './data'
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
  AllFilters,
} from './styled'
import { Filters } from './Filters'

import { TiStopwatch, TiCameraOutline } from 'react-icons/ti'
import { GiWhistle } from 'react-icons/gi'

// const spreadsheetUrl =
//   'https://docs.google.com/spreadsheets/d/1XE3Vjp_E6tZ9nY1QKlNl9v1DAQqIeNIQJJuvXHQsE9Q/edit?usp=sharing'

const resultUrl =
  'https://docs.google.com/spreadsheets/d/1PpATiNI_WDl-Wt7O7yLnN89UfGzLoT1_xnVcWAJ_77I/edit?usp=sharing'
const Table = ({ columns, data, renderRowUnder, renderRowOver }) => {
  const {
    getTableProps,
    getTableBodyProps,
    // headerGroups,
    rows,
    prepareRow,
    flatColumns,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded
  )

  const min630 = useMedia({ minWidth: '630px' })

  return (
    <table {...getTableProps()}>
      {/* <thead>
          {headerGroups.map(headerGroup => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => {
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead> */}
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <React.Fragment key={row.index}>
              {!min630 && (
                <TrOver>
                  <td colSpan={flatColumns.length}>{renderRowOver({ row })}</td>
                </TrOver>
              )}
              <Tr borders={min630} {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </Tr>
              {!min630 && (
                <TrUnder>
                  <td colSpan={flatColumns.length}>
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

const Result = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    getData(resultUrl, (data, tabletop) => {
      const newData = data['Matches4publish'].elements.slice(0).filter(item => {
        return item['Game ID'] !== '' && item['Skóre'] !== ':'
      })
      setData(newData)
      setFilteredData(newData)
    })
  }, [])

  // const min320 = useMedia({ minWidth: '320px' })
  // const min480 = useMedia({ minWidth: '480px' })
  const min630 = useMedia({ minWidth: '630px' })
  // const min736 = useMedia({ minWidth: '736px' })
  const min980 = useMedia({ minWidth: '980px' })
  // const min1280 = useMedia({ minWidth: '1280px' })
  // const min1690 = useMedia({ minWidth: '1690px' })

  const columns = useMemo(
    () => [
      {
        // Header: 'Datum a Místo',
        accessor: 'Datum a Místo',
        show: min630,
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
        // Header: 'Tým (domácí)',
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
        // Header: 'Skóre',
        accessor: 'Skóre',
        Cell: data => {
          return (
            <ScoreWrapper>
              <ScoreLink
                href={data.cell.row.original['Reportáž']}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Score>{data.cell.value}</Score>
              </ScoreLink>
            </ScoreWrapper>
          )
        },
      },
      {
        // Header: 'Tým (hosté)',
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
        // Header: 'Časoměřič',
        accessor: 'Časoměřič',
        show: min980,
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
      // {
      //   Header: 'Rozhodčí',
      //   accessor: 'Rozhodčí',
      //   show: min980,
      // },
      {
        // Header: 'Foto',
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
    [min630, min980]
  )

  const renderRowOver = useCallback(
    ({ row }) => <InfoMobile>{row.values['Datum a Místo']}</InfoMobile>,
    []
  )

  const renderRowUnder = useCallback(
    ({ row }) => (
      <InfoMobile>
        {row.original['Detaily zápasu'].split(',').join(', ')}
      </InfoMobile>
    ),
    []
  )

  return (
    <>
      <Filters data={data} setFilteredData={setFilteredData} />
      <AllFilters>
        <TableStyles>
          <Table
            columns={columns}
            data={filteredData}
            renderRowUnder={renderRowUnder}
            renderRowOver={renderRowOver}
          />
        </TableStyles>
      </AllFilters>
    </>
  )
}

export { Result }
