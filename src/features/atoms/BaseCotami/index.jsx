import React from 'react'
import { CotamiWrapper, Logo } from './styled'
import PropTypes from 'prop-types'
import { IMAGES } from 'assets'

const BaseCotami = ({ children, ...others }) => {
  return (
    <CotamiWrapper {...others}>
      <Logo source={IMAGES.COTAMI} />
      {children}
    </CotamiWrapper>
  )
}

BaseCotami.propTypes = {
  children: PropTypes.any
}

export default React.memo(BaseCotami)
