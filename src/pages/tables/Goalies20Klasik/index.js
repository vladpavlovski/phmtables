import React from 'react'
import { GOALIES_20_URL } from '../../../api/data-url'

import { Goalies } from '../Goalies20Top'

const Goalies20Klasik = () => (
  <Goalies fetchUrl={GOALIES_20_URL} tabName={'allGoaliesKLASIK4publish'} />
)

export { Goalies20Klasik as default }
