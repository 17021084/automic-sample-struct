import React from 'react'
import { Wrapper } from './styled'
import PropTypes from 'prop-types'

const BaseText = ({ children, ...others }) => {
  return <Wrapper {...others}>{children}</Wrapper>
}

BaseText.propTypes = {
  children: PropTypes.node
}

export default React.memo(BaseText)
