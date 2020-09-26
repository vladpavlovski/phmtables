import React from 'react'
import { STANDINGS_21_URL } from '../../../api/data-url'

import { Filters } from '../Standings20Klasik/Filters'

import { Standings } from '../Standings20'

const Standings21Klasik = () => (
  <Standings
    fetchUrl={STANDINGS_21_URL}
    tabName={'Standing_KLASIK4publish'}
    Filters={Filters}
  />
)

export { Standings21Klasik as default }
