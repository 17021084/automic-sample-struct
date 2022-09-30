import React from 'react'
import { WrapperColumn } from './styled'
import PropTypes from 'prop-types'

const BaseColumn = ({ children, ...others }) => {
  return (
    <WrapperColumn align='center' {...others}>
      {children}
    </WrapperColumn>
  )
}

BaseColumn.propTypes = {
  children: PropTypes.any
}

export default React.memo(BaseColumn)
