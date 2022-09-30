import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styled'

const BaseToggle = ({ checked, onChange, ...others }) => {
  return <Wrapper onChange={onChange} checked={checked} {...others} />
}

BaseToggle.propTypes = {
  checked: PropTypes.boolean,
  onChange: PropTypes.func
}

export default React.memo(BaseToggle)
