import React from 'react'
import PropTypes from 'prop-types'
import { ContainerWrapper, BreadItemWrapper, BreadWrapper } from './styled'
import { withNamespaces } from 'react-i18next'

const PrivateHeader = ({ t, paths, ...others }) => {
  return (
    <ContainerWrapper {...others}>
      <BreadWrapper separator={' > '}>
        {paths.map((path, index) => {
          const href = '/' + paths.slice(0, index + 1).join('/')
          const active = index === paths.length - 1 ? true : false
          let label = path
          return (
            <BreadItemWrapper
              key={index}
              to={href}
              className={active && 'active'}
            >
              {t(label)}
            </BreadItemWrapper>
          )
        })}
      </BreadWrapper>
    </ContainerWrapper>
  )
}

PrivateHeader.propTypes = {
  others: PropTypes.any,
  t: PropTypes.any,
  paths: PropTypes.arrayOf(PropTypes.string)
}

export default withNamespaces('menu')(React.memo(PrivateHeader))
