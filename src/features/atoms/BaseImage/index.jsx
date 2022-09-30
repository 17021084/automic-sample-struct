import React from 'react'
import PropTypes from 'prop-types'
import { Img } from './styled'
import { IMAGES } from 'assets'

const BaseImage = ({ source, style, alt, ...others }) => {
  const DEFAULT_IMAGE = React.useMemo(() => IMAGES.DEFAULT, [])

  const ims = React.useMemo(() => source || DEFAULT_IMAGE, [source])

  return (
    <Img
      src={ims}
      onError={e => {
        e.target.src = DEFAULT_IMAGE
        e.target.alt = 'default bidma image'
      }}
      style={style}
      alt={alt}
      {...others}
    />
  )
}

BaseImage.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object
}
export default React.memo(BaseImage)
