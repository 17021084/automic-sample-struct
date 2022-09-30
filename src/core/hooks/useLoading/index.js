import React from 'react'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { isLoadingState, showLoadingState, hideLoadingState } from 'stores/App'

const useLoading = () => {
  const isLoading = useRecoilValue(isLoadingState)
  const resetLoading = useResetRecoilState(isLoadingState)
  const showLoading = useSetRecoilState(showLoadingState)
  const hideLoading = useSetRecoilState(hideLoadingState)

  const setLoading = React.useCallback(
    value => {
      if (value instanceof Boolean) {
        resetLoading()

        return
      }

      if (value) {
        showLoading()

        return
      }

      hideLoading()
    },
    [isLoading]
  )

  return {
    isLoading,
    setLoading
  }
}

export default useLoading
