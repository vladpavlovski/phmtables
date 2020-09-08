import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DashboardContext, { initialContextState } from './index'

const DashboardProvider = props => {
  const [newArticleCreated, setNewArticleCreated] = useState(
    initialContextState.newArticleCreated
  )

  return (
    <DashboardContext.Provider
      value={{
        newArticleCreated,
        setNewArticleCreated,
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
