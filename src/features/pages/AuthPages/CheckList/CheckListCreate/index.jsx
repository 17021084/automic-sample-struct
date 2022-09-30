import { IMAGES } from 'assets'
import { EndPoint } from 'config/api'
import { withArray, withEmpty, withNumber } from 'exp-value'
import { useAlert, useRequestManager, useModules } from 'hooks'
import { CreateModule } from 'organisms'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useCallback } from 'react/cjs/react.development'
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState
} from 'recoil'
import {
  addModule,
  globalModulesState,
  presentationConfig,
  removeModule,
  updateModule
} from 'stores/CreateForm'
import PresentationConfig from '../PresentationConfig'
import PreviewCheckList from '../PreviewCheckList'
import {
  Button,
  Content,
  DisplayModeForm,
  FlexBlock,
  Form,
  Icon,
  Input,
  Label,
  LoadingMore,
  Theme,
  ThemeBlock,
  Title,
  Wrapper,
  WrapperBlock,
  WrapperButton,
  WrapperContent,
  WrapperForm,
  WrapperItem
} from './styled'
import { formCheckListCreate } from './validation'

const CheckListCreate = () => {
  const [step, setStep] = useState(1)
  const [showPreview, setShowPreview] = useState(false)
  const [templates, setTemplates] = useState([])
  const [formCheckList, setFormCheckList] = useState({
    title: '',
    description: '',
    unit: '',
    displayMode: '',
    templateId: ''
  })
  const [page, setPage] = useState(0)
  const listTemplatesRef = useRef(null)
  const [loadMore, setLoadMore] = useState(false)

  const [modules, setModules] = useRecoilState(globalModulesState)
  const resetState = useResetRecoilState(globalModulesState)
  const handleAddModule = useSetRecoilState(addModule)
  const handleUpdateModule = useSetRecoilState(updateModule)
  const handleRemoveModule = useSetRecoilState(removeModule)
  const presentConfig = useRecoilValue(presentationConfig)
  const history = useHistory()

  const { handleError } = useModules()

  const { onPostExecute, onGetExecute } = useRequestManager()
  const { showError, showSuccess } = useAlert()

  const onChooseTemplate = useCallback(
    item => {
      setFormCheckList({
        title: withEmpty('title', item),
        description: withEmpty('description', item),
        displayMode: withEmpty('displayMode', item),
        templateId: withEmpty('id', item)
      })
      getDetailTemplate(item.id)
    },
    [formCheckList, modules, templates]
  )
  const getTemplates = useCallback(
    (offset, limit) => {
      setLoadMore(true)
      async function execute() {
        const response = await onGetExecute(
          EndPoint.TEMPLATE_LIST,
          {
            params: {
              offset,
              limit
            }
          },
          true
        )
        if (response) {
          if (page == 0) setTemplates(withArray('data', response))
          else setTemplates(prev => [...prev, ...withArray('data', response)])
          setPage(withNumber('paging.next', response))
          setLoadMore(false)
        }
      }
      execute()
    },
    [page, templates]
  )

  const getDetailTemplate = useCallback(
    id => {
      async function execute(id) {
        const response = await onGetExecute(
          `${EndPoint.TEMPLATE_LIST}/${id}`,
          {}
        )
        if (response) setModules(withArray('modules', response))
      }
      execute(id)
    },
    [formCheckList, modules]
  )

  const navigationPage = useCallback(
    type => {
      if (step < 1) return setStep(1)
      if (step > 3) return setStep(3)
      if (type === 'prev') return setStep(step - 1)
      setStep(step + 1)
    },
    [step]
  )
  const hideModal = useCallback(() => setShowPreview(false), [
    showPreview,
    modules
  ])
  const showModal = useCallback(() => setShowPreview(true), [
    showPreview,
    modules
  ])
  const handleChangeForm = useCallback(
    (field, value) => {
      setFormCheckList(prev => ({
        ...prev,
        [field]: value
      }))
    },
    [formCheckList]
  )

  const validateForm = useCallback(
    errors => {
      let listError = [...new Set(Object.values(errors))]
      if (listError && withNumber('length', listError)) {
        showError(listError[0].toString())
        return
      }

      return navigationPage('next')
    },
    [formCheckList]
  )

  const validateModules = useCallback(() => {
    let temp = handleError(modules)
    if (temp) return showError(temp)
    showSuccess('Module ready!!!')
    navigationPage('next')
  }, [modules])

  const submit = useCallback(() => {
    async function postData() {
      const response = await onPostExecute(EndPoint.FORM_CREATE, {
        ...formCheckList,
        modules: modules,
        presentationConfig: presentConfig
      })
      if (response) {
        showSuccess('Success create form')
        setTimeout(() => {
          resetState()
          history.goBack()
        }, 3000)

        return
      }
      showError('Error !. Check data submit')
    }
    postData()
  }, [modules, formCheckList, presentConfig])

  const scrollLoadMore = useCallback(() => {
    if (
      listTemplatesRef.current.clientHeight +
        listTemplatesRef.current.scrollTop ===
      listTemplatesRef.current.scrollHeight
    ) {
      if (page) getTemplates(page, 10)
      console.log(page)
    }
  }, [page, templates])

  const _renderTheme = useCallback(() => {
    return (
      <FlexBlock ref={listTemplatesRef} onScroll={scrollLoadMore}>
        {templates.map((item, index) => {
          return (
            <Theme
              key={index}
              content={item.title}
              onClick={() => onChooseTemplate(item)}
              active={formCheckList.templateId == item.id}
            />
          )
        })}
        {loadMore && page && <LoadingMore source={IMAGES.LOADING} />}
      </FlexBlock>
    )
  }, [templates, formCheckList, modules, listTemplatesRef, page])

  const _renderModalPreviewCheckList = useCallback(() => {
    return (
      <PreviewCheckList
        moduleName={'Checklist module name'}
        show={showPreview}
        onHide={hideModal}
      />
    )
  }, [showPreview, hideModal])

  const _renderContent = useCallback(() => {
    if (step == 1) {
      return (
        <WrapperContent>
          <Title H2 bold>
            Choose a template
          </Title>

          <ThemeBlock>
            <Title H3>All template</Title>
            {_renderTheme()}
          </ThemeBlock>
        </WrapperContent>
      )
    }

    if (step == 2)
      return (
        <WrapperContent>
          <CreateModule
            data={modules}
            onRemoveModule={id => handleRemoveModule(id)}
            onCreateModule={handleAddModule}
            updateModule={handleUpdateModule}
          />
        </WrapperContent>
      )
    return <PresentationConfig />
  }, [step, modules, presentConfig, templates, page])

  const _renderForm = useCallback(() => {
    if (step == 1)
      return (
        <WrapperForm>
          <Title H2 bold>
            Checklist info
          </Title>

          <Form
            fluid
            model={formCheckListCreate}
            formValue={formCheckList}
            onCheck={validateForm}
          >
            <Input
              placeholder='Title'
              name={'title'}
              value={withEmpty('title', formCheckList)}
              onChange={value => handleChangeForm('title', value)}
            />

            <Input
              placeholder='Description'
              componentClass='textarea'
              name='description'
              rows={3}
              value={withEmpty('description', formCheckList)}
              onChange={value => handleChangeForm('description', value)}
            />

            <WrapperBlock>
              <Label bold> Display </Label>
              <DisplayModeForm
                name='displayMode'
                value={withEmpty('displayMode', formCheckList)}
                onChange={value => handleChangeForm('displayMode', value)}
              />
            </WrapperBlock>

            <WrapperBlock>
              <Button type={'submit'} primary fluid>
                Next
              </Button>
            </WrapperBlock>
          </Form>
        </WrapperForm>
      )

    return (
      <WrapperForm>
        <Title H2 bold>
          Checklist info
        </Title>

        <WrapperItem>
          <Title>Title</Title>
          <Content>
            {withEmpty('title', formCheckList) || 'Checklist info'}
          </Content>
        </WrapperItem>

        <WrapperItem>
          <Title>Description</Title>
          <Content>{withEmpty('description', formCheckList)}</Content>
        </WrapperItem>

        <WrapperItem>
          <Title>Display</Title>
          <Content>{withEmpty('displayMode', formCheckList)}</Content>
        </WrapperItem>

        <WrapperButton>
          {step == 3 ? (
            <Button blue onClick={() => navigationPage('prev')}>
              Continue Edit
            </Button>
          ) : (
            <Button blue onClick={showModal}>
              <Icon name='feather-eye' size={16} />
              Preview
            </Button>
          )}
          {step == 3 ? (
            <Button primary onClick={submit}>
              Submit
            </Button>
          ) : (
            <Button primary onClick={validateModules}>
              Next
            </Button>
          )}
        </WrapperButton>
      </WrapperForm>
    )
  }, [step, formCheckList, modules, presentConfig])

  useEffect(() => {
    getTemplates(page, 10)
  }, [])
  return (
    <Wrapper>
      {_renderContent()}
      {_renderForm()}
      {_renderModalPreviewCheckList()}
    </Wrapper>
  )
}

export default CheckListCreate
