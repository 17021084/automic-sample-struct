import React from 'react'
import { Wrapper } from './styled'
import PropTypes from 'prop-types'

const BaseDatePicker = ({ ...others }) => {
  return <Wrapper {...others}></Wrapper>
}

BaseDatePicker.propTypes = {
  others: PropTypes.any
}

export default React.memo(BaseDatePicker)
