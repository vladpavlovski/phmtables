import React from 'react'
import { RESULTS_ALL_TIME_URL } from '../../../api/data-url'

import { Result } from '../Result'

const ResultsAlltime = () => (
  <Result fetchUrl={RESULTS_ALL_TIME_URL} tabName={'ResultsAllTime4publish'} />
)

export { ResultsAlltime as default }
