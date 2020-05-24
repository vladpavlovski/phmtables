import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { muiTheme } from './styles/theme'
import { ErrorBoundary } from './components/ErrorBoundary'

import * as ROUTES from './routes'

import { Result } from './pages/tables/Result'
import { Standings20 } from './pages/tables/Standings20'
import { Standings20Top } from './pages/tables/Standings20Top'
import { Standings20Klasik } from './pages/tables/Standings20Klasik'
import { AllPlayers } from './pages/tables/AllPlayers'
import { Best10TopPoints } from './pages/tables/Best10TopPoints'
import { Best10KlasikPoints } from './pages/tables/Best10KlasikPoints'
import { ResultsAlltime } from './pages/tables/ResultsAlltime'
import { AllPlayers19 } from './pages/tables/AllPlayers19'
import { AllPlayersYears } from './pages/tables/AllPlayersYears'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { SignOut } from './pages/SignOut'
import { Dashboard } from './pages/Dashboard'
import { Article } from './pages/Article'

import { ThemeProvider } from '@material-ui/core/styles'
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql'

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={muiTheme}>
      <GlobalStyle />
      <ErrorBoundary>
        <Switch>
          <Route
            path={ROUTES.HOMEPAGE}
            exact
            render={() => <Redirect to={ROUTES.RESULT} />}
          />
          <Route path={ROUTES.RESULT} exact component={Result} />
          <Route path={ROUTES.STANDINGS20} exact component={Standings20} />
          <Route
            path={ROUTES.STANDINGS20TOP}
            exact
            component={Standings20Top}
          />
          <Route
            path={ROUTES.STANDINGS20KLASIK}
            exact
            component={Standings20Klasik}
          />
          <Route path={ROUTES.ALLPLAYERS} exact component={AllPlayers} />
          <Route
            path={ROUTES.BEST10TOPPOINTS}
            exact
            component={Best10TopPoints}
          />
          <Route
            path={ROUTES.BEST10KLASIKPOINTS}
            exact
            component={Best10KlasikPoints}
          />
          <Route
            path={ROUTES.RESULSTALLTIME}
            exact
            component={ResultsAlltime}
          />
          <Route path={ROUTES.ALLPLAYERS19} exact component={AllPlayers19} />
          <Route
            path={ROUTES.ALLPLAYERSYEARS}
            exact
            component={AllPlayersYears}
          />
          <Route path={ROUTES.SIGN_UP} exact component={SignUp} />
          <Route path={ROUTES.SIGN_IN} exact component={SignIn} />
          <Route path={ROUTES.SIGN_OUT} exact component={SignOut} />
          <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />
          <Route path={ROUTES.ARTICLE} exact component={Article} />
        </Switch>
      </ErrorBoundary>
    </ThemeProvider>
  </ApolloProvider>
)

export { App }
