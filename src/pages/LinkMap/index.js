import React, { useState } from 'react'
import 'react-imported-component/macro'
import { Container, Grid, Paper, TextField } from '@material-ui/core'

import { Title } from '../../components/Title'
import Load from '../../utils/load'
import { useStyles } from './styled'
import { linkMapData } from './linkMapData'

const LinkCard = Load(() => import('./LinkCard'))
const Layout = Load(() => import('../../components/Layout'))

const LinkMap = () => {
  const classes = useStyles()
  const [search, setSearch] = useState('')

  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.paper}>
          <Title>Finder</Title>
          <TextField
            id="search-input"
            type="text"
            autoFocus
            fullWidth
            placeholder="Type anything you know about table :)"
            onChange={e => {
              setSearch(e.target.value)
            }}
            value={search}
          />
        </Paper>
        <Grid container spacing={4}>
          {linkMapData
            .filter(data =>
              data.title.toLowerCase().includes(search.toLowerCase())
            )
            .map(data => (
              <LinkCard key={data.link} data={data} />
            ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export { LinkMap as default }
