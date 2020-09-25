import React from 'react'
import { STANDINGS_20_URL } from '../../../api/data-url'
import { Filters } from './Filters'

import { Standings } from '../Standings20'

const Standings20Top = () => (
  <Standings
    fetchUrl={STANDINGS_20_URL}
    tabName={'Standing_TOP4publish'}
    Filters={Filters}
  />
)

export { Standings20Top as default }
