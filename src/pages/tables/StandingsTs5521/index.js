import React from 'react'
import { STANDINGS_TS_55_21_URL } from '../../../api/data-url'
import { Filters } from '../Standings21/Filters'

import { Standings } from '../Standings20'

const Standings21Ts5521 = () => (
  <Standings
    fetchUrl={STANDINGS_TS_55_21_URL}
    tabName={'TS55_Standings4publish'}
    Filters={Filters}
  />
)

export { Standings21Ts5521 as default }
