import React, { useCallback } from 'react'
import dayjs from 'dayjs'

import {
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from '@material-ui/core'

import EventIcon from '@material-ui/icons/Event'
import ScheduleIcon from '@material-ui/icons/Schedule'
import PlaceIcon from '@material-ui/icons/Place'
import GroupIcon from '@material-ui/icons/Group'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'

import { useStyles } from '../styled'

export const ResultPreview = props => {
  const {
    teamOneWtl,
    teamTwoWtl,
    teamOneNameFull,
    teamOneGoals,
    teamOneLogo,
    teamTwoNameFull,
    teamTwoGoals,
    teamTwoLogo,
    date,
    time,
    place,
    phase,
    group,
  } = props.data
  const classes = useStyles()

  const getBorderColorClassName = useCallback(
    value => {
      switch (value) {
        case 'P':
          return classes.borderRed
        case 'V':
          return classes.borderGreen
        case 'R':
          return classes.borderOrange
        default:
          return ''
      }
    },
    [classes.borderGreen, classes.borderOrange, classes.borderRed]
  )

  return (
    <Paper className={classes.resultPreview}>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item lg={6}>
          <Card className={classes.resultCard}>
            <div
              className={`${
                classes.resultCardDetails
              } ${getBorderColorClassName(teamOneWtl)}`}
            >
              <CardContent>
                <Typography
                  className={classes.resultTeamName}
                  component="h2"
                  variant="h5"
                >
                  {teamOneNameFull}
                </Typography>
              </CardContent>
            </div>

            <CardContent className={classes.resultTeamGoalsWrap}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                className={classes.resultTeamGoals}
              >
                {teamOneGoals}
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.resultCardMedia}
              image={teamOneLogo}
              title={teamOneNameFull}
            />
          </Card>
        </Grid>
        <Grid item lg={6}>
          <Card className={classes.resultCard}>
            <div
              className={`${
                classes.resultCardDetails
              } ${getBorderColorClassName(teamTwoWtl)}`}
            >
              <CardContent>
                <Typography
                  className={classes.resultTeamName}
                  component="h2"
                  variant="h5"
                >
                  {teamTwoNameFull}
                </Typography>
              </CardContent>
            </div>

            <CardContent className={classes.resultTeamGoalsWrap}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                className={classes.resultTeamGoals}
              >
                {teamTwoGoals}
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.resultCardMedia}
              image={teamTwoLogo}
              title={teamTwoNameFull}
            />
          </Card>
        </Grid>

        <Grid item lg={6}>
          <Paper component="ul" className={classes.resultChipList}>
            <li>
              <Chip
                color="primary"
                icon={<EventIcon />}
                label={dayjs(date).format('L')}
                className={classes.resultChip}
              />
            </li>
            <li>
              <Chip
                color="primary"
                icon={<ScheduleIcon />}
                label={time}
                className={classes.resultChip}
              />
            </li>
            <li>
              <Chip
                color="primary"
                icon={<PlaceIcon />}
                label={place}
                className={classes.resultChip}
              />
            </li>
            <li>
              <Chip
                color="primary"
                icon={<CalendarViewDayIcon />}
                label={phase}
                className={classes.resultChip}
              />
            </li>
            <li>
              <Chip
                color="primary"
                icon={<GroupIcon />}
                label={group}
                className={classes.resultChip}
              />
            </li>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  )
}
