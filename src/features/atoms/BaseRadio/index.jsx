import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styled'

const BaseRadio = ({ value, label, ...others }) => {
  return (
    <Wrapper value={value} {...others}>
      {label}
    </Wrapper>
  )
}

BaseRadio.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string
}

export default React.memo(BaseRadio)
