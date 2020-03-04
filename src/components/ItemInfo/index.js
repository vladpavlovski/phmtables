import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Preview, Title, Description, Key, Value } from './styled'

const ItemInfo = props => {
  const { previewImageLink, title, description, key, value } = props.data

  return (
    <Wrapper>
      <Preview src={previewImageLink} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Key>{key}</Key>
      <Value>{value}</Value>
    </Wrapper>
  )
}

ItemInfo.propTypes = {
  previewImageLink: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  key: PropTypes.string,
  value: PropTypes.string,
}

ItemInfo.defaultProps = {
  data: {
    previewImageLink: '',
    title: '',
    description: '',
    key: '',
    value: '',
  },
}

export { ItemInfo }
