import React from 'react'
import { ALL_PLAYERS_21 } from '../../../api/data-url'
import { AllPlayers } from '../AllPlayers'

const AllPlayers21 = () => (
  <AllPlayers fetchUrl={ALL_PLAYERS_21} tabName={'allPlayers4publish'} />
)

export { AllPlayers21 as default }
