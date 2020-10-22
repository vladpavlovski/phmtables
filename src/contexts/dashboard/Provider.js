import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DashboardContext, { initialContextState } from './index'

const DashboardProvider = props => {
  const [newArticleCreated, setNewArticleCreated] = useState(
    initialContextState.newArticleCreated
  )

  const [newTeamsImported, setNewTeamsImported] = useState(
    initialContextState.newTeamsImported
  )
  const [newPlayersImported, setNewPlayersImported] = useState(
    initialContextState.newPlayersImported
  )

  return (
    <DashboardContext.Provider
      value={{
        newArticleCreated,
        setNewArticleCreated,
        newTeamsImported,
        setNewTeamsImported,
        newPlayersImported,
        setNewPlayersImported,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  )
}

DashboardProvider.propTypes = {
  children: PropTypes.node,
}

export { DashboardProvider }
