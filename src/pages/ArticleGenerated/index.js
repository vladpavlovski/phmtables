import React from 'react'

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
import { PageSetup } from './components/PageSetup'

const ArticleGenerated = props => {
  return (
    <>
      <PageSetup />

      <Title />
      <ResultPreview />
      <Perex />
      <SubTitle />
      <FirstPeriodComments />
      <GameStatistics />
      <SecondPeriodComments />
      <Reports />
      <ThirdPeriodComments />
      <GameStars />
      <GameGoalkeepers />
      <ClosingComments />
    </>
  )
}

export { ArticleGenerated }
