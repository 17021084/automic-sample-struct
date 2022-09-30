import { withArray, withEmpty, withNumber, withObject } from 'exp-value'
import { selector } from 'recoil'
import {
  globalModulesState,
  globalSectionState,
  globalPresentationConfig,
  presentationConfig,
  defaultPresentation,
  errorModule
} from './atom'

export const moduleGlobal = selector({
  key: 'tempCelsius',
  get: ({ get }) => get(globalModulesState),
  set: ({ set }, newValue) => set(globalModulesState, newValue)
})

export const addModule = selector({
  key: 'CreateForm/add-module',
  set: ({ get, set }) => {
    const modules = get(globalModulesState)
    let temp = [
      ...modules,
      {
        title: '',
        description: '',
        sections: []
      }
    ]
    set(globalModulesState, temp)
  }
})

export const updateModule = selector({
  key: 'CreateForm/update-module',
  set: ({ get, set }, data) => {
    if (typeof data.index === 'undefined' || !data.temp) return
    const module = withObject('temp', data)
    const id = withNumber('index', data)
    const modules = get(globalModulesState)
    let temp = [...modules]
    temp[id] = module
    set(globalModulesState, temp)
  }
})

export const removeModule = selector({
  key: 'CreateForm/remove-module',
  set: ({ get, set }, idModule) => {
    const modules = get(globalModulesState)
    let temp = [...modules]
    temp.splice(idModule, 1)
    set(globalModulesState, temp)
  }
})

export const addSection = selector({
  key: 'CreateForm/add-section',
  set: ({ get, set }, idModule) => {
    const modules = get(globalModulesState)
    const module = JSON.parse(JSON.stringify(modules))

    let temp = [
      ...withArray('sections', modules[idModule]),
      {
        title: '',
        description: '',
        sectionItems: [],
        inputTypeId: 'multiple_choice',
        screenMatchId: new Date().getTime()
      }
    ]
    set(globalSectionState, temp)
    module[idModule].sections = temp
    set(globalModulesState, module)
  }
})

export const updateSection = selector({
  key: 'CreateForm/update-section',
  set: ({ get, set }, data) => {
    if (
      typeof data.index === 'undefined' ||
      typeof data.orderNumber === 'undefined' ||
      !data.temp
    )
      return
    const idModule = withNumber('index', data)
    const idSection = withNumber('orderNumber', data)
    const section = withArray('temp', data)
    if (
      typeof idModule === 'undefined' ||
      typeof idSection === 'undefined' ||
      !section
    ) {
      return
    }
    const modules = get(globalModulesState)
    const module = JSON.parse(JSON.stringify(modules))
    module[idModule].sections[idSection] = section
    set(globalModulesState, module)
  }
})

export const removeSection = selector({
  key: 'CreateForm/remove-section',
  set: ({ get, set }, data) => {
    if (
      typeof data.index === 'undefined' ||
      typeof data.orderNumber === 'undefined'
    )
      return
    const idModule = withNumber('index', data)
    const idSection = withNumber('orderNumber', data)
    const modules = get(globalModulesState)

    const temp = JSON.parse(JSON.stringify(modules))
    temp[idModule].sections = temp[idModule].sections.filter(
      (_, index) => index !== idSection
    )

    set(globalModulesState, temp)
  }
})

export const swapSection = selector({
  key: 'CreateForm/swap',
  set: ({ get, set }, data) => {
    const idModule = withNumber('index', data)
    const idSection = withNumber('orderNumber', data)
    const type = withEmpty('type', data)

    const modules = get(globalModulesState)

    const module = JSON.parse(JSON.stringify(modules))
    const temp = module[idModule].sections

    if (type == 'up') {
      if (idSection > 0 && idSection < temp.length) {
        console.log(
          ([temp[idSection], temp[idSection - 1]] = [
            temp[idSection - 1],
            temp[idSection]
          ])
        )
      }
    }

    if (type == 'down') {
      if (idSection < temp.length - 1 && idSection >= 0)
        console.log(
          ([temp[idSection], temp[idSection + 1]] = [
            temp[idSection + 1],
            temp[idSection]
          ])
        )
    }

    module[idModule].sections = temp
    set(globalModulesState, module)
  }
})

