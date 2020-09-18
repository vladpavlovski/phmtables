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
const Standings21 = Load(() => import('./pages/tables/Standings21'))
const Standings21Top = Load(() => import('./pages/tables/Standings21Top'))
const Standings21Klasik = Load(() => import('./pages/tables/Standings21Klasik'))
const Standings21Hobby = Load(() => import('./pages/tables/Standings21Hobby'))
const AllPlayers21 = Load(() => import('./pages/tables/AllPlayers21'))
const Best10TopPoints21 = Load(() => import('./pages/tables/Best10TopPoints21'))
const Best10KlasikPoints21 = Load(() =>
  import('./pages/tables/Best10KlasikPoints21')
)
const Best10HobbyPoints21 = Load(() =>
  import('./pages/tables/Best10HobbyPoints21')
)
const ResultTs5521 = Load(() => import('./pages/tables/ResultTs5521'))
const StandingsTs5521 = Load(() => import('./pages/tables/StandingsTs5521'))
const Goalies20Top = Load(() => import('./pages/tables/Goalies20Top'))
const Goalies20Klasik = Load(() => import('./pages/tables/Goalies20Klasik'))

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
          <Route path={ROUTES.STANDINGS21} exact component={Standings21} />
          <Route
            path={ROUTES.STANDINGS21TOP}
            exact
            component={Standings21Top}
          />
          <Route
            path={ROUTES.STANDINGS21KLASIK}
            exact
            component={Standings21Klasik}
          />
          <Route
            path={ROUTES.STANDINGS21HOBBY}
            exact
            component={Standings21Hobby}
          />
          <Route path={ROUTES.ALLPLAYERS21} exact component={AllPlayers21} />
          <Route
            path={ROUTES.BEST10TOPPOINTS21}
            exact
            component={Best10TopPoints21}
          />
          <Route
            path={ROUTES.BEST10KLASIKPOINTS21}
            exact
            component={Best10KlasikPoints21}
          />
          <Route
            path={ROUTES.BEST10HOBBYPOINTS21}
            exact
            component={Best10HobbyPoints21}
          />
          <Route path={ROUTES.RESULT_TS55_21} exact component={ResultTs5521} />
          <Route
            path={ROUTES.STANDINGS_TS55_21}
            exact
            component={StandingsTs5521}
          />
          <Route path={ROUTES.GOALIES_20_TOP} exact component={Goalies20Top} />
          <Route
            path={ROUTES.GOALIES_20_KLASIK}
            exact
            component={Goalies20Klasik}
          />
        </Switch>
      </ErrorBoundary>
    </ThemeProvider>
  </ApolloProvider>
)

export { App }
