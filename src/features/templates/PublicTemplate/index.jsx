import React from 'react'
import {
  // BodyWrapper,
  GridItem,
  WrapperContainer,
  HeaderWrapper
} from './styled'
import PropTypes from 'prop-types'
import { BaseCotami } from 'atoms'

const PublicTemplate = ({ children, ...others }) => {
  return (
    <WrapperContainer>
      <HeaderWrapper>
        <BaseCotami />
      </HeaderWrapper>
      <GridItem xs={24} sm={16} md={12} lg={6} {...others}>
        {children}
      </GridItem>
    </WrapperContainer>
  )
}
PublicTemplate.propTypes = {
  children: PropTypes.any
}
export default React.memo(PublicTemplate)
