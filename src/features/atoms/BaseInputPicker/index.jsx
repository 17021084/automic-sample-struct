import React from 'react'
import { Wrapper } from './styled'
import PropTypes from 'prop-types'

const BaseInputPicker = ({ ...rest }) => {
  return <Wrapper {...rest} />
}

BaseInputPicker.propTypes = {
  children: PropTypes.node
}

export default React.memo(BaseInputPicker)
