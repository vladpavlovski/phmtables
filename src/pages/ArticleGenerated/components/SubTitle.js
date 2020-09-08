import React from 'react'
import { useStyles } from '../styled'
import { Typography, Paper } from '@material-ui/core'

export const SubTitle = props => {
  const { subTitle } = props.data
  const classes = useStyles()
  return (
    <Paper className={classes.subTitleWrapper}>
      <Typography variant="h2" className={classes.subTitle}>
        {subTitle}
      </Typography>
    </Paper>
  )
}
