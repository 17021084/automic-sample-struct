import React from 'react'
import {
  ContainerWrapper,
  LogoWrapper,
  MenuWrapper,
  UserWrapper,
  NavItems
} from './styled'
import PropTypes from 'prop-types'
import { ProfileBlock } from 'molecules'
import { useRecoilValue } from 'recoil'
import { globalUserState } from 'stores/profile/atom'
import { withNamespaces } from 'react-i18next'

const SideBar = ({ t, menuList, ...others }) => {
  const userState = useRecoilValue(globalUserState)
  return (
    <ContainerWrapper {...others}>
      <LogoWrapper></LogoWrapper>
      <MenuWrapper>
        {menuList.map((item, index) => (
          <NavItems key={index} strict={true} to={item.URL}>
            {t(item.NAME)}
          </NavItems>
        ))}
      </MenuWrapper>
      <UserWrapper>
        <ProfileBlock
          name={userState?.firstName || ''}
          subText={userState?.role || ''}
        />
      </UserWrapper>
    </ContainerWrapper>
  )
}

SideBar.propTypes = {
  children: PropTypes.node,
  t: PropTypes.any,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      URL: PropTypes.string,
      NAME: PropTypes.string
    })
  )
}

export default withNamespaces('menu')(React.memo(SideBar))
