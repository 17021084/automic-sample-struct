import React from 'react'
import { Wrapper } from './styled'
import PropTypes from 'prop-types'

const BaseTitle = ({ children, ...others }) => {
  return <Wrapper {...others}>{children}</Wrapper>
}

BaseTitle.propTypes = {
  children: PropTypes.node
}

export default React.memo(BaseTitle)
