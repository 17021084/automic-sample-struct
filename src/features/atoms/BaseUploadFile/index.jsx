import React from 'react'
import PropTypes from 'prop-types'
import { UploadWrapper } from './styled'

const BaseUploadFile = ({ children, action, listType, ...others }) => {
  return (
    <UploadWrapper listType={listType} action={action} {...others}>
      {children}
    </UploadWrapper>
  )
}

BaseUploadFile.propTypes = {
  children: PropTypes.node.isRequired,
  listType: PropTypes.string,
  action: PropTypes.string
}

export default React.memo(BaseUploadFile)
