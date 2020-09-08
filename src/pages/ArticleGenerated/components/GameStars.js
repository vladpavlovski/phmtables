import React from 'react'

import { Grid, Typography, Paper } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import { useStyles } from '../styled'

const StarCard = props => {
  const {
    starName,
    starAvatar,
    starGoals,
    starAssists,
    starPoints,
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
            <div className={classes.gameStarSponsor1} />
          </Grid>
          <Grid item lg={12}>
            <Typography
              className={classes.gameStarTitle}
              component="span"
              variant="h6"
            >
              HVĚZDA UTKÁNÍ
            </Typography>
          </Grid>
          <Grid item lg={12}>
            {starAvatar ? (
              <img
                className={classes.gameStarAvatar}
                src={starAvatar}
                alt={starName}
              />
            ) : (
              <div className={classes.gameStarAvatar} />
            )}
          </Grid>
          <Grid item lg={12}>
            <Typography
              className={classes.gameStarStatistics}
              component="span"
              variant="h6"
            >
              {`G:${starGoals} A:${starAssists} B:${starPoints} TR:0`}
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <StarIcon className={classes.gameStarIcon} />
          </Grid>
          <Grid item lg={12}>
            <Typography
              className={classes.gameStarStatistics}
              component="h4"
              variant="h4"
            >
              {starName}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export const GameStars = props => {
  const {
    gameData: {
      teamOneStarName,
      teamOneStarAvatar,
      teamOneStarGoals,
      teamOneStarAssists,
      teamOneStarPoints,
      teamTwoStarName,
      teamTwoStarAvatar,
      teamTwoStarGoals,
      teamTwoStarAssists,
      teamTwoStarPoints,
    },
  } = props.data

  const classes = useStyles()

  return (
    <>
      <Typography className={classes.reportTitle} component="h3" variant="h4">
        HVĚZDY ZÁPASU
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
            starName: teamOneStarName,
            starAvatar: teamOneStarAvatar,
            starGoals: teamOneStarGoals,
            starAssists: teamOneStarAssists,
            starPoints: teamOneStarPoints,
          },
          {
            starName: teamTwoStarName,
            starAvatar: teamTwoStarAvatar,
            starGoals: teamTwoStarGoals,
            starAssists: teamTwoStarAssists,
            starPoints: teamTwoStarPoints,
          },
        ].map(data => (
          <StarCard key={data.starName} data={data} />
        ))}
      </Grid>
    </>
  )
}
