import React from 'react'
import { STANDINGS_21_URL } from '../../../api/data-url'
import { Filters } from '../Standings20/Filters'

import { Standings } from '../Standings20'

const Standings21 = () => (
  <Standings
    fetchUrl={STANDINGS_21_URL}
    tabName={'Standing_ALL4publish'}
    Filters={Filters}
  />
)

export { Standings21 as default }
