import React from 'react'
import { Link } from './styled'
import PropTypes from 'prop-types'

const BaseLink = ({ children, ...others }) => {
  return <Link {...others}>{children}</Link>
}

BaseLink.propTypes = {
  children: PropTypes.string
}

export default React.memo(BaseLink)
