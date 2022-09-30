import { atom } from 'recoil'

export const globalLoadingState = atom({
  key: 'App/global-loading-state',
  default: 0
})

export const globalTokenState = atom({
  key: 'App/global-token-state',
  default: null
})
