import React from 'react'
import { STANDINGS_19_URL } from '../../../api/data-url'
import { Filters } from '../Standings20/Filters'

import { Standings } from '../Standings20'

const Standings19 = () => (
  <Standings
    fetchUrl={STANDINGS_19_URL}
    tabName={'Standings19'}
    Filters={Filters}
  />
)

export { Standings19 as default }
