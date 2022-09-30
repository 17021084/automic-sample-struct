import React from 'react'
import { Wrapper } from './styled'
import PropTypes from 'prop-types'

const BaseWrapper = ({
  children,
  around = false,
  column,
  between,
  ...rest
}) => {
  const justify = React.useMemo(() => {
    if (around) return 'space-around'
    if (between) return 'space-between'
    return 'center'
  }, [around, between])

  const direction = React.useMemo(() => (column ? 'column' : 'row'), [])

  return (
    <Wrapper justify={justify} direction={direction} {...rest}>
      {children}
    </Wrapper>
  )
}
BaseWrapper.propTypes = {
  children: PropTypes.any,
  around: PropTypes.bool,
  column: PropTypes.bool,
  between: PropTypes.bool
}
export default React.memo(BaseWrapper)
