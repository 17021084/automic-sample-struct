import { atom } from 'recoil'

export const globalUserState = atom({
  key: 'App/global-user-state',
  default: {}
})
