import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Routers from 'utils/Routers'
import { ContainerWrapper, ColWrapper, FormWrapper } from '../styled'
import { InputBlock } from 'molecules/ProfileChange'
import { useHistory } from 'react-router-dom'
import { BaseButton, BaseIcon } from 'atoms'
import { modifyPropsOfState, trimStringFieldOfObject } from 'utils/Helpers'
import validateModel from './validateModel'
import { useRequestManager, useToken, useAlert } from 'hooks'
import { EndPoint } from 'config/api'
import { globalUserState } from 'stores/profile/atom'
import { useSetRecoilState } from 'recoil'

const UpdatePassword = ({ ...others }) => {
  const history = useHistory()
  const [showPassword, setShowPassword] = useState(false)
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showPasswordCf, setShowPasswordCf] = useState(false)
  const goToPage = useCallback(route => history.push(route), [])
  const { clearToken } = useToken()
  const { onPostExecute } = useRequestManager()
  const { showSuccess } = useAlert()
  const setUserState = useSetRecoilState(globalUserState)

  const [data, setData] = useState({
    oldPassword: '',
    password: '',
    cfPassword: ''
  })
  const [error, setError] = useState({
    oldPassword: '',
    password: '',
    cfPassword: ''
  })

  const handleUpdatePassword = useCallback(async (data) => {
    const submitData = trimStringFieldOfObject({
      oldPassword: data.oldPassword,
      newPassword: data.password
    })
    const response = await onPostExecute(
      EndPoint.ADMIN_RESET_PASSWORD,
      submitData
    )
    if (response) {
      setUserState({})
      await clearToken()
      showSuccess('Update Successfully')
      goToPage(Routers.LOGIN)
    }
  }, [])

  const handleInput = useCallback(
    (name, value) => {
      modifyPropsOfState(error, setError, name, '')
      modifyPropsOfState(data, setData, name, value)
    },
    [data]
  )
  const validateData = useCallback(
    err => {
      let newError = { ...error }
      if (data['cfPassword'] !== data['password']) {
        newError['cfPassword'] = 'Confirm password is not match password'
      }
      for (const [key, value] of Object.entries(err)) {
        newError[key] = value
      }
      setError(newError)
    },
    [error]
  )

  return (
    <ContainerWrapper justify='start' {...others}>
      <ColWrapper colspan={9}>
        <FormWrapper
          formValue={data}
          model={validateModel}
          onCheck={validateData}
          onSubmit={()=>handleUpdatePassword(data)}
        >
          <InputBlock
            title='Old password'
            onChange={value => handleInput('oldPassword', value)}
            RightSide={{
              onClick: () => setShowOldPassword(!showOldPassword),
              icon: <BaseIcon icon='eye' />
            }}
            placeholder='Old Password'
            type={showOldPassword ? 'text' : 'password'}
            value={data['oldPassword']}
            helpText={error['oldPassword']}
            isError={!error['oldPassword'] ? false : true}
          />

          <InputBlock
            title='New password'
            onChange={value => handleInput('password', value)}
            RightSide={{
              onClick: () => setShowPassword(!showPassword),
              icon: <BaseIcon icon='eye' />
            }}
            placeholder='Password'
            type={showPassword ? 'text' : 'password'}
            value={data['password']}
            helpText={error['password']}
            isError={!error['password'] ? false : true}
          />

          <InputBlock
            title='Confirm password'
            onChange={value => handleInput('cfPassword', value)}
            RightSide={{
              onClick: () => setShowPasswordCf(!showPasswordCf),
              icon: <BaseIcon icon='eye' />
            }}
            value={data['cfPassword']}
            placeholder='Confirm Password'
            type={showPasswordCf ? 'text' : 'password'}
            helpText={error['cfPassword']}
            isError={!error['cfPassword'] ? false : true}
          />

          <ContainerWrapper justify='space-around'>
            <ColWrapper colspan={8}>
              <BaseButton
                secondary
                bold
                onClick={() => goToPage(Routers.NORMAL_ADMIN.PROFILE.URL)}
              >
                Cancel
              </BaseButton>
            </ColWrapper>
            <ColWrapper colspan={12}>
              <BaseButton
                type='submit'
                primary
                bold
              >
                Update Password
              </BaseButton>
            </ColWrapper>
          </ContainerWrapper>
        </FormWrapper>
      </ColWrapper>
    </ContainerWrapper>
  )
}

UpdatePassword.propTypes = {
  children: PropTypes.node
}

export default React.memo(UpdatePassword)
