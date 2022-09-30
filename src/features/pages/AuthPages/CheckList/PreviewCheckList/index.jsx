import { withArray, withEmpty, withNumber } from 'exp-value'
import { SectionPreview } from 'molecules'
import PropTypes from 'prop-types'
import React, { useCallback, useState, useMemo } from 'react'
import { useTheme } from 'styled-components'
import {
  Body,
  Button,
  Icon,
  LineProgress,
  Title,
  Wrapper,
  WrapperFooter,
  WrapperModal,
  WrapperProgress
} from './styled'
import { useRecoilValue } from 'recoil'
import { globalModulesState } from 'stores/CreateForm'

const PreviewCheckList = ({ moduleName, show, onHide, ...others }) => {
  const [step, setStep] = useState(1)
  const theme = useTheme()
  const modules = useRecoilValue(globalModulesState)
  const moduleNumber = useMemo(() => modules.length, [modules])
  const activeStep = useCallback(
    type => {
      if (type === 'next' && step < moduleNumber) return setStep(step + 1)
      if (type === 'prev' && step > 1) return setStep(step - 1)
    },
    [step, moduleNumber, modules]
  )

  const renderModule = useCallback(
    module => {
      return (
        <Wrapper>
          <WrapperProgress
            step={step}
            final={moduleNumber}
            moduleTitle={withEmpty('title', module)}
            description={withEmpty('description', module)}
          />
          {withArray('sections', module).map((section, index) => {
            return (
              <SectionPreview
                key={index + withEmpty('id', section)}
                section={section}
                preview
                orderNumber={index + 1}
              />
            )
          })}
        </Wrapper>
      )
    },
    [step, modules, moduleNumber]
  )

  const _renderModal = useCallback(() => {
    return (
      <>
        <WrapperModal.Header>
          <Title H2 style={{ marginLeft: 20 }}>
            {moduleName}
          </Title>
          <LineProgress
            percent={(step * 100) / moduleNumber}
            strokeColor={theme.colors.progress[0]}
            showInfo={false}
            strokeWidth={5}
          />
        </WrapperModal.Header>
        <Body>{renderModule(modules[step - 1])}</Body>
        <WrapperModal.Footer>
          <WrapperFooter>
            <Button
              onClick={() => activeStep('prev')}
              hide={step === 1}
              secondary
              bold
            >
              <Icon name='feather-chevron-left' size={18} /> Previous
            </Button>
            <Button
              onClick={() => activeStep('next')}
              secondary
              bold
              hide={step === moduleNumber}
            >
              Next
              <Icon name='feather-chevron-right' size={18} />
            </Button>
            {step == moduleNumber && (
              <Button onClick={onHide} primary finish bold>
                Finish
              </Button>
            )}
          </WrapperFooter>
        </WrapperModal.Footer>
      </>
    )
  }, [modules, step, moduleNumber])

  return (
    <WrapperModal show={show} onHide={onHide} {...others}>
      {!modules || withNumber('length', modules) == 0
        ? 'No modules'
        : _renderModal()}
    </WrapperModal>
  )
}

PreviewCheckList.propTypes = {
  moduleName: PropTypes.string,
  modules: PropTypes.array.isRequired,
  show: PropTypes.bool,
  onHide: PropTypes.func
}

export default PreviewCheckList
