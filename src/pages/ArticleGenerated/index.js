import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { LoaderPHM } from '../../components/Loader'

import { Title } from './components/Title'
import { ResultPreview } from './components/ResultPreview'
import { Perex } from './components/Perex'
import { SubTitle } from './components/SubTitle'
import { PeriodComments } from './components/PeriodComments'
import { GameStatistics } from './components/GameStatistics'
import { Reports } from './components/Reports'
import { GameStars } from './components/GameStars'
import { GameGoalkeepers } from './components/GameGoalkeepers'

import { GET_ARTICLE } from '../../graphql/requests'

import { CssBaseline, Container } from '@material-ui/core'
import { useStyles } from './styled'

const ArticleGenerated = () => {
  const classes = useStyles()
  const { gameId } = useParams()
  //error
  const { loading, data } = useQuery(GET_ARTICLE, {
    variables: { gameId },
  })

  // useEffect(() => {
  //   console.log('data:', data)
  // }, [data])

  return loading ? (
    <LoaderPHM />
  ) : (
    <Container component="main" maxWidth="lg" className={classes.article}>
      <CssBaseline />
      <Title data={data.article} />
      <ResultPreview data={data.article} />
      <Perex data={data.article} />
      <SubTitle data={data.article} />
      <PeriodComments comment={data.article.firstPeriodNotes} />
      <GameStatistics data={data.article} />
      <PeriodComments comment={data.article.secondPeriodNotes} />
      <Reports data={data.article} />
      <PeriodComments comment={data.article.thirdPeriodNotes} />
      <GameStars data={data.article} />
      <GameGoalkeepers data={data.article} />
      <PeriodComments comment={data.article.closingNotes} />
    </Container>
  )
}

export { ArticleGenerated as default }
