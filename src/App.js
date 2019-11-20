import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { ErrorBoundary } from './components/ErrorBoundary'

import * as ROUTES from './routes'

const App = () => (
  <>
    <GlobalStyle />
    <ErrorBoundary>
      <Switch>
        <Route
          path={ROUTES.HOMEPAGE}
          exact
          render={() => <Redirect to={ROUTES.RESULT} />}
        />
        {/* <Route path={ROUTES.RESULT} exact component={Photomaker} /> */}
      </Switch>
    </ErrorBoundary>
  </>
)

export { App }
