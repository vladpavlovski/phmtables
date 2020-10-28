import React from 'react'
import {
  Grid,
  Paper,
  TextField,
  Switch,
  MenuItem,
  Select,
  Chip,
  Avatar,
  FormControl,
  InputLabel,
} from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { Autocomplete } from '../../../components/RHFAutocomplete'
import { countries, countryToFlag } from '../../../utils/constants/countries'

export const TableMerge = props => {
  const {
    data,
    changeField,
    classes,
    setFieldData,
    teamsData,
    teamsLoading,
  } = props

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          {
            <>
              {data && !data.name ? (
                <>
                  <TextField
                    required
                    name="firstName"
                    inputProps={{
                      autoComplete: 'off',
                    }}
                    id="firstName"
                    label="First Name"
                    value={(data && data.firstName) || ''}
                    onChange={e => changeField(e, 'firstName')}
                  />
                  <TextField
                    required
                    name="lastName"
                    inputProps={{
                      autoComplete: 'off',
                    }}
                    id="lastName"
                    label="Last Name"
                    value={(data && data.lastName) || ''}
                    onChange={e => {
                      changeField(e, 'lastName')
                    }}
                  />
                </>
              ) : (
                <TextField
                  required
                  name="name"
                  inputProps={{
                    autoComplete: 'off',
                  }}
                  id="name"
                  label="Name"
                  value={(data && data.name) || ''}
                  onChange={e => changeField(e, 'name')}
                />
              )}
              <TextField
                required
                inputProps={{
                  autoComplete: 'off',
                }}
                name="playerId"
                id="playerId"
                label="Player Id"
                value={(data && data.playerId) || ''}
                onChange={e => {
                  changeField(e, 'playerId')
                }}
              />
              <TextField
                required
                inputProps={{
                  autoComplete: 'off',
                }}
                name="avatar"
                id="avatar"
                label="Avatar"
                value={(data && data.avatar) || ''}
                onChange={e => {
                  changeField(e, 'avatar')
                }}
              />
              <KeyboardDatePicker
                disableFuture
                autoOk
                variant="inline"
                fullWidth
                name="birthday"
                label="Birthday"
                id="birthday"
                inputProps={{
                  autoComplete: 'off',
                }}
                openTo="year"
                format="DD/MM/YYYY"
                views={['year', 'month', 'date']}
                value={(data && data.birthday) || null}
              />
              <KeyboardDatePicker
                disableFuture
                autoOk
                variant="inline"
                fullWidth
                name="startLeagueDate"
                label="Start League Date"
                id="startLeagueDate"
                value={(data && data.startLeagueDate) || null}
                openTo="year"
                format="DD/MM/YYYY"
                views={['year', 'month', 'date']}
              />
              <Switch
                name="isActive"
                label="Active"
                checked={(data && data.isActive) || false}
                color="primary"
                onChange={e => {
                  const value = e.target.value
                  const name = e.target.name
                  const { [name]: _, ...rest } = data
                  setFieldData({
                    ...rest,
                    [name]: value,
                  })
                }}
              />

              {data && teamsData ? (
                !teamsLoading && (
                  <Autocomplete
                    multiple
                    fullWidth
                    inputProps={{
                      autoComplete: 'off',
                    }}
                    id="team-select"
                    options={teamsData && teamsData.teams}
                    name="teams"
                    label="Teams"
                    optionPropertyToCompare="id"
                    optionPropertyToShow="name"
                    value={(data && data.teams) || []}
                    onChange={(e, value, reason) => {
                      const { teams: _, ...rest } = data
                      setFieldData({
                        ...rest,
                        teams: value,
                      })
                    }}
                    renderOption={option => (
                      <>
                        <img
                          style={{
                            width: '3rem',
                            height: '3rem',
                            marginRight: '1rem',
                          }}
                          src={option.logoRound}
                          alt={option['name']}
                        />
                        {option['name']}
                      </>
                    )}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          avatar={
                            <Avatar alt={option.name} src={option.logoRound} />
                          }
                          variant="outlined"
                          label={option.name}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                  />
                )
              ) : (
                <TextField
                  required
                  inputProps={{
                    autoComplete: 'off',
                  }}
                  name="team"
                  id="team"
                  label="Team"
                  value={(data && data.team) || ''}
                  onChange={e => {
                    changeField(e, 'team')
                  }}
                />
              )}
              <Autocomplete
                id="country-select"
                options={countries}
                inputProps={{
                  autoComplete: 'off',
                }}
                name="country"
                label="Country"
                fullWidth
                optionPropertyToCompare="label"
                optionPropertyToShow="label"
                value={(data && data.country) || null}
                onChange={(e, value, reason) => {
                  const { country: _, ...rest } = data
                  setFieldData({
                    ...rest,
                    country: value,
                  })
                }}
                renderOption={option => (
                  <>
                    <span>{countryToFlag(option.code)}</span>
                    {option.label} ({option.code})
                  </>
                )}
              />

              <TextField
                required
                inputProps={{
                  autoComplete: 'off',
                }}
                name="city"
                label="City"
                id="city"
                value={(data && data.city) || ''}
                onChange={e => {
                  changeField(e, 'city')
                }}
              />

              <TextField
                required
                inputProps={{
                  autoComplete: 'off',
                }}
                name="position"
                label="Position"
                id="position"
                value={(data && data.position) || ''}
                onChange={e => {
                  changeField(e, 'position')
                }}
              />
              <FormControl fullWidth name="stick">
                <InputLabel id="stick-label">{'Stick'}</InputLabel>
                <Select
                  name="stick"
                  labelId="stick-label"
                  value={(data && data.stick) || ''}
                  onChange={e => {
                    const value = e.target.value
                    const name = e.target.name
                    const { [name]: _, ...rest } = data
                    setFieldData({
                      ...rest,
                      [name]: value,
                    })
                  }}
                >
                  <MenuItem value="left">Left</MenuItem>
                  <MenuItem value="right">Right</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth name="gender">
                <InputLabel id="gender-label">{'Gender'}</InputLabel>
                <Select
                  name="gender"
                  labelId="gender-label"
                  value={(data && data.gender) || ''}
                  onChange={e => {
                    const value = e.target.value
                    const name = e.target.name
                    const { [name]: _, ...rest } = data
                    setFieldData({
                      ...rest,
                      [name]: value,
                    })
                  }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>

              <TextField
                required
                inputProps={{
                  autoComplete: 'off',
                }}
                name="height"
                label="Height"
                type="height"
                id="height"
                value={(data && data.height) || ''}
                onChange={e => {
                  changeField(e, 'height')
                }}
              />

              <TextField
                required
                inputProps={{
                  autoComplete: 'off',
                }}
                name="weight"
                label="Weight"
                type="weight"
                id="weight"
                value={(data && data.weight) || ''}
                onChange={e => {
                  changeField(e, 'weight')
                }}
              />

              <TextField
                required
                inputProps={{
                  autoComplete: 'off',
                }}
                name="jersey"
                label="Jersey Number"
                type="jersey"
                id="jersey"
                value={(data && data.jersey) || ''}
                onChange={e => {
                  changeField(e, 'jersey')
                }}
              />
            </>
          }
        </Paper>
      </Grid>
    </Grid>
  )
}
