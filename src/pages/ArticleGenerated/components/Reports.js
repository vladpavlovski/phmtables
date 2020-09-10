import React from 'react'

import { Grid, Typography, Paper, Divider } from '@material-ui/core'
import { useStyles } from '../styled'

const PlayerRow = props => {
  const {
    playerId,
    playerNumber,
    playerName,
    playerGoals,
    playerAssists,
    playerPoints,
    playerPim,
    playerAvatar,
    // playerDetail1,
    // playerDetail2,
    // playerPlaceHolder1,
    // playerPlaceHolder2,
    // playerPlaceHolder3,
  } = props.data
  const classes = useStyles()

  return (
    <Grid container spacing={0} justify="center" alignItems="center">
      <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
        <span
          className={`${classes.reportPlayerText} ${classes.reportCenterize}`}
        >
          {playerNumber}
        </span>
      </Grid>
      <Grid item xl={1} lg={1} md={1} sm={1} xs={2}>
        {playerPoints >= 4 && (
          <span className={classes.reportPlayerPoints}>
            {`${playerPoints}+ bodů`}
          </span>
        )}
      </Grid>
      <Grid item xl={2} lg={2} md={2} sm={2} xs={3}>
        <span className={classes.reportPlayerText}>{playerName}</span>
      </Grid>
      <Grid item lg={2}>
        {playerAvatar && (
          <div className={classes.reportCenterize}>
            <img
              src={playerAvatar}
              alt={playerId}
              className={`${classes.reportPlayerAvatar}`}
            />
          </div>
        )}
      </Grid>
      <Grid item lg={1}>
        <span className={classes.reportPlayerText}>{`${playerGoals} (G)`}</span>
      </Grid>
      <Grid item lg={1}>
        <span
          className={classes.reportPlayerText}
        >{`${playerAssists} (A)`}</span>
      </Grid>
      <Grid item lg={1}>
        <span
          className={classes.reportPlayerText}
        >{`${playerPoints} (B)`}</span>
      </Grid>
      <Grid item lg={1}>
        <span className={classes.reportPlayerText}>{`${playerPim} (MIN)`}</span>
      </Grid>
    </Grid>
  )
}

export const Reports = props => {
  const {
    playersTeamOne,
    playersTeamTwo,
    teamOneLogo,
    teamTwoLogo,
    teamOneNameFull,
    teamTwoNameFull,
  } = props.data

  const classes = useStyles()

  return (
    <>
      <Typography className={classes.reportTitle} component="h3" variant="h4">
        SESTAVY
      </Typography>
      <Paper
        className={classes.reportWrapper}
        style={{
          backgroundImage: `url(${teamOneLogo})`,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Grid item lg={12}>
            <Typography className={classes.gsTitle} component="h3" variant="h4">
              {`Soupiska: ${teamOneNameFull}`}
            </Typography>
          </Grid>
          {playersTeamOne &&
            playersTeamOne.map(data => <PlayerRow key={data.id} data={data} />)}
        </Grid>
      </Paper>
      <Divider />
      <Paper
        className={classes.reportWrapper}
        style={{
          backgroundImage: `url(${teamTwoLogo})`,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Grid item lg={12}>
            <Typography className={classes.gsTitle} component="h3" variant="h4">
              {`Soupiska: ${teamTwoNameFull}`}
            </Typography>
          </Grid>
          {playersTeamTwo &&
            playersTeamTwo.map(data => <PlayerRow key={data.id} data={data} />)}
        </Grid>
      </Paper>
    </>
  )
}
