import React from 'react'
import { ContainerWrapper, TitleWrapper, ContentWrapper } from './styled'
import PropTypes from 'prop-types'

const DisplayField = ({ title, content, ...others }) => {
  return (
    <ContainerWrapper {...others}>
      <TitleWrapper h4>{title}</TitleWrapper>
      <ContentWrapper h4 bold>{content}</ContentWrapper>
    </ContainerWrapper>
  )
}

DisplayField.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default React.memo(DisplayField)
