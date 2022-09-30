import React, { useState, useCallback } from 'react'
import { Wrapper, NameWrapper } from './styled'
import { UnAuthForm } from 'organisms'
import { BaseIcon } from 'atoms'
import { InputGroup } from 'molecules'
import { modifyPropsOfState } from 'utils/Helpers'
import validateModel from './validateModel'
import { useHistory } from 'react-router-dom'
import { Routers } from 'utils'
import { useRequestManager, useAlert } from 'hooks'
import { EndPoint } from 'config/api'

const Register = () => {
  const { showSuccess } = useAlert()
  const history = useHistory()
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordCf, setShowPasswordCf] = useState(false)
  const { onPostExecute } = useRequestManager()
  const [data, setData] = useState({
    companyName: '',
    businessArea: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    cfPassword: ''
  })
  const [error, setError] = useState({
    companyName: '',
    businessArea: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    cfPassword: ''
  })

  const handleRegister = async () => {
    const response = await onPostExecute(EndPoint.REGISTER_API, data, false)
    if (response) {
      showSuccess('Register Successfully')
      goToPage(Routers.LOGIN)
    }
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
        formTitle={'Register'}
        primaryBtn={{
          name: 'Register',
          onClick: handleRegister
        }}
        secondaryBtn={{
          name: 'Login',
          onClick: () => goToPage(Routers.LOGIN)
        }}
        formValue={data}
        model={validateModel}
        onCheck={validateData}
        onSubmit={handleRegister}
      >
        <InputGroup
          placeholder='Company Name'
          LeftSide={<BaseIcon icon='building-o' />}
          onChange={value => handleInput('companyName', value)}
          value={data['companyName']}
          helpText={error['companyName']}
          isError={!error['companyName'] ? false : true}
        />
        <InputGroup
          placeholder='Business areas'
          LeftSide={<BaseIcon icon='wpforms' />}
          onChange={value => handleInput('businessArea', value)}
          value={data['businessArea']}
          helpText={error['businessArea']}
          isError={!error['businessArea'] ? false : true}
        />
        <InputGroup
          placeholder='Email'
          LeftSide={<BaseIcon icon='envelope-o' />}
          onChange={value => handleInput('email', value)}
          value={data['email']}
          helpText={error['email']}
          isError={!error['email'] ? false : true}
        />

        <NameWrapper fluid>
          <InputGroup
            placeholder='First Name'
            onChange={value => handleInput('firstName', value)}
            value={data['firstName']}
            helpText={error['lastName']}
            isError={!error['lastName'] ? false : true}
          />
          {'　'}
          <InputGroup
            placeholder='Last Name'
            onChange={value => handleInput('lastName', value)}
            value={data['lastName']}
            helpText={error['firstName']}
            isError={!error['firstName'] ? false : true}
          />
        </NameWrapper>

        <InputGroup
          onChange={value => handleInput('password', value)}
          LeftSide={<BaseIcon icon='lock' />}
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

export default Register
