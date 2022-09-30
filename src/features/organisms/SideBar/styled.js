import styled from 'styled-components'
import { BaseCotami } from 'atoms'
import { NavLink } from 'react-router-dom'

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  text-align: center;
`

export const LogoWrapper = styled(BaseCotami)``

export const MenuWrapper = styled.div`
  padding: 20px 0 0;
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const NavItems = styled(NavLink)`
  font-size: 15px;
  padding: 5px 0;
  margin: 10px 0;
  color: ${props => props.theme.colors.secondary[2]};
  &.active {
    color: ${props => props.theme.colors.primary};
  }
  &:focus {
    text-decoration: none;
  }
  &:hover {
    border-radius: 10px;
    text-decoration: none;
  }
`

export const UserWrapper = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 5vh;
  left: 0;
`