export const addSectionItem = selector({
  key: 'CreateForm/add-sectionItem',
  set: ({ get, set }, data) => {
    const modules = get(globalModulesState)
    const idModule = data.idModule
    const idSection = data.idSection
    const module = JSON.parse(JSON.stringify(modules))

    module[idModule].sections[idSection].push({})

    set(globalModulesState, modules)
  }
})

export const updateSectionItem = selector({
  key: 'CreateForm/update-sectionItem',
  set: ({ get, set }, data) => {
    const { sectionItem, idModule, idSection, idSectionItem } = data
    const modules = JSON.parse(JSON.stringify(get(globalModulesState)))
    modules[idModule].sections[idSection].sectionItems[
      idSectionItem
    ] = sectionItem
    set(globalModulesState, modules)
  }
})

export const removeSectionItem = selector({
  key: 'CreateForm/remove-sectionItem',
  set: ({ get, set }, data) => {
    const { idModule, idSection, idSectionItems } = data
    const modules = JSON.parse(JSON.stringify(get(globalModulesState)))
    modules[idModule].sections[idSection].sectionItems.splice(idSectionItems, 1)
    set(globalModulesState, modules)
  }
})

export const getImageSection = selector({
  key: 'Present-config',
  set: ({ get, set }) => {
    const modules = JSON.parse(JSON.stringify(get(globalModulesState)))
    const temp = []
    modules.map(value => {
      value.sections.map(item => {
        if (item.inputTypeId === 'image')
          temp.push({
            screenMatchId: item.screenMatchId,
            screenType: 'image',
            screenName: 'Image',
            index: temp.length,
            duration: 10
          })
      })
    })
    set(globalPresentationConfig, temp)
  }
})
export const setDataPresentConfig = selector({
  key: 'setDataPresentConfig',
  set: ({ get, set }, data) => {
    const image = JSON.parse(JSON.stringify(get(globalPresentationConfig)))
    const temp = [...data, ...image]
    set(presentationConfig, temp)
  }
})

export const updateDefaultPresentation = selector({
  key: 'update-default-presentation',
  set: ({ get, set }, data) => {
    const index = data.id
    const type = data.type
    const value = data.value
    const defaultConfig = JSON.parse(JSON.stringify(get(defaultPresentation)))
    defaultConfig[index][type] = value
    set(defaultPresentation, defaultConfig)
  }
})

export const checkErrorModule = selector({
  key: 'handle-check-error-module',
  set: ({ get, set }) => {
    const modules = JSON.parse(JSON.stringify(get(globalModulesState)))
    const tempError = []
    modules.map((module, index) => {
      if (!module.title)
        return tempError.push({ message: `Module ${index + 1} hasn't title` })
      if (!module.description)
        return tempError.push({
          message: `Module ${index + 1} hasn't description`
        })
      if (module.sections.length < 1)
        return tempError.push({
          message: `Section of module ${index + 1} is empty`
        })
      withArray('sections', module).map((section, order) => {
        if (!section.title)
          return tempError.push({
            message: `Section ${order + 1} of module ${index + 1} hasn't title`
          })
        if (!section.description)
          return tempError.push({
            message: `Section ${order + 1} of module ${
              index + 1
            } hasn't description`
          })
        if (
          (section.inputTypeId == 'multiple_choice' ||
            section.inputTypeId == 'multiple_choice') &&
          section.sectionItems.length < 1
        )
          return tempError.push({
            message: `Section ${order + 1} of module ${
              index + 1
            } hasn't section items`
          })
      })
    })

    set(errorModule, tempError)
  }
})

export const checkErrorPresentation = selector({
  key: 'handle-check-error-module',
  set: ({ get, set }) => {
    const presentationConfig = JSON.parse(
      JSON.stringify(get(defaultPresentation))
    )
    const tempError = []
    presentationConfig.map((config, index) => {
      if (withNumber('commentOfUsers.length', config) < 1)
        return tempError.push({
          message: `Comment user of config ${index + 1} is empty`
        })
    })

    set(errorModule, tempError)
  }
})
