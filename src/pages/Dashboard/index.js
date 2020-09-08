import React, { useMemo } from 'react'
import clsx from 'clsx'
import 'react-imported-component/macro'
import { Container, Grid, Paper } from '@material-ui/core'

import Load from '../../utils/load'
import { useStyles } from './styled'

import { DashboardProvider } from '../../contexts/dashboard/Provider'

const Layout = Load(() => import('../../components/Layout'))
const Articles = Load(() => import('../../components/Articles'))
const CreatePanel = Load(() =>
  import('../../components/Articles/components/CreatePanel')
)

const Dashboard = () => {
  const classes = useStyles()

  const fixedHeightPaper = useMemo(
    () => clsx(classes.paper, classes.fixedHeight),
    [classes.fixedHeight, classes.paper]
  )

  return (
    <DashboardProvider>
      <Layout>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <CreatePanel />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>{/*deposits*/}</Paper>
            </Grid>
            <Grid item xs={12}>
              <Articles />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </DashboardProvider>
  )
}

export { Dashboard as default }
