import axios from 'axios'
import React from 'react'
import useToken from '../useToken'
import useLoading from '../useLoading'
import useAlert from '../useAlert/index'
import { withNull } from 'exp-value'

const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 5000
})

const useRequestManager = () => {
  const { setLoading } = useLoading()
  const { token, onResetToken } = useToken()
  const { showError } = useAlert()
  const [status, setStatus] = React.useState(null)

  const headers = React.useMemo(
    () => ({
      Authorization: `Bearer ${token}`
    }),
    [token]
  )

  const onGetExecute = React.useCallback(
    (url, entity = {}, disableLoading = false) => {
      const execute = async () => {
        disableLoading ? setLoading(false) : setLoading(true)
        try {
          const { data } = await instance.get(url, { headers, ...entity })
          setLoading(false)
          return data
        } catch (error) {
          setStatus(withNull('response.status', error))
          setLoading(false)
          showError(withNull('response.data.message', error))
        }
      }

      return execute()
    },
    [headers]
  )

  const onPostExecute = React.useCallback(
    (url, entity = {}, hasHeader = true, disableLoading = false) => {
      const execute = async () => {
        disableLoading ? setLoading(false) : setLoading(true)
        try {
          const { data } = await instance.post(
            url,
            entity,
            hasHeader ? { headers } : {}
          )
          setLoading(false)
          return data
        } catch (error) {
          setStatus(withNull('response.status', error))
          setLoading(false)
          showError(withNull('response.data.message', error))
        }
      }
      return execute()
    },
    [headers]
  )

  const onPatchExecute = React.useCallback(
    (url, entity = {}, disableLoading = false) => {
      const execute = async () => {
        disableLoading ? setLoading(false) : setLoading(true)
        try {
          const { data } = await instance.patch(url, entity, { headers })
          setLoading(false)
          return data
        } catch (error) {
          setStatus(withNull('response.status', error))
          setLoading(false)
          showError(withNull('response.data.message', error))
        }
      }
      return execute()
    },
    [headers]
  )

  const onPutExecute = React.useCallback(
    (url, entity = {}, disableLoading = false) => {
      const execute = async () => {
        disableLoading ? setLoading(false) : setLoading(true)
        try {
          const { data } = await instance.post(url, entity, {
            headers
          })
          setLoading(false)
          return data
        } catch (error) {
          setStatus(withNull('response.status', error))
          setLoading(false)
        }
      }
      return execute()
    },
    [headers]
  )

  const onDeleteExecute = React.useCallback(
    (url, entity = {}, disableLoading = false) => {
      const execute = async () => {
        disableLoading ? setLoading(false) : setLoading(true)
        try {
          const { data } = await instance.delete(url, entity, {
            headers
          })
          setLoading(false)
          return data
        } catch (error) {
          setStatus(withNull('response.status', error))
          setLoading(false)
        }
      }
      return execute()
    },
    [headers]
  )

  const onStatusHandler = React.useCallback(() => {
    const execute = async () => {
      switch (status) {
        case 400:
          break
        case 401:
          if (token) {
            await onResetToken()
          }
          break
        default:
          break
      }
    }

    if (status) execute()
  }, [status])

  React.useEffect(onStatusHandler, [status])

  return {
    onGetExecute,
    onPostExecute,
    onPutExecute,
    onDeleteExecute,
    onPatchExecute
  }
}

export default useRequestManager
