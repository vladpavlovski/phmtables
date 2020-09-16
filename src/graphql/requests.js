import { gql } from '@apollo/client'

export const GET_ARTICLES_LIST = gql`
  query getArticles {
    articles {
      id
      gameId
      teamOneNameFull
      teamTwoNameFull
      date
      periodsResult
    }
  }
`

export const GET_ARTICLE = gql`
  query getArticle($gameId: String!) {
    article(gameId: $gameId) {
      id
      gameId
      title
      subTitle
      perex
      teamOneNameFull
      teamOneLogo
      teamOneGoals
      leagueName
      leagueLogo
      date
      time
      place
      phase
      group
      periodsResult
      teamTwoNameFull
      teamTwoLogo
      teamTwoGoals
      firstPeriodNotes
      secondPeriodNotes
      thirdPeriodNotes
      closingNotes
      teamOneShots
      teamTwoShots
      teamOneMinutes
      teamTwoMinutes
      teamOneFaceoffs
      teamTwoFaceoffs
      referee
      delegate
      gameData {
        teamOneStarId
        teamOneStarName
        teamOneStarAvatar
        teamOneStarGoals
        teamOneStarAssists
        teamOneStarPoints
        teamOneGoalieId
        teamOneGoalieAvatar
        teamOneGoalieName
        teamOneGoalieWins
        teamOneGoalieSaves
        teamOneGoaliePerc
        teamTwoStarId
        teamTwoStarName
        teamTwoStarAvatar
        teamTwoStarGoals
        teamTwoStarAssists
        teamTwoStarPoints
        teamTwoGoalieId
        teamTwoGoalieAvatar
        teamTwoGoalieName
        teamTwoGoalieWins
        teamTwoGoalieSaves
        teamTwoGoaliePerc
      }
      gameReport {
        id
        minute
        teamLogo
        teamShortcut
        situation
        playerSurnameOne
        playerSurnameTwo
        playerSurnameThree
        details
      }
      playersTeamOne {
        id
        playerId
        playerNumber
        playerName
        playerGoals
        playerAssists
        playerPoints
        playerPim
        playerAvatar
        playerDetail1
        playerDetail2
        playerPlaceHolder1
        playerPlaceHolder2
        playerPlaceHolder3
      }
      playersTeamTwo {
        id
        playerId
        playerNumber
        playerName
        playerGoals
        playerAssists
        playerPoints
        playerPim
        playerAvatar
        playerDetail1
        playerDetail2
        playerPlaceHolder1
        playerPlaceHolder2
        playerPlaceHolder3
      }
    }
  }
`

export const SIGN_IN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      id
      email
      accessToken
    }
  }
`

export const SIGN_UP = gql`
  mutation signup($input: SignupInput!) {
    signup(input: $input) {
      id
      email
      name
      accessToken
    }
  }
`

export const COMPOSE_ARTICLE = gql`
  mutation composeArticle($url: String!) {
    composeArticle(url: $url) {
      id
      gameId
      title
    }
  }
`

export const DELETE_COMPOSED_ARTICLE = gql`
  mutation deleteArticle($gameId: String!) {
    deleteArticle(gameId: $gameId) {
      id
    }
  }
`

// export const COMPOSE_ALL_ARTICLES = gql`
//   mutation composeAllArticles() {
//     composeAllArticles() {
//       id
//     }
//   }
// `
