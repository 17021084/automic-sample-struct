import PropTypes from 'prop-types'
import React from 'react'
import { WrapperTable } from './styled'

const BaseTable = ({ children, ...others }) => {
  return <WrapperTable  {...others}>{children}</WrapperTable>
}

BaseTable.propTypes = {
  children: PropTypes.any
}

export default React.memo(BaseTable)
