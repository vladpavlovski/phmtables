import React from 'react'
import { STANDINGS_17_URL } from '../../../api/data-url'
import { Filters } from '../Standings20/Filters'

import { Standings } from '../Standings20'

const Standings17 = () => (
  <Standings
    fetchUrl={STANDINGS_17_URL}
    tabName={'Standings17'}
    Filters={Filters}
  />
)

export { Standings17 as default }
