import React from 'react'
import PropTypes from 'prop-types'
import {
  ContainerWrapper,
  AvatarWrapper,
  ButtonWrapper,
  UserWrapper
} from './styled'
import { BaseTitle } from 'atoms'
import { IMAGES } from 'assets'
import { useHistory } from 'react-router-dom'
import Routers from 'utils/Routers'

const ProfileBlock = ({
  // imageUrl,
  //  name,
  //  role,
  //  onClick,
  name = 'Sizuka',
  subText = 'admin',
  canNavigate = true,
  ...others
}) => {
  const history = useHistory()
  return (
    <ContainerWrapper
      onClick={() =>
        canNavigate && history.push(Routers.NORMAL_ADMIN.PROFILE.URL)
      }
      canNavigate={canNavigate}
      {...others}
    >
      <AvatarWrapper source={IMAGES.AVATAR} />
      <UserWrapper>
        <BaseTitle bold h5>
          {name}
        </BaseTitle>
        <BaseTitle h6> {subText}</BaseTitle>
      </UserWrapper>
      {canNavigate && <ButtonWrapper> {'>'} </ButtonWrapper>}
    </ContainerWrapper>
  )
}

ProfileBlock.propTypes = {
  onClick: PropTypes.func,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  subText: PropTypes.string,
  role: PropTypes.string,
  canNavigate: PropTypes.bool
}

export default React.memo(ProfileBlock)
