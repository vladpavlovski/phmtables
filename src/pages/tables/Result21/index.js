import React from 'react'
import { RESULT_21_URL } from '../../../api/data-url'
import { Result } from '../Result'

const Result21 = () => (
  <Result fetchUrl={RESULT_21_URL} tabName={'Matches4publish'} />
)

export { Result21 as default }
