import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Routers from 'utils/Routers'
import { DisplayField, AvatarBlock } from 'molecules/ProfileChange'
import { ContainerWrapper, ColWrapper } from './styled'
import { BaseButton } from 'atoms'
import { useHistory } from 'react-router-dom'
import { useToken } from 'hooks'

import { useRecoilState } from 'recoil'
import { globalUserState } from 'stores/profile/atom'

const Profile = ({ ...others }) => {
  const history = useHistory()
  const goToPage = useCallback(route => history.push(route), [])
  const [userState, setUserState] = useRecoilState(globalUserState)
  const { clearToken } = useToken()
  return (
    <ContainerWrapper justify='start' {...others}>
      <ColWrapper colspan={9}>
        <AvatarBlock hasUpload={false} />
        <DisplayField title={'Company id'} content={'B0001'} />
        <DisplayField title={'Company name'} content={'Its Global'} />
        <DisplayField title={'Role'} content={'staff'} />
        <DisplayField
          title={'First name'}
          content={userState?.firstName || ''}
        />
        <DisplayField title={'Last Name'} content={userState?.lastName || ''} />
        <DisplayField title={'Email'} content={userState?.email || ''} />
        <br />
        <BaseButton
          primary
          bold
          onClick={() => goToPage(Routers.NORMAL_ADMIN.PROFILE.CHILD[1].URL)}
        >
          Update profile
        </BaseButton>
        <BaseButton
          secondary
          bold
          onClick={() => goToPage(Routers.NORMAL_ADMIN.PROFILE.CHILD[0].URL)}
        >
          Change password
        </BaseButton>
        <BaseButton
          bold
          onClick={async () => {
            setUserState({})
            await clearToken()
            goToPage(Routers.LOGIN)
          }}
        >
          Logout
        </BaseButton>
      </ColWrapper>
    </ContainerWrapper>
  )
}

Profile.propTypes = {
  children: PropTypes.node
}

export default React.memo(Profile)
