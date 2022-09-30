import PropTypes from 'prop-types'
import React from 'react'
import { WrapperCheckbox } from './styled'

const BaseCheckbox = ({ content, id, ...others }) => {
  return (
    <WrapperCheckbox {...others} id={id}>
      {content}
    </WrapperCheckbox>
  )
}

BaseCheckbox.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string
}

export default React.memo(BaseCheckbox)
