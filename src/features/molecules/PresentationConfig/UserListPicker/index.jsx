import React, { useState, useCallback, useEffect } from 'react'
import { Wrapper } from './styled'
import PropTypes from 'prop-types'
import { useRequestManager } from 'hooks'
import { EndPoint } from 'config/api'
import { globalUserState } from 'stores/profile/atom'
import { useRecoilValue } from 'recoil'
import { withEmpty } from 'exp-value'

const UserListPicker = ({ ...others }) => {
  const [listUser, setListUser] = useState([])
  const admin = useRecoilValue(globalUserState)
  const { onGetExecute } = useRequestManager()

  const loadUser = useCallback(() => {
    setTimeout(() => {}, 3000)
  }, [listUser])

  useEffect(() => {
    async function execute() {
      const response = await onGetExecute(EndPoint.STAFFS, {
        params: {
          offset: 0,
          limit: 100,
          enterpriseId: admin.enterpriseId,
          status: 'active'
        }
      })
      if (response && response.length) {
        setListUser(
          response.map(user => {
            return {
              label:
                withEmpty('firstName', user) +
                ' ' +
                withEmpty('lastName', user),
              value: withEmpty('id', user)
            }
          })
        )
      }
    }
    execute()
  }, [])

  return <Wrapper data={listUser} {...others} block onOpen={loadUser} />
}

UserListPicker.propTypes = {
  others: PropTypes.any,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      id: PropTypes.string
    })
  )
}

export default React.memo(UserListPicker)
