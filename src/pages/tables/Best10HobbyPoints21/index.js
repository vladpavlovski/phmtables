import React from 'react'
import { ALL_PLAYERS_21 } from '../../../api/data-url'
import { Best10 } from '../Best10TopPoints'

const Best10HobbyPoints21 = () => (
  <Best10 fetchUrl={ALL_PLAYERS_21} tabName={'Best10HOBBYpoints4publish'} />
)

export { Best10HobbyPoints21 as default }
