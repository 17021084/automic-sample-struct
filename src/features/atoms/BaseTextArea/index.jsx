import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Label, WrapperTextArea } from './styled'

const BaseTextArea = ({ label, data, onChange, ...others }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>

      <WrapperTextArea
        componentClass='textarea'
        value={data}
        onChange={onChange}
        {...others}
      />
    </Wrapper>
  )
}

BaseTextArea.propTypes = {
  label: PropTypes.string,
  data: PropTypes.any,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
}

export default BaseTextArea
