import React from 'react'
import { Wrapper } from './styled'
import PropTypes from 'prop-types'

const BaseInput = ({ ...rest }) => {
  return <Wrapper {...rest} />
}

BaseInput.propTypes = {
  children: PropTypes.node
}

export default React.memo(BaseInput)
