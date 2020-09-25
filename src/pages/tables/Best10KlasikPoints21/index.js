import React from 'react'
import { ALL_PLAYERS_21 } from '../../../api/data-url'
import { Best10 } from '../Best10TopPoints'

const Best10KlasikPoints21 = () => (
  <Best10 fetchUrl={ALL_PLAYERS_21} tabName={'Best10KLASIKpoints4publish'} />
)

export { Best10KlasikPoints21 as default }
