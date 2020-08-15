import React from 'react'
import { Title } from '../../Title'
import { CreateSingleArticle } from './CreateSingleArticle'
import { CreateMultipleArticles } from './CreateMultipleArticles'

const CreatePanel = () => {
  return (
    <>
      <Title>Creation panel</Title>
      <CreateSingleArticle />
      <CreateMultipleArticles />
    </>
  )
}

export { CreatePanel as default }
