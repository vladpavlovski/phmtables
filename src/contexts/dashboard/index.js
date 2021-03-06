import React from 'react'

const initialContextState = {
  newArticleCreated: false,
  newTeamsImported: false,
  newPlayersImported: false,
}
const DashboardContext = React.createContext(initialContextState)
export { initialContextState, DashboardContext as default }
