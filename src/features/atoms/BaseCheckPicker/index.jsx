import React from 'react'
import { Wrapper } from './styled'
import PropTypes from 'prop-types'

const BaseCheckPicker = ({ data, ...others }) => {
  return <Wrapper data={data} {...others}></Wrapper>
}

BaseCheckPicker.propTypes = {
  data: PropTypes.any
}

export default React.memo(BaseCheckPicker)
