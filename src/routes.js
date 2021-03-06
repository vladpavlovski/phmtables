import { generatePath } from 'react-router'

// ADMIN:
export const SIGN_UP = '/signup'
export const SIGN_IN = '/signin'
export const SIGN_OUT = '/signout'
export const DASHBOARD = '/dashboard'
export const ARTICLE = '/article/:gameId'
export const LINK_MAP = '/linkMap'
export const TEAMS = '/teams'
export const TEAM = '/team/:teamId'
export const PLAYERS = '/players'
export const PLAYER = '/player/:playerId'
export const PLAYER_MERGE = '/playerMerge'

// WEB:
export const HOMEPAGE = '/'
export const RESULT = '/result'
export const RESULTSALLTIME = '/resultsAlltime'
export const STANDINGS20 = '/standings20'
export const STANDINGS20TOP = '/standings20top'
export const STANDINGS20KLASIK = '/standings20klasik'
export const ALLPLAYERS = '/allPlayers'
export const BEST10TOPPOINTS = '/best10TopPoints'
export const BEST10KLASIKPOINTS = '/best10KlasikPoints'
export const ALLPLAYERS19 = '/allPlayers19'
export const ALLPLAYERSYEARS = '/allPlayersYears'
export const RESULT21 = '/result21'
export const STANDINGS21 = '/standings21'
export const STANDINGS21TOP = '/standings21top'
export const STANDINGS21KLASIK = '/standings21klasik'
export const STANDINGS21HOBBY = '/standings21hobby'
export const ALLPLAYERS21 = '/allPlayers21'
export const BEST10TOPPOINTS21 = '/best10TopPoints21'
export const BEST10KLASIKPOINTS21 = '/best10KlasikPoints21'
export const BEST10HOBBYPOINTS21 = '/best10HobbyPoints21'
export const RESULT_TS55_21 = '/result_ts55_21'
export const STANDINGS_TS55_21 = '/standings_ts55_21'
export const GOALIES_20_TOP = '/goalies_20_top'
export const GOALIES_20_KLASIK = '/goalies_20_klasik'
export const STANDINGS_17 = '/standings17'
export const STANDINGS_19 = '/standings19'
export const ARTICLE_GENERATED = '/articleGenerated/:gameId'
export const USER_SIGN_UP = '/userSignUp'

export const getArticleRoute = gameId => generatePath(ARTICLE, { gameId })
export const getArticleGeneratedRoute = gameId =>
  generatePath(ARTICLE_GENERATED, { gameId })
export const getTeamRoute = teamId => generatePath(TEAM, { teamId })
export const getPlayerRoute = playerId => generatePath(PLAYER, { playerId })
