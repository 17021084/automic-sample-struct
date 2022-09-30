import { useState, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const usePaginate = () => {
  const [activePage, setActivePage] = useState(1)
  const [displayLength, setDisplayLength] = useState(10)
  const [total, setTotal] = useState(0)
  const history = useHistory()
  const location = useLocation()

  const onChangePage = useCallback(
    (page, setLoading) => {
      if (setLoading) setLoading(true)
      setActivePage(page)
      history.push(location.pathname + '?page=' + page)
    },
    [activePage]
  )

  const onChangeLength = useCallback(
    (length, setLoading) => {
      if (setLoading) setLoading(true)
      setActivePage(1)
      setDisplayLength(length)
    },
    [displayLength]
  )

  return {
    activePage,
    displayLength,
    total,
    setTotal,
    onChangePage,
    onChangeLength
  }
}

export default usePaginate
