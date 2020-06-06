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
        minute
        teamLogo
        teamShortcut
        situation
        playerSurnameOne
        playerSurnameTwo
        playerSurnameThree
        details
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
