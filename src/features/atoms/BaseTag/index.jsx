import PropTypes from 'prop-types'
import React from 'react'
import { Wrapper } from './styled'

const BaseTag = ({ color, size, children, ...others }) => {
  return (
    <Wrapper color={color} size={size} {...others}>
      {children}
    </Wrapper>
  )
}

BaseTag.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  size: PropTypes.string
}

export default React.memo(BaseTag)
