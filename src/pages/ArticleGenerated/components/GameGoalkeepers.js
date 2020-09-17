import React from 'react'

import { Grid, Typography, Paper } from '@material-ui/core'
import { useStyles } from '../styled'

const GoalieCard = props => {
  const {
    goalieName,
    goalieAvatar,
    goalieWins,
    goalieSaves,
    goaliePerc,
    goalieGoals,
  } = props.data
  const classes = useStyles()

  return (
    <Grid item lg={4}>
      <Paper className={classes.gameStarWrapper}>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item lg={12}>
            <Typography
              className={classes.gameStarTitle}
              component="span"
              variant="h6"
            >
              GOLMAN
            </Typography>
          </Grid>
          <Grid item lg={12}>
            {goalieAvatar ? (
              <img
                className={classes.gameStarAvatar}
                src={goalieAvatar}
                alt={goalieName}
              />
            ) : (
              <div className={classes.gameStarAvatar} />
            )}
          </Grid>
          <Grid item lg={12}>
            <Typography
              className={classes.goaliePlayerStat}
              component="span"
              variant="h6"
            >
              {`Zákroků: ${goalieSaves}`}
              <br />
              {`Ob.gólů: ${goalieGoals}`}
              <br />
              {`% úspěš.: ${Math.round(goaliePerc * 100) / 100}%`}
              <br />
              {`Vítězství: ${goalieWins}`}
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography
              className={classes.gameStarStatistics}
              component="h4"
              variant="h4"
            >
              {goalieName}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export const GameGoalkeepers = props => {
  const {
    teamOneGoals,
    teamTwoGoals,
    gameData: {
      teamOneGoalieAvatar,
      teamOneGoalieName,
      teamOneGoalieWins,
      teamOneGoalieSaves,
      teamOneGoaliePerc,
      teamTwoGoalieAvatar,
      teamTwoGoalieName,
      teamTwoGoalieWins,
      teamTwoGoalieSaves,
      teamTwoGoaliePerc,
    },
  } = props.data

  const classes = useStyles()

  return (
    <>
      <Typography className={classes.reportTitle} component="h3" variant="h4">
        BRANKAŘI ZÁPASU
      </Typography>

      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {[
          {
            goalieGoals: teamOneGoals,
            goalieName: teamOneGoalieName,
            goalieAvatar: teamOneGoalieAvatar,
            goalieWins: teamOneGoalieWins,
            goalieSaves: teamOneGoalieSaves,
            goaliePerc: teamOneGoaliePerc,
          },
          {
            goalieGoals: teamTwoGoals,
            goalieName: teamTwoGoalieName,
            goalieAvatar: teamTwoGoalieAvatar,
            goalieWins: teamTwoGoalieWins,
            goalieSaves: teamTwoGoalieSaves,
            goaliePerc: teamTwoGoaliePerc,
          },
        ].map(data => (
          <GoalieCard key={data.goalieName} data={data} />
        ))}
      </Grid>
    </>
  )
}
