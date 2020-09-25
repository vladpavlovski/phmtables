import React from 'react'
import { ALL_PLAYERS_21 } from '../../../api/data-url'

import { Best10 } from '../Best10TopPoints'

const Best10TopPoints21 = () => (
  <Best10 fetchUrl={ALL_PLAYERS_21} tabName={'Best10TOPpoints4publish'} />
)

export { Best10TopPoints21 as default }
