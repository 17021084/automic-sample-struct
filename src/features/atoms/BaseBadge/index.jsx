import React from 'react'
import { WrapperBadge } from './styled'
import PropTypes from 'prop-types'

const BaseBadge = ({ children, ...others }) => {
  return <WrapperBadge {...others}>{children}</WrapperBadge>
}

BaseBadge.propTypes = {
  children: PropTypes.node
}

export default React.memo(BaseBadge)
