import React, { useMemo, forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import * as ROUTES from '../../routes'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
} from '@material-ui/core'
import { Dashboard, FormatListNumbered } from '@material-ui/icons'

const ListItemLink = props => {
  const { icon, primary, to } = props

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  )
}

const MainListItems = () => (
  <>
    <List>
      <ListItemLink
        icon={<Dashboard />}
        primary="Dashboard"
        to={ROUTES.DASHBOARD}
      />
    </List>
    <Divider />
    <List>
      <ListSubheader inset>PHM Tables</ListSubheader>
      <ListItemLink
        icon={<FormatListNumbered />}
        primary="Result"
        to={ROUTES.RESULT}
      />
      <ListItemLink
        icon={<FormatListNumbered />}
        primary="Results All Time"
        to={ROUTES.RESULSTALLTIME}
      />
      <ListItemLink
        icon={<FormatListNumbered />}
        primary="Standings 20"
        to={ROUTES.STANDINGS20}
      />
      <ListItemLink
        icon={<FormatListNumbered />}
        primary="Standings 20 Top"
        to={ROUTES.STANDINGS20TOP}
      />
      <ListItemLink
        icon={<FormatListNumbered />}
        primary="Standings 20 Klasik"
        to={ROUTES.STANDINGS20KLASIK}
      />
      <ListItemLink
        icon={<FormatListNumbered />}
        primary="All Players"
        to={ROUTES.ALLPLAYERS}
      />
    </List>
  </>
)

export { MainListItems }
