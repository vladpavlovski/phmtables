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

  const [names, setNames] = useState([])
  const [selectedNames, setSelectedNames] = useState(null)

  const [teams, setTeams] = useState([])
  const [selectedTeams, setSelectedTeams] = useState(null)

  const setAllFilters = useCallback(() => {
    const newDivisions = [...new Set(data.map(i => i['Divize']))].map(i => ({
      value: i,
      label: i,
    }))

    const newTeams = [...new Set(data.map(i => i['Tým']))].map(i => ({
      value: i,
      label: i,
    }))

    const newNames = [...new Set(data.map(i => i['Jméno']))].map(i => ({
      value: i,
      label: i,
    }))

    setDivisions(newDivisions)
    setTeams(newTeams)
    setNames(newNames)

    setFiltersData(data)
  }, [data])

  const filteredCollected = useCallback(() => {
    const divisionsFilter =
      (selectedDivision && selectedDivision.map(i => i.value)) || []

    const teamsFilter = (selectedTeams && selectedTeams.map(i => i.value)) || []
    const namesFilter = (selectedNames && selectedNames.map(i => i.value)) || []
    const filt = {
      Divize: divisionsFilter,
      Tým: teamsFilter,
      Jméno: namesFilter,
    }
    const result =
      filtersData.length > 0 ? filterPlainArray(filtersData, filt) : filtersData

    setFilteredData(result)
  }, [
    filtersData,
    selectedDivision,
    selectedNames,
    selectedTeams,
    setFilteredData,
  ])

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
          <Select
            styles={phmStyles}
            value={selectedNames}
            onChange={setSelectedNames}
            options={names}
            placeholder="Jméno"
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
