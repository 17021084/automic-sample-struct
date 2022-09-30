import React from 'react'
import { Wrapper, Image, Title } from './styled'
import PropTypes from 'prop-types'

const BaseThemeChecklist = ({ imageUrl, content, active, ...others }) => {
  return (
    <Wrapper check={active} {...others}>
      <Image source={imageUrl} />
      <Title>{content}</Title>
    </Wrapper>
  )
}

BaseThemeChecklist.propTypes = {
  imageUrl: PropTypes.string,
  content: PropTypes.string,
  active: PropTypes.bool
}

export default React.memo(BaseThemeChecklist)
