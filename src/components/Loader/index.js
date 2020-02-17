import React from 'react'
import Loader from 'react-loader-spinner'
import { LoaderWrapper } from './styled'

const LoaderPHM = props => {
  return (
    <LoaderWrapper>
      <Loader {...props} />
      <p>Tahám výsledky z centrály...</p>
      <p>Prosím vydrž...</p>
    </LoaderWrapper>
  )
}

LoaderPHM.propTypes = {}

LoaderPHM.defaultProps = {
  type: 'Rings',
  color: '#323C46',
  height: 250,
  width: 250,
}

export { LoaderPHM }
