import React from 'react'
import { STANDINGS_21_URL } from '../../../api/data-url'
import { Filters } from './Filters'

import { Standings } from '../Standings20'

const Standings21Top = () => (
  <Standings
    fetchUrl={STANDINGS_21_URL}
    tabName={'Standing_TOP4publish'}
    Filters={Filters}
  />
)

export { Standings21Top as default }
