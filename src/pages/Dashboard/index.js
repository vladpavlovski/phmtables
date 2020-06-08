import React, { useMemo } from 'react'
import clsx from 'clsx'

import { Container, Grid, Paper } from '@material-ui/core'
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

import { Layout } from '../../components/Layout'
import { Articles } from '../../components/Articles'

import { useStyles } from './styled'

const Dashboard = () => {
  const classes = useStyles()

  const fixedHeightPaper = useMemo(
    () => clsx(classes.paper, classes.fixedHeight),
    [classes.fixedHeight, classes.paper]
  )

  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              {/* <Chart /> */}
              chart
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              {/* <Deposits /> */}
              deposits
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            {/* <Paper className={classes.paper}> */}
            {/* <Orders /> */}
            <Articles />
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export { Dashboard as default }
