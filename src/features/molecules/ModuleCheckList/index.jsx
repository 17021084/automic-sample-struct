import { withArray, withEmpty, withNumber } from 'exp-value'
import PropTypes from 'prop-types'
import React, { useCallback, useState, useEffect } from 'react'
import SectionCheckList from '../SectionCheckList'
import {
  ButtonCreateSection,
  Collapse,
  ContainerSection,
  Icon,
  IconRemoveModule,
  Module,
  SectionCount,
  Title,
  Wrapper,
  Input
} from './styled'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { addSection, globalSectionState } from 'stores/CreateForm'

const ModuleCheckList = ({
  modules,
  index,
  onRemoveModule,
  updateModule,
  ...others
}) => {
  const [sections, setSections] = useRecoilState(globalSectionState)
  const handleAddSection = useSetRecoilState(addSection)

  const [showSection, setShowSection] = useState({})
  const [dataModule, setDataModule] = useState({})

  const onChangeData = useCallback(
    (field, value) => {
      let temp = {
        ...dataModule,
        [field]: value
      }
      updateModule({ index, temp })
      setDataModule(prev => ({
        ...prev,
        [field]: value
      }))
    },
    [dataModule, index]
  )

  const toggleSection = useCallback(
    id => {
      setShowSection(prev => {
        return { ...prev, [id]: !prev[id] }
      })
    },
    [showSection]
  )

  const renderSection = useCallback(
    (module, index) => {
      return (
        <Collapse collapse={showSection[index]}>
          {withArray('sections', module).map((section, key) => {
            return (
              <SectionCheckList
                type={withEmpty('inputTypeId', section)}
                sectionTitle={withEmpty('title', section)}
                description={withEmpty('description', section)}
                sectionItems={withArray('sectionItems', section)}
                orderNumber={key}
                index={index}
                key={`section ${key}`}
              />
            )
          })}
          <ButtonCreateSection
            dashed={1}
            onClick={() => handleAddSection(index)}
          >
            <Icon name='feather-plus' size={16} />
            <Title>Create section</Title>
          </ButtonCreateSection>
        </Collapse>
      )
    },
    [showSection]
  )

  const renderModule = useCallback(
    (module, index) => {
      if (!dataModule) return null
      return (
        <Module key={index}>
          <Input
            value={withEmpty('title', module)}
            onChange={e => onChangeData('title', e)}
            placeHolder='Module name'
            borderNone={1}
            h2
            bold
          />
          <Input
            placeHolder='Description'
            value={withEmpty('description', module)}
            onChange={e => onChangeData('description', e)}
            borderNone={1}
            h2
            bold
          />
          <IconRemoveModule
            name={'feather-trash-2'}
            size={26}
            onClick={() => onRemoveModule(index)}
          />
          <ContainerSection>
            <SectionCount onClick={() => toggleSection(index)}>
              {`${withNumber('sections.length', module)} section`}
              {showSection[index] ? (
                <Icon name='feather-chevron-down' size={16} />
              ) : (
                <Icon name='feather-chevron-up' size={16} />
              )}
            </SectionCount>

            {renderSection(module, index)}
          </ContainerSection>
        </Module>
      )
    },
    [showSection, dataModule]
  )
  useEffect(() => {
    setDataModule({
      id: index,
      title: withEmpty('title', modules),
      description: withEmpty('description', modules),
      sections: withArray('sections', modules)
    })
    setSections(withArray('sections', modules))
  }, [modules, sections, index])

  return <Wrapper {...others}>{renderModule(dataModule, index)}</Wrapper>
}

ModuleCheckList.propTypes = {
  modules: PropTypes.object,
  index: PropTypes.number,
  onRemoveModule: PropTypes.func,
  createSection: PropTypes.func,
  updateModule: PropTypes.func
}

export default React.memo(ModuleCheckList)
