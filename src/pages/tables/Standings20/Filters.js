import React, { useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { useMedia } from 'use-media'
import { useOnClickOutside } from '../../../utils/hooks/useOnClickOutside'

import { phmStyles, Wrapper, FilterButton } from './styled'

const getValue = value =>
  typeof value === 'string' ? value.toUpperCase() : value
const filterPlainArray = (array = [], filters) => {
  const filterKeys = Object.keys(filters)
  return array.filter(item => {
    // validates all filter criteria
    return filterKeys.every(key => {
      // ignores an empty filter
      if (!filters[key].length) return true
      // custom for teams
      // if (key === 'teams') {
      //   return filters[key].find(
      //     filter =>
      //       getValue(filter) === getValue(item['Tým 1 název']) ||
      //       getValue(filter) === getValue(item['Tým 2 název'])
      //   )
      // }

      return filters[key].find(
        filter => getValue(filter) === getValue(item[key])
      )
    })
  })
}

const Filters = ({ data, setFilteredData }) => {
  const [filtersData, setFiltersData] = useState([])
  const [showFilters, setShowFilters] = useState(true)

  const [divisions, setDivisions] = useState([])
  const [selectedDivision, setSelectedDivision] = useState(null)

  const [teams, setTeams] = useState([])
  const [selectedTeams, setSelectedTeams] = useState(null)

  const setAllFilters = useCallback(() => {
    const newDivisions = [...new Set(data.map(i => i['divize']))].map(i => ({
      value: i,
      label: i,
    }))

    const newTeams = [...new Set(data.map(i => i['teamName']))].map(i => ({
      value: i,
      label: i,
    }))

    setDivisions(newDivisions)
    setTeams(newTeams)

    setFiltersData(data)
  }, [data])

  const filteredCollected = useCallback(() => {
    const divisionsFilter =
      (selectedDivision && selectedDivision.map(i => i.value)) || []

    const teamsFilter = (selectedTeams && selectedTeams.map(i => i.value)) || []
    const filt = {
      divize: divisionsFilter,
      teamName: teamsFilter,
    }
    const result =
      filtersData.length > 0 ? filterPlainArray(filtersData, filt) : filtersData

    setFilteredData(result)
  }, [filtersData, selectedDivision, selectedTeams, setFilteredData])

  useEffect(() => {
    filteredCollected()
  }, [filteredCollected])

  useEffect(() => {
    setAllFilters()
  }, [setAllFilters])

  const min960 = useMedia({ minWidth: '960px' })
  useEffect(() => {
    if (!min960) {
      setShowFilters(false)
    } else {
      setShowFilters(true)
    }
  }, [min960])

  const handleShowFilters = useCallback(() => {
    setShowFilters(!showFilters)
  }, [showFilters])

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => {
    if (!min960) setShowFilters(false)
  })

  return (
    <Wrapper ref={wrapperRef} showFilter={showFilters}>
      {!min960 && (
        <FilterButton onClick={handleShowFilters}>Filtry</FilterButton>
      )}
      {showFilters && (
        <>
          {!min960 && <br />}

          <Select
            styles={phmStyles}
            value={selectedDivision}
            onChange={setSelectedDivision}
            options={divisions}
            placeholder="Divize"
            isMulti
          />
          <br />
          <Select
            styles={phmStyles}
            value={selectedTeams}
            onChange={setSelectedTeams}
            options={teams}
            placeholder="Team"
            isMulti
          />
          <br />
        </>
      )}
    </Wrapper>
  )
}

Filters.propTypes = {
  data: PropTypes.array,
  setFilteredData: PropTypes.func,
}

export { Filters }
