import React from 'react'
import { ContainerWrapper, AvatarWrapper, UploaderWrapper } from './styled'
import PropTypes from 'prop-types'
import { IMAGES } from 'assets'
import { BaseButton } from 'atoms'

// eslint-disable-next-line no-unused-vars
const AvatarBlock = ({ hasUpload = true, url, ...others }) => {
  return (
    <ContainerWrapper {...others}>
      <AvatarWrapper source={IMAGES.AVATAR} />
      {hasUpload && (
        <UploaderWrapper UpdateFile listType='picture-text'>
          <BaseButton blue>Change avatar</BaseButton>
        </UploaderWrapper>
      )}
    </ContainerWrapper>
  )
}

AvatarBlock.propTypes = {
  children: PropTypes.node,
  hasUpload: PropTypes.bool,
  url: PropTypes.string
}

export default React.memo(AvatarBlock)
