import React from 'react'
import 'react-imported-component/macro'
import { Container, Grid } from '@material-ui/core'

import Load from '../../utils/load'
import { useStyles } from './styled'
import { linkMapData } from './linkMapData'

const LinkCard = Load(() => import('./LinkCard'))
const Layout = Load(() => import('../../components/Layout'))

const LinkMap = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={4}>
          {linkMapData.map(data => (
            <LinkCard key={data.link} data={data} />
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export { LinkMap as default }
