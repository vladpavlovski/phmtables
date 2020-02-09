import React, { useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { useMedia } from 'use-media'
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside'

import { Wrapper, FilterButton } from './styled'

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
      if (key === 'teams') {
        return filters[key].find(
          filter =>
            getValue(filter) === getValue(item['Tým 1 název']) ||
            getValue(filter) === getValue(item['Tým 2 název'])
        )
      }

      return filters[key].find(
        filter => getValue(filter) === getValue(item[key])
      )
    })
  })
}

const Filters = ({ data, setFilteredData }) => {
  const [filtersData, setFiltersData] = useState([])
  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState(null)
  const [referees, setReferees] = useState([])
  const [selectedReferee, setSelectedReferee] = useState(null)
  const [groups, setGroups] = useState([])
  const [selectedGroup, setSelectedGroup] = useState(null)

  const [weeks, setWeeks] = useState([])
  const [selectedWeek, setSelectedWeek] = useState(null)
  const [months, setMonths] = useState([])
  const [selectedMonth, setSelectedMonth] = useState(null)
  const [days, setDays] = useState([])
  const [selectedDay, setSelectedDay] = useState(null)
  const [competitions, setCompetitions] = useState([])
  const [selectedCompetition, setSelectedCompetition] = useState(null)
  const [venues, setVenues] = useState([])
  const [selectedVenue, setSelectedVenue] = useState(null)
  const [timekeepers, setTimekeepers] = useState([])
  const [selectedTimekeeper, setSelectedTimekeeper] = useState(null)
  const [seasons, setSeasons] = useState([])
  const [selectedSeason, setSelectedSeason] = useState(null)

  const [showFilters, setShowFilters] = useState(true)
  const setAllFilters = useCallback(() => {
    const teams1 = data.map(i => i['Tým 1 název'])
    const teams2 = data.map(i => i['Tým 2 název'])
    const newTeams = [...new Set([...teams1, ...teams2])].map(i => ({
      value: i,
      label: i,
    }))

    const newReferees = [...new Set(data.map(i => i['Rozhodčí']))].map(i => ({
      value: i,
      label: i,
    }))
    const newGroups = [...new Set(data.map(i => i['Skupina']))].map(i => ({
      value: i,
      label: i,
    }))

    const newMonths = [...new Set(data.map(i => i['Měsíc']))].map(i => ({
      value: i,
      label: i,
    }))
    const newWeeks = [...new Set(data.map(i => i['Week']))].map(i => ({
      value: i,
      label: i,
    }))
    const newDays = [...new Set(data.map(i => i['Den']))].map(i => ({
      value: i,
      label: i,
    }))
    const newCompetitions = [...new Set(data.map(i => i['Soutěž']))].map(i => ({
      value: i,
      label: i,
    }))
    const newVenues = [...new Set(data.map(i => i['Arena']))].map(i => ({
      value: i,
      label: i,
    }))

    const newTimekeepers = [...new Set(data.map(i => i['Časoměřič']))].map(
      i => ({
        value: i,
        label: i,
      })
    )
    const newSeasons = [...new Set(data.map(i => i['Sezóna']))].map(i => ({
      value: i,
      label: i,
    }))

    setTeams(newTeams)
    setReferees(newReferees)
    setGroups(newGroups)
    setMonths(newMonths)
    setWeeks(newWeeks)
    setDays(newDays)
    setCompetitions(newCompetitions)
    setVenues(newVenues)
    setTimekeepers(newTimekeepers)
    setSeasons(newSeasons)

    setFiltersData(data)
  }, [data])

  const filteredCollected = useCallback(() => {
    const teamsFilter = (selectedTeam && selectedTeam.map(i => i.value)) || []
    const refereesFilter =
      (selectedReferee && selectedReferee.map(i => i.value)) || []
    const groupsFilter =
      (selectedGroup && selectedGroup.map(i => i.value)) || []
    const monthsFilter =
      (selectedMonth && selectedMonth.map(i => i.value)) || []
    const weeksFilter = (selectedWeek && selectedWeek.map(i => i.value)) || []
    const daysFilter = (selectedDay && selectedDay.map(i => i.value)) || []
    const competitionsFilter =
      (selectedCompetition && selectedCompetition.map(i => i.value)) || []
    const venuesFilter =
      (selectedVenue && selectedVenue.map(i => i.value)) || []
    const timkeepersFilter =
      (selectedTimekeeper && selectedTimekeeper.map(i => i.value)) || []
    const seasonsFilter =
      (selectedSeason && selectedSeason.map(i => i.value)) || []

    const filt = {
      teams: teamsFilter,
      Rozhodčí: refereesFilter,
      Skupina: groupsFilter,
      Měsíc: monthsFilter,
      Week: weeksFilter,
      Den: daysFilter,
      Soutěž: competitionsFilter,
      Arena: venuesFilter,
      Časoměřič: timkeepersFilter,
      Sezóna: seasonsFilter,
    }
    const result =
      filtersData.length > 0 ? filterPlainArray(filtersData, filt) : filtersData

    setFilteredData(result)
  }, [
    filtersData,
    selectedCompetition,
    selectedDay,
    selectedGroup,
    selectedMonth,
    selectedReferee,
    selectedSeason,
    selectedTeam,
    selectedTimekeeper,
    selectedVenue,
    selectedWeek,
    setFilteredData,
  ])

  useEffect(() => {
    filteredCollected()
  }, [filteredCollected])

  useEffect(() => {
    setAllFilters()
  }, [setAllFilters])

  const min1280 = useMedia({ minWidth: '1280px' })
  useEffect(() => {
    if (!min1280) {
      setShowFilters(false)
    } else {
      setShowFilters(true)
    }
  }, [min1280])

  const handleShowFilters = useCallback(() => {
    setShowFilters(!showFilters)
  }, [showFilters])

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => setShowFilters(false))

  return (
    <Wrapper ref={wrapperRef} showFilter={showFilters}>
      {!min1280 && (
        <FilterButton onClick={handleShowFilters}>Filtry</FilterButton>
      )}
      {showFilters && (
        <>
          {!min1280 && <br />}

          <Select
            value={selectedTeam}
            onChange={setSelectedTeam}
            options={teams}
            placeholder="Filtruj tým"
            isMulti
          />
          <br />
          <Select
            value={selectedReferee}
            onChange={setSelectedReferee}
            options={referees}
            placeholder="Rozhodčí"
            isMulti
          />
          <br />
          <Select
            value={selectedGroup}
            onChange={setSelectedGroup}
            options={groups}
            placeholder="Skupina"
            isMulti
          />
          <br />
          <Select
            value={selectedWeek}
            onChange={setSelectedWeek}
            options={weeks}
            placeholder="Week"
            isMulti
          />
          <br />
          <Select
            value={selectedMonth}
            onChange={setSelectedMonth}
            options={months}
            placeholder="Měsíc"
            isMulti
          />
          <br />
          <Select
            value={selectedDay}
            onChange={setSelectedDay}
            options={days}
            placeholder="Den"
            isMulti
          />
          <br />
          <Select
            value={selectedCompetition}
            onChange={setSelectedCompetition}
            options={competitions}
            placeholder="Soutěž"
            isMulti
          />
          <br />
          <Select
            value={selectedVenue}
            onChange={setSelectedVenue}
            options={venues}
            placeholder="Arena"
            isMulti
          />
          <br />
          <Select
            value={selectedTimekeeper}
            onChange={setSelectedTimekeeper}
            options={timekeepers}
            placeholder="Časoměřič"
            isMulti
          />
          <br />
          <Select
            value={selectedSeason}
            onChange={setSelectedSeason}
            options={seasons}
            placeholder="Sezóna"
            isMulti
          />
        </>
      )}
    </Wrapper>
  )
}

Filters.propTypes = {
  data: PropTypes.array.isRequired,
  setFilteredData: PropTypes.func.isRequired,
}

export { Filters }
