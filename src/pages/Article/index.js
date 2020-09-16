import React, { useMemo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { useForm, Controller } from 'react-hook-form'
import 'react-imported-component/macro'
import { Container, Grid, Paper, TextField, Button } from '@material-ui/core'

import { Title } from '../../components/Title'
import { DataTable } from '../../components/DataTable'
import { useStyles } from './styled'
import { GET_ARTICLE } from '../../graphql/requests'
import Load from '../../utils/load'

const Layout = Load(() => import('../../components/Layout'))

const Article = props => {
  const classes = useStyles()
  const { gameId } = useParams()
  //error,
  const { loading, data } = useQuery(GET_ARTICLE, {
    variables: { gameId },
  })
  //errors,
  const { handleSubmit, control } = useForm()

  const gameReportColumns = useMemo(() => {
    return [
      {
        name: 'minute',
        label: 'Minute',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="minute"
                label="Minute"
                name="minute"
                // error={Boolean(errors.email)}
                // helperText={errors.email && errors.email.message}
              />
            )
          },
        },
      },
      {
        name: 'teamLogo',
        label: 'Team Logo',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="teamLogo"
                label="Team Logo"
                name="teamLogo"
                // error={Boolean(errors.email)}
                // helperText={errors.email && errors.email.message}
              />
            )
          },
        },
      },
      {
        name: 'teamShortcut',
        label: 'Team Shortcut',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="teamShortcut"
                label="Shortcut"
                name="teamShortcut"
                // error={Boolean(errors.email)}
                // helperText={errors.email && errors.email.message}
              />
            )
          },
        },
      },
      {
        name: 'situation',
        label: 'Situation',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="situation"
                label="Situation"
                name="situation"
                // error={Boolean(errors.email)}
                // helperText={errors.email && errors.email.message}
              />
            )
          },
        },
      },
      {
        name: 'playerSurnameOne',
        label: 'Surname 1',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerSurnameOne"
                label="Surname 1"
                name="playerSurnameOne"
                // error={Boolean(errors.email)}
                // helperText={errors.email && errors.email.message}
              />
            )
          },
        },
      },
      {
        name: 'playerSurnameTwo',
        label: 'Surname 2',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerSurnameTwo"
                label="Surname 2"
                name="playerSurnameTwo"
                // error={Boolean(errors.email)}
                // helperText={errors.email && errors.email.message}
              />
            )
          },
        },
      },
      {
        name: 'playerSurnameThree',
        label: 'Surname 3',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerSurnameThree"
                label="Surname 3"
                name="playerSurnameThree"
                // error={Boolean(errors.email)}
                // helperText={errors.email && errors.email.message}
              />
            )
          },
        },
      },
      {
        name: 'details',
        label: 'Details',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="details"
                label="Details"
                name="details"
                // error={Boolean(errors.email)}
                // helperText={errors.email && errors.email.message}
              />
            )
          },
        },
      },
    ]
  }, [control])

  const gameReportOptions = useMemo(
    () => ({
      filterType: 'multiselect',
      print: false,
      searchOpen: false,
      download: false,
      responsive: 'vertical',
      rowsPerPage: 50,
      rowsPerPageOptions: [10, 25, 50, 100],
    }),
    []
  )

  const playersTeamOneColumns = useMemo(() => {
    return [
      {
        name: 'playerId',
        label: 'Id',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerId"
                label="Id"
                name="playerId"
              />
            )
          },
        },
      },
      {
        name: 'playerNumber',
        label: 'Number',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerNumber"
                label="Number"
                name="playerNumber"
              />
            )
          },
        },
      },
      {
        name: 'playerName',
        label: 'Name',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerName"
                label="Name"
                name="playerName"
              />
            )
          },
        },
      },
      {
        name: 'playerGoals',
        label: 'Goals',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerGoals"
                label="Goals"
                name="playerGoals"
              />
            )
          },
        },
      },
      {
        name: 'playerAssists',
        label: 'Assists',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerAssists"
                label="Assists"
                name="playerAssists"
              />
            )
          },
        },
      },
      {
        name: 'playerPoints',
        label: 'Points',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerPoints"
                label="Points"
                name="playerPoints"
              />
            )
          },
        },
      },
      {
        name: 'playerPim',
        label: 'Pim',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerPim"
                label="Pim"
                name="playerPim"
              />
            )
          },
        },
      },
      {
        name: 'playerAvatar',
        label: 'Avatar',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerAvatar"
                label="Avatar"
                name="playerAvatar"
              />
            )
          },
        },
      },
      {
        name: 'playerDetail1',
        label: 'Detail 1',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerDetail1"
                label="Detail 1"
                name="playerDetail1"
              />
            )
          },
        },
      },
      {
        name: 'playerDetail2',
        label: 'Detail 2',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerDetail2"
                label="Detail 2"
                name="playerDetail2"
              />
            )
          },
        },
      },
      {
        name: 'playerPlaceHolder1',
        label: 'PH 1',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerPlaceHolder1"
                label="PH 1"
                name="playerPlaceHolder1"
              />
            )
          },
        },
      },
      {
        name: 'playerPlaceHolder2',
        label: 'PH 2',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerPlaceHolder2"
                label="PH 2"
                name="playerPlaceHolder2"
              />
            )
          },
        },
      },
      {
        name: 'playerPlaceHolder3',
        label: 'PH 3',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Controller
                as={TextField}
                control={control}
                defaultValue={value}
                required
                id="playerPlaceHolder3"
                label="PH 3"
                name="playerPlaceHolder3"
              />
            )
          },
        },
      },
    ]
  }, [control])

  const playersTeamOneOptions = useMemo(
    () => ({
      filterType: 'multiselect',
      print: false,
      searchOpen: false,
      download: false,
      responsive: 'vertical',
      rowsPerPage: 50,
      rowsPerPageOptions: [10, 25, 50, 100],
    }),
    []
  )

  const onSubmit = useCallback(dataToSubmit => {
    // console.log('dataToSubmit', dataToSubmit)
    // try {
    //   setSubmitting(true)
    //   const {  } = dataToSubmit
    // } catch (error) {
    //   console.error(error)
    // } finally {
    //   setSubmitting(false)
    // }
  }, [])

  return (
    <Layout>
      {!loading && (
        <Container maxWidth="lg" className={classes.container}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                  <Title>Google Data Sheet</Title>
                  {data.article.googleSheetUrl && (
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      href={data.article.googleSheetUrl}
                      target="_blank"
                      onClick={e => {
                        e.stopPropagation()
                      }}
                    >
                      Google Data Sheet
                    </Button>
                  )}
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                  <Title>Header</Title>
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameId}
                    required
                    id="gameid"
                    label="Game Id"
                    name="gameId"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.leagueName}
                    required
                    id="leagueName"
                    label="League Name"
                    name="leagueName"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.leagueLogo}
                    required
                    id="leagueLogo"
                    label="League Logo"
                    name="leagueLogo"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.date}
                    required
                    id="date"
                    label="Date"
                    name="date"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.time}
                    required
                    id="time"
                    label="Time"
                    name="time"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.place}
                    required
                    id="place"
                    label="Place"
                    name="place"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.phase}
                    required
                    id="phase"
                    label="Phase"
                    name="phase"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.group}
                    required
                    id="group"
                    label="Group"
                    name="group"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.referee}
                    required
                    id="referee"
                    label="Referee"
                    name="referee"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.delegate}
                    required
                    id="delegate"
                    label="Delegate"
                    name="delegate"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.periodsResult}
                    required
                    id="periodsResult"
                    label="Periods Result"
                    name="periodsResult"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.title}
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.subTitle}
                    required
                    fullWidth
                    id="subtitle"
                    label="Sub Title"
                    name="subTitle"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.perex}
                    required
                    multiline
                    fullWidth
                    id="perex"
                    label="Perex"
                    name="perex"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                  <Title>Team One</Title>
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamOneNameFull}
                    required
                    id="teamOneNameFull"
                    label="T1 Name Full"
                    name="teamOneNameFull"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamOneLogo}
                    required
                    id="teamOneLogo"
                    label="T1 Logo"
                    name="teamOneLogo"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamOneGoals}
                    required
                    id="teamOneGoals"
                    label="T1 Goals"
                    name="teamOneGoals"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamOneShots}
                    required
                    id="teamOneShots"
                    label="T1 Shots"
                    name="teamOneShots"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamOneMinutes}
                    required
                    id="teamOneMinutes"
                    label="T1 Minutes"
                    name="teamOneMinutes"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamOneFaceoffs}
                    required
                    id="teamOneFaceoffs"
                    label="T1 Faceoffs"
                    name="teamOneFaceoffs"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneStarId}
                    required
                    id="teamOneStarId"
                    label="T1 Star Id"
                    name="teamOneStarId"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneStarName}
                    required
                    id="teamOneStarName"
                    label="T1 Star Name"
                    name="teamOneStarName"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneStarAvatar}
                    required
                    id="teamOneStarAvatar"
                    label="T1 Star Avatar"
                    name="teamOneStarAvatar"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneStarGoals}
                    required
                    id="teamOneStarGoals"
                    label="T1 Star Goals"
                    name="teamOneStarGoals"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneStarAssists}
                    required
                    id="teamOneStarAssists"
                    label="T1 Star Assists"
                    name="teamOneStarAssists"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneStarPoints}
                    required
                    id="teamOneStarPoints"
                    label="T1 Star Points"
                    name="teamOneStarPoints"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneGoalieId}
                    required
                    id="teamOneGoalieId"
                    label="T1 Goalie Id"
                    name="teamOneGoalieId"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneGoalieAvatar}
                    required
                    id="teamOneGoalieAvatar"
                    label="T1 Goalie Avatar"
                    name="teamOneGoalieAvatar"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneGoalieName}
                    required
                    id="teamOneGoalieName"
                    label="T1 Goalie Name"
                    name="teamOneGoalieName"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />

                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneGoalieWins}
                    required
                    id="teamOneGoalieWins"
                    label="T1 Goalie Wins"
                    name="teamOneGoalieWins"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneGoalieSaves}
                    required
                    id="teamOneGoalieSaves"
                    label="T1 Goalie Saves"
                    name="teamOneGoalieSaves"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamOneGoaliePerc}
                    required
                    id="teamOneGoaliePerc"
                    label="T1 Goalie Perc"
                    name="teamOneGoaliePerc"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                  <Title>Team Two</Title>
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamTwoNameFull}
                    required
                    id="teamTwoNameFull"
                    label="T2 Name Full"
                    name="teamTwoNameFull"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamTwoLogo}
                    required
                    id="teamTwoLogo"
                    label="T2 Logo"
                    name="teamTwoLogo"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamTwoGoals}
                    required
                    id="teamTwoGoals"
                    label="T2 Goals"
                    name="teamTwoGoals"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamTwoShots}
                    required
                    id="teamTwoShots"
                    label="T2 Shots"
                    name="teamTwoShots"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamTwoMinutes}
                    required
                    id="teamTwoMinutes"
                    label="T2 Minutes"
                    name="teamTwoMinutes"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.teamTwoFaceoffs}
                    required
                    id="teamTwoFaceoffs"
                    label="T2 Faceoffs"
                    name="teamTwoFaceoffs"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoStarId}
                    required
                    id="teamTwoStarId"
                    label="T2 Star Id"
                    name="teamTwoStarId"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoStarName}
                    required
                    id="teamTwoStarName"
                    label="T2 Star Name"
                    name="teamTwoStarName"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoStarAvatar}
                    required
                    id="teamTwoStarAvatar"
                    label="T2 Star Avatar"
                    name="teamTwoStarAvatar"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoStarGoals}
                    required
                    id="teamTwoStarGoals"
                    label="T2 Star Goals"
                    name="teamTwoStarGoals"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoStarAssists}
                    required
                    id="teamTwoStarAssists"
                    label="T2 Star Assists"
                    name="teamTwoStarAssists"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoStarPoints}
                    required
                    id="teamTwoStarPoints"
                    label="T2 Star Points"
                    name="teamTwoStarPoints"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoGoalieId}
                    required
                    id="teamTwoGoalieId"
                    label="T2 Goalie Id"
                    name="teamTwoGoalieId"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoGoalieAvatar}
                    required
                    id="teamTwoGoalieAvatar"
                    label="T2 Goalie Avatar"
                    name="teamTwoGoalieAvatar"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoGoalieName}
                    required
                    id="teamTwoGoalieName"
                    label="T2 Goalie Name"
                    name="teamTwoGoalieName"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />

                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoGoalieWins}
                    required
                    id="teamTwoGoalieWins"
                    label="T2 Goalie Wins"
                    name="teamTwoGoalieWins"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoGoalieSaves}
                    required
                    id="teamTwoGoalieSaves"
                    label="T2 Goalie Saves"
                    name="teamTwoGoalieSaves"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.gameData.teamTwoGoaliePerc}
                    required
                    id="teamTwoGoaliePerc"
                    label="T2 Goalie Perc"
                    name="teamTwoGoaliePerc"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                  <Title>Notes</Title>
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.firstPeriodNotes}
                    required
                    multiline
                    fullWidth
                    id="firstPeriodNotes"
                    label="First Period Notes"
                    name="firstPeriodNotes"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.secondPeriodNotes}
                    required
                    multiline
                    fullWidth
                    id="secondPeriodNotes"
                    label="Second Period Notes"
                    name="secondPeriodNotes"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.thirdPeriodNotes}
                    required
                    multiline
                    fullWidth
                    id="thirdPeriodNotes"
                    label="Third Period Notes"
                    name="thirdPeriodNotes"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.article.closingNotes}
                    required
                    multiline
                    fullWidth
                    id="closingNotes"
                    label="Closing Notes"
                    name="closingNotes"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <DataTable
                  title="GameReport"
                  columns={gameReportColumns}
                  data={data.article.gameReport || []}
                  options={gameReportOptions}
                />
              </Grid>
              <Grid item>
                <DataTable
                  title="Players Team 1"
                  columns={playersTeamOneColumns}
                  data={data.article.playersTeamOne || []}
                  options={playersTeamOneOptions}
                />
              </Grid>
              <Grid item>
                <DataTable
                  title="Players Team 1"
                  columns={playersTeamOneColumns}
                  data={data.article.playersTeamTwo || []}
                  options={playersTeamOneOptions}
                />
              </Grid>
            </Grid>
          </form>
        </Container>
      )}
    </Layout>
  )
}

Article.propTypes = {}

export { Article as default }
