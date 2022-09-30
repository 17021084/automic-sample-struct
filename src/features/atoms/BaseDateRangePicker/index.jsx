import React from 'react'
import { Wrapper } from './styled'
import PropTypes from 'prop-types'

const BaseDateRangePicker = ({ value, ...others }) => {
  return (
    <Wrapper
      value={
        value && value.length ? [new Date(value[0]), new Date(value[1])] : []
      }
      {...others}
    ></Wrapper>
  )
}

BaseDateRangePicker.propTypes = {
  others: PropTypes.any,
  value: PropTypes.array
}

export default React.memo(BaseDateRangePicker)
