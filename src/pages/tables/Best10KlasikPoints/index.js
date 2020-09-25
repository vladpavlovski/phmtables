import React from 'react'
import { PLAYERS_URL } from '../../../api/data-url'

import { Best10 } from '../Best10TopPoints'

const Best10KlasikPoints = () => (
  <Best10 fetchUrl={PLAYERS_URL} tabName={'Best10KLASIKpoints4publish'} />
)

export { Best10KlasikPoints as default }
