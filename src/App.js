import { Loading } from 'atoms'
import Routes from 'config/routes'
import { createMemoryHistory } from 'history'
import { useLoading, useSmartPrototype, useToken } from 'hooks'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import 'rsuite/dist/styles/rsuite-default.css'

const App = props => {
  useSmartPrototype()

  const { isLoggedIn } = useToken()
  const { isLoading } = useLoading()

  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000} placement='top-right'>
      <React.Fragment>
        <BrowserRouter history={createMemoryHistory}>
          {isLoading ? <Loading /> : null}
          <Routes {...props} isLoggedIn={isLoggedIn} />
        </BrowserRouter>
      </React.Fragment>
    </ToastProvider>
  )
}

export default App
