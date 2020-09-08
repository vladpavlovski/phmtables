import React from 'react'

const initialContextState = { newArticleCreated: false }
const DashboardContext = React.createContext(initialContextState)
export { initialContextState, DashboardContext as default }
