import React, { useMemo } from 'react'
import dayjs from 'dayjs'
import { Typography } from '@material-ui/core'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import { useStyles } from '../styled'
dayjs.extend(localizedFormat)

const Title = props => {
  const { title, date, leagueName } = props.data
  const classes = useStyles()
  const formattedDate = useMemo(() => dayjs(date).format('L'), [date])

  return (
    <div className={classes.paper}>
      <Typography variant="h3" component="h1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="subtitle1">
        {`${formattedDate} - Prague Hockey Masters - ${leagueName}`}
      </Typography>
    </div>
  )
}

export { Title }
