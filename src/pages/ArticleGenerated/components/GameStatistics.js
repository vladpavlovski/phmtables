import React from 'react'

import { Grid, Typography, Paper } from '@material-ui/core'
import { useStyles } from '../styled'

const MinuteEvent = props => {
  const {
    teamLogo,
    teamShortcut,
    situation,
    minute,
    playerSurnameOne,
    playerSurnameTwo,
    playerSurnameThree,
    details,
  } = props.data
  const classes = useStyles()

  return (
    <Grid container spacing={2} justify="flex-start" alignItems="center">
      <Grid item xl={1} lg={1} md={1} sm={1} xs={2}>
        {teamLogo && (
          <img
            src={teamLogo}
            alt={teamShortcut}
            className={classes.gsTeamLogo}
          />
        )}
      </Grid>
      <Grid item xl={1} lg={1} md={1} sm={1} xs={2}>
        <div
          className={classes.gsSituation}
          style={{
            backgroundColor:
              situation.toUpperCase() === 'TREST' ? '#ca1b1b' : '#0a7412',
          }}
        >
          {situation.toUpperCase()}
        </div>
      </Grid>
      <Grid item>
        <div className={classes.gsInfo}>
          {`${minute}'`}&nbsp;
          <b>{`${teamShortcut} - ${playerSurnameOne}`}</b>
          {playerSurnameTwo && ','}&nbsp;
          {`${playerSurnameTwo}`}
          {playerSurnameThree && ','}&nbsp;
          {`${playerSurnameThree}`}&nbsp;
          {details && `(${details})`}
        </div>
      </Grid>
    </Grid>
  )
}

export const GameStatistics = props => {
  const {
    teamOneShots,
    teamOneFaceoffs,
    teamOneMinutes,
    teamTwoShots,
    teamTwoFaceoffs,
    teamTwoMinutes,
    gameReport,
  } = props.data

  const classes = useStyles()

  return (
    <Paper className={classes.gsWrapper}>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Grid item lg={9}>
          <Typography className={classes.gsTitle} component="h2" variant="h4">
            STATISTIKY ZÁPASU
          </Typography>
        </Grid>
        <Grid item lg={9}>
          <Paper className={classes.gsResult}>
            <Typography className={classes.gsScore} variant="body1">
              {teamOneShots}
            </Typography>
            <Typography className={classes.gsScore} variant="body1">
              Střely
            </Typography>
            <Typography className={classes.gsScore} variant="body1">
              {teamTwoShots}
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={9}>
          <Paper className={classes.gsResult}>
            <Typography className={classes.gsScore} variant="body1">
              {teamOneFaceoffs}
            </Typography>
            <Typography className={classes.gsScore} variant="body1">
              Vhazování
            </Typography>
            <Typography className={classes.gsScore} variant="body1">
              {teamTwoFaceoffs}
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={9}>
          <Paper className={classes.gsResult}>
            <Typography className={classes.gsScore} variant="body1">
              {teamOneMinutes}
            </Typography>
            <Typography className={classes.gsScore} variant="body1">
              Tr. Minuty
            </Typography>
            <Typography className={classes.gsScore} variant="body1">
              {teamTwoMinutes}
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={9}>
          <Typography className={classes.gsTitle} component="h2" variant="h4">
            VÝVOJ ZÁPASU
          </Typography>
        </Grid>
        <div className={classes.gsMinutes}>
          {gameReport.map(data => (
            <MinuteEvent key={data.id} data={data} />
          ))}
        </div>
      </Grid>
    </Paper>
  )
}
