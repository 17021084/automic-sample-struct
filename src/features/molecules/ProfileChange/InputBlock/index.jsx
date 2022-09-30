import React from 'react'
import { ContainerWrapper, TitleWrapper } from './styled'
import PropTypes from 'prop-types'

import { InputGroup } from 'molecules'

const InputBlock = ({ title, ...others }) => {
  return (
    <ContainerWrapper column={'column'}>
      <TitleWrapper>{title}</TitleWrapper>
      <InputGroup {...others} />
    </ContainerWrapper>
  )
}

InputBlock.propTypes = {
  title: PropTypes.string
}

export default React.memo(InputBlock)
