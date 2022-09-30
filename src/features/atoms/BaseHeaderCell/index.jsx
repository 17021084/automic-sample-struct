import PropTypes from 'prop-types'
import React from 'react'
import { WrapperHeader } from './styled'

const BaseHeaderCell = ({ children, ...others }) => {
  return <WrapperHeader {...others}>{children}</WrapperHeader>
}

BaseHeaderCell.propTypes = {
  children: PropTypes.any
}

export default React.memo(BaseHeaderCell)
