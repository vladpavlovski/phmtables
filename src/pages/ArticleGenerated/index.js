import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { LoaderPHM } from '../../components/Loader'

import './article-generated.css'
import './article-base.css'
import { Title } from './components/Title'
import { ResultPreview } from './components/ResultPreview'
import { Perex } from './components/Perex'
import { SubTitle } from './components/SubTitle'
import { FirstPeriodComments } from './components/FirstPeriodComments'
import { GameStatistics } from './components/GameStatistics'
import { SecondPeriodComments } from './components/SecondPeriodComments'
import { Reports } from './components/Reports'
import { ThirdPeriodComments } from './components/ThirdPeriodComments'
import { GameStars } from './components/GameStars'
import { GameGoalkeepers } from './components/GameGoalkeepers'
import { ClosingComments } from './components/ClosingComments'
import { GET_ARTICLE } from '../../graphql/requests'

const ArticleGenerated = () => {
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
    <>
      <Title data={data.article} />
      <ResultPreview data={data.article} />
      <Perex data={data.article} />
      <SubTitle data={data.article} />
      <FirstPeriodComments data={data.article} />
      <GameStatistics data={data.article} />
      <SecondPeriodComments data={data.article} />
      <Reports data={data.article} />
      <ThirdPeriodComments data={data.article} />
      <GameStars data={data.article} />
      <GameGoalkeepers data={data.article} />
      <ClosingComments data={data.article} />
    </>
  )
}

export { ArticleGenerated as default }
