import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'react-imported-component/macro'
import { ThemeProvider } from '@material-ui/core/styles'
import { ApolloProvider } from '@apollo/client'

import { GlobalStyle } from './styles/global'
import { muiTheme } from './styles/theme'
import { ErrorBoundary } from './components/ErrorBoundary'

import * as ROUTES from './routes'
import { client } from './graphql'
import Load from './utils/load'

const Result = Load(() => import('./pages/tables/Result'))
const Standings20 = Load(() => import('./pages/tables/Standings20'))
const Standings20Top = Load(() => import('./pages/tables/Standings20Top'))
const Standings20Klasik = Load(() => import('./pages/tables/Standings20Klasik'))
const AllPlayers = Load(() => import('./pages/tables/AllPlayers'))
const Best10TopPoints = Load(() => import('./pages/tables/Best10TopPoints'))
const Best10KlasikPoints = Load(() =>
  import('./pages/tables/Best10KlasikPoints')
)
const ResultsAlltime = Load(() => import('./pages/tables/ResultsAlltime'))
const AllPlayers19 = Load(() => import('./pages/tables/AllPlayers19'))
const AllPlayersYears = Load(() => import('./pages/tables/AllPlayersYears'))
const SignUp = Load(() => import('./pages/SignUp'))
const SignIn = Load(() => import('./pages/SignIn'))
const SignOut = Load(() => import('./pages/SignOut'))
const Dashboard = Load(() => import('./pages/Dashboard'))
const Article = Load(() => import('./pages/Article'))
const ArticleGenerated = Load(() => import('./pages/ArticleGenerated'))
const LinkMap = Load(() => import('./pages/LinkMap'))
const Result21 = Load(() => import('./pages/tables/Result21'))

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
            path={ROUTES.RESULTSALLTIME}
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
          <Route
            path={ROUTES.ARTICLE_GENERATED}
            exact
            component={ArticleGenerated}
          />
          <Route path={ROUTES.LINK_MAP} exact component={LinkMap} />
          <Route path={ROUTES.RESULT21} exact component={Result21} />
        </Switch>
      </ErrorBoundary>
    </ThemeProvider>
  </ApolloProvider>
)

export { App }
