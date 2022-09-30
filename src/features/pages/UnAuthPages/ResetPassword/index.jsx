import React, { useState, useCallback } from 'react'
import { Wrapper } from './styled'
import { UnAuthForm } from 'organisms'
import { BaseIcon } from 'atoms'
import { InputGroup } from 'molecules'
import validateModel from './validateModel'
import { modifyPropsOfState } from 'utils/Helpers'
import { useHistory, useParams } from 'react-router-dom'
import { Routers } from 'utils'

const ResetPassword = () => {
  const { token } = useParams()
  const history = useHistory()
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordCf, setShowPasswordCf] = useState(false)
  const [data, setData] = useState({
    password: '',
    cfPassword: ''
  })
  const [error, setError] = useState({
    password: '',
    cfPassword: ''
  })
  const handleResetPassword = () => {
    console.log('submit data', data)
    console.log('token data', token)
  }

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

  const goToPage = useCallback(route => history.push(route), [])

  return (
    <Wrapper>
      <UnAuthForm
        formTitle={'Reset password'}
        primaryBtn={{
          name: 'Reset',
          onClick: handleResetPassword
        }}
        secondaryBtn={{
          name: 'Forgot Password',
          onClick: () => goToPage(Routers.FORGOT_PASSWORD)
        }}
        formValue={data}
        model={validateModel}
        onCheck={validateData}
        onSubmit={handleResetPassword}
      >
        <InputGroup
          LeftSide={<BaseIcon icon='lock' />}
          RightSide={{
            onClick: () => setShowPassword(!showPassword),
            icon: <BaseIcon icon='eye' />
          }}
          placeholder='New Password'
          type={showPassword ? 'text' : 'password'}
          name='password'
          onChange={value => handleInput('password', value)}
          value={data['password']}
          helpText={error['password']}
          isError={!error['password'] ? false : true}
        />

        <InputGroup
          onChange={value => handleInput('cfPassword', value)}
          LeftSide={<BaseIcon icon='lock' />}
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
      </UnAuthForm>
    </Wrapper>
  )
}

export default ResetPassword
