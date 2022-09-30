import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styled'

const BaseButton = ({ children, onClick, ...others }) => {
  return (
    <Wrapper onClick={onClick} {...others}>
      {children}
    </Wrapper>
  )
}

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

export default React.memo(BaseButton)
