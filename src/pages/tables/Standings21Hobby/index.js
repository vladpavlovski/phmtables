import React from 'react'
import { STANDINGS_21_URL } from '../../../api/data-url'
import { Filters } from './Filters'

import { Standings } from '../Standings20'

const Standings21Hobby = () => (
  <Standings
    fetchUrl={STANDINGS_21_URL}
    tabName={'Standing_HOBBY4publish'}
    Filters={Filters}
  />
)

export { Standings21Hobby as default }
