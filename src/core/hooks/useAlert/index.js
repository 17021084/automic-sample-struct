import React from 'react'
import { useToasts } from 'react-toast-notifications'

const useAlert = () => {
  const { addToast } = useToasts()

  const showError = React.useCallback(
    (message, callback = null) =>
      addToast(message, {
        appearance: 'error',
        autoDismiss: true,
        onDismiss: () => {
          if (callback instanceof Function) callback()
        }
      }),
    []
  )

  const showSuccess = React.useCallback(
    (message, callback = null) =>
      addToast(message, {
        appearance: 'success',
        autoDismiss: true,
        onDismiss: () => {
          if (callback instanceof Function) callback()
        }
      }),
    []
  )

  const showWarning = React.useCallback(
    (message, autoDismiss = true, callback = null) =>
      addToast(message, {
        appearance: 'warning',
        autoDismiss: autoDismiss,
        onDismiss: () => {
          if (callback instanceof Function) callback()
        }
      }),
    []
  )

  const showMessage = React.useCallback(
    (message, callback = null) =>
      addToast(message, {
        appearance: 'info',
        autoDismiss: true,
        onDismiss: () => {
          if (callback instanceof Function) callback()
        }
      }),
    []
  )

  return {
    showSuccess,
    showError,
    showWarning,
    showMessage
  }
}

export default useAlert
