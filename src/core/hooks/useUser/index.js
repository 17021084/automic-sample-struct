import React from 'react'
import useStorage from '../useStorage'

const useUser = () => {
  const [user, setUser] = React.useState(null)
  const { getValue, saveValue } = useStorage()

  const onGetUser = React.useCallback(async () => {
    const u = await getValue(process.env.SECRET_USER_KEY)

    setUser(u)
  }, [])

  const saveUser = React.useCallback(value => {
    setUser(value)
    saveValue(process.env.SECRET_USER_KEY, value)
  }, [])

  React.useEffect(onGetUser, [])

  return { user, saveUser }
}

export default useUser
