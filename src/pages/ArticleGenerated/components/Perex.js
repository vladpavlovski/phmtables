import React from 'react'

import { useStyles } from '../styled'
import { Typography } from '@material-ui/core'

export const Perex = props => {
  const { perex } = props.data
  const classes = useStyles()
  return (
    <div className={classes.perex}>
      <Typography variant="body1">{perex}</Typography>
    </div>
  )
}
