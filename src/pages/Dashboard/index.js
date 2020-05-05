import React, { useState, useMemo } from 'react'
import clsx from 'clsx'

import {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  // Badge,
  Container,
  Grid,
  Paper,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
// import NotificationsIcon from '@material-ui/icons/Notifications'
import { mainListItems } from './listItems'
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import { DataTable } from '../../components/DataTable'

import { Copyright } from '../../components/Copyright'

import { useStyles } from './styled'
// import { schema } from './schema'

const columns = ['Name', 'Company', 'City', 'State']

const data = [
  ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
  ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
  ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
  ['James Houston', 'Test Corp', 'Dallas', 'TX'],
]

const options = {
  filterType: 'checkbox',
  print: false,
  searchOpen: true,
  download: false,
}

const Dashboard = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  const fixedHeightPaper = useMemo(
    () => clsx(classes.paper, classes.fixedHeight),
    [classes.fixedHeight, classes.paper]
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              setOpen(true)
            }}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Typography variant="h4" component="h1">
            PHM CUP
          </Typography>
          <IconButton
            onClick={() => {
              setOpen(false)
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        {/* <Divider />
        <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
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
              <DataTable columns={columns} data={data} options={options} />
              {/* </Paper> */}
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  )
}

export { Dashboard }
