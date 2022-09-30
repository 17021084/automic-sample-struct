import styled, { css } from 'styled-components'
import { BaseWrapper, BaseImage } from 'atoms'

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${props => props.theme.colors.white};
  margin: auto 10px;
  height: 8vh;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  ${props =>
    props.canNavigate &&
    css`
      &:hover {
        cursor: pointer;
        box-shadow: 1px 1px 1px 1px #fffa;
      }
    `}
`

export const AvatarWrapper = styled(BaseImage)`
  height: 5vh;
  width: auto;
  border-radius: 50%;
`
export const UserWrapper = styled.div`
  text-align: left;
  width: 100%;
  margin-left: 15px;
`

export const ButtonWrapper = styled(BaseWrapper)``
