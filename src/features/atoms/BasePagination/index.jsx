import PropTypes from 'prop-types'
import React from 'react'
import { WrapperPaginate } from './styled'

const BasePagination = ({ children, ...others }) => {
  return <WrapperPaginate {...others}>{children}</WrapperPaginate>
}

BasePagination.propTypes = {
  children: PropTypes.any
}

export default React.memo(BasePagination)
