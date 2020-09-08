import React from 'react'

import { useStyles } from '../styled'
import { Typography } from '@material-ui/core'

export const PeriodComments = ({ comment }) => {
  const classes = useStyles()
  return (
    <div className={classes.perex}>
      <Typography variant="body1">{comment}</Typography>
    </div>
  )
}
