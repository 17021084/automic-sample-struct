import PropTypes from 'prop-types'
import React from 'react'
import { WrapperCell } from './styled'

const BaseCell = ({ children, ...others }) => {
  return <WrapperCell {...others}>{children}</WrapperCell>
}

BaseCell.propTypes = {
  children: PropTypes.any
}

export default React.memo(BaseCell)
