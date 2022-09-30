import React from 'react'
import { Wrapper, ImageWrapper, TitleWrapper } from './styled'
import PropTypes from 'prop-types'

const UserPicker = ({ ...others }) => {
  return (
    <Wrapper
      renderMenuItem={(label, url) => {
        return (
          <div>
            <ImageWrapper source={url.url} />
            <TitleWrapper>{label}</TitleWrapper>
          </div>
        )
      }}
      renderValue={value => {
        return (
          <div>
            <TitleWrapper>{value}</TitleWrapper>
          </div>
        )
      }}
      {...others}
    />
  )
}

UserPicker.propTypes = {
  others: PropTypes.any,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
      value: PropTypes.string
    })
  )
}

export default React.memo(UserPicker)
