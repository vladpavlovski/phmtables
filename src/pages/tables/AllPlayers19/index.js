import React from 'react'
import { ALL_PLAYERS_19 } from '../../../api/data-url'

import { AllPlayers } from '../AllPlayers'

const AllPlayers19 = () => (
  <AllPlayers fetchUrl={ALL_PLAYERS_19} tabName={'allPlayers19_4publish'} />
)

export { AllPlayers19 as default }
