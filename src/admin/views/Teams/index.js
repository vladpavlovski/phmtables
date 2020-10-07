import React, { useMemo } from 'react'
import clsx from 'clsx'
import 'react-imported-component/macro'
import { Container, Grid, Paper } from '@material-ui/core'

import Load from '../../../utils/load'
import { useStyles } from '../../pages/Dashboard/styled'

import { DashboardProvider } from '../../../contexts/dashboard/Provider'
import { Title } from '../../../components/Title'
const Layout = Load(() => import('../../../components/Layout'))
const TeamsTable = Load(() => import('./TeamsTable'))
const ImportTeams = Load(() => import('./ImportTeams'))
const Teams = () => {
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
                <ImportTeams />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Total teams</Title>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <TeamsTable />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </DashboardProvider>
  )
}

export { Teams as default }
