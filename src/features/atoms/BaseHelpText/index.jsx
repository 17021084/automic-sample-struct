import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styled'
import { useTheme } from 'styled-components'

const BaseHelpText = ({ children, isError, ...others }) => {
  const theme = useTheme()
  return (
    <Wrapper
      isError={isError}
      {...others}
      style={{
        color: isError ? theme.colors.error : theme.colors.secondary[3]
      }}
    >
      {children}
    </Wrapper>
  )
}

BaseHelpText.propTypes = {
  children: PropTypes.string.isRequired,
  isError: PropTypes.bool
}

export default React.memo(BaseHelpText)
