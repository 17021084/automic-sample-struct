import { withNumber } from 'exp-value'
import { selector } from 'recoil'
import { globalLoadingState, globalTokenState } from './atom'

export const isLoadingState = selector({
  key: 'App/loading-visible',
  get: ({ get }) => {
    const loadingCounter = get(globalLoadingState)

    return loadingCounter > 0
  }
})

export const showLoadingState = selector({
  key: 'App/show-loading',
  set: ({ get, set }) => {
    const loadingCounter = get(globalLoadingState)

    set(globalLoadingState, loadingCounter + 1)
  }
})

export const hideLoadingState = selector({
  key: 'App/hide-loading',
  set: ({ get, set }) => {
    const loadingCounter = get(globalLoadingState)
    const newLoadingCounter = loadingCounter <= 0 ? 0 : loadingCounter - 1

    set(globalLoadingState, newLoadingCounter)
  }
})

export const tokenState = selector({
  key: 'App/is-logged-in',
  get: ({ get }) => {
    const token = get(globalTokenState)
    const validToken = `${token}`.replace('null', '').replace('undefined', '')
    const isValidToken = withNumber('length', validToken) > 100

    if (isValidToken) {
      return {
        isLoggedIn: true,
        token: validToken
      }
    }

    return {
      isLoggedIn: false,
      token: null
    }
  },
  set: ({ set }, newToken) => set(globalTokenState, newToken)
})
