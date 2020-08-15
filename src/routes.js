import { generatePath } from 'react-router'
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
export const SIGN_UP = '/signup'
export const SIGN_IN = '/signin'
export const SIGN_OUT = '/signout'
export const DASHBOARD = '/dashboard'
export const ARTICLE = '/article/:gameId'
export const ARTICLE_GENERATED = '/articleGenerated/:gameId'
export const LINK_MAP = '/linkMap'

export const getArticleRoute = gameId => generatePath(ARTICLE, { gameId })
export const getArticleGeneratedRoute = gameId =>
  generatePath(ARTICLE_GENERATED, { gameId })
