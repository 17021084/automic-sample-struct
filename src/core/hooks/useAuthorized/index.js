import React from 'react'
import useToken from '../useToken'
import { useHistory } from 'react-router-dom'
import { Routers } from 'utils'

const useAuthorized = () => {
  const { token } = useToken()
  const history = useHistory()

  const onGetToken = React.useCallback(() => {
    if (token) return

    history.push(Routers.LOGIN)
  }, [token])

  React.useEffect(onGetToken, [token])
}

export default useAuthorized
