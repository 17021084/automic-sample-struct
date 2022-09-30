import React from 'react'
import { Wrapper, WrapperModal, Body } from './styled'
import PropTypes from 'prop-types'

const BaseModal = ({ size, header, body, footer, show, onHide, ...others }) => {
  return (
    <Wrapper>
      <WrapperModal size={size} show={show} onHide={onHide} {...others}>
        {header && <WrapperModal.Header>{header}</WrapperModal.Header>}
        <Body>{body}</Body>
        {footer && <WrapperModal.Footer>{footer}</WrapperModal.Footer>}
      </WrapperModal>
    </Wrapper>
  )
}

BaseModal.propTypes = {
  size: PropTypes.number,
  header: PropTypes.element,
  body: PropTypes.element,
  footer: PropTypes.element,
  show: PropTypes.bool,
  onHide: PropTypes.func
}

export default React.memo(BaseModal)
