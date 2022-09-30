import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, WrapperStep, WrapperContent, Span, Title } from './styled'

const StepProgress = ({ step, final, description, moduleTitle, ...others }) => {
  return (
    <Wrapper {...others}>
      <WrapperStep>
        <Span>{step}</Span>
        <Span>{`/${final}`}</Span>
      </WrapperStep>
      <WrapperContent>
        <Title H2 bold>
          {moduleTitle || 'Title module'}
        </Title>
        <Title H4>{description}</Title>
      </WrapperContent>
    </Wrapper>
  )
}
StepProgress.propTypes = {
  step: PropTypes.number,
  final: PropTypes.number,
  description: PropTypes.string,
  moduleTitle: PropTypes.string
}
export default StepProgress
