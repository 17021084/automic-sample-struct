import React from 'react'
import { Wrapper } from './styled'
import PropTypes from 'prop-types'

const BaseContainer = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>
}

BaseContainer.propTypes = {
  children: PropTypes.node
}

export default React.memo(BaseContainer)
