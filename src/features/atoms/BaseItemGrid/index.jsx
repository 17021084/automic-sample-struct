import React from 'react'
import { ColStyle, Wrapper } from './styled'
import PropTypes from 'prop-types'

const BaseItemGrid = ({ children, ...others }) => {
  return (
    <Wrapper componentClass={ColStyle} colspan={24} {...others}>
      {children}
    </Wrapper>
  )
}

BaseItemGrid.propTypes = {
  children: PropTypes.any
}

export default React.memo(BaseItemGrid)
