import { atom } from 'recoil'
import { Constant } from 'utils'

export const globalModulesState = atom({
  key: 'CreateForm/global-module-state',
  default: []
})
export const globalSectionState = atom({
  key: 'CreateForm/global-section-state',
  default: []
})
export const globalSectionItemState = atom({
  key: 'CreateForm/global-sectionItem-state',
  default: []
})
export const globalPresentationConfig = atom({
  key: 'CreateForm/global-present-config',
  default: []
})
export const presentationConfig = atom({
  key: 'CreateForm/present-config',
  default: []
})
export const defaultPresentation = atom({
  key: 'default-presentation',
  default: Constant.presentationConfig
})
export const errorModule = atom({
  key: 'module-Check-error',
  default: []
})
