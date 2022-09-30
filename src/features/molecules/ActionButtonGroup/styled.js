import styled, { css } from 'styled-components'
import { BaseImage, BaseButton, BaseWrapper } from 'atoms'

export const ContainerWrapper = styled(BaseWrapper)`
  justify-items: center;
  align-items: center;
  margin-top: -13px;
`

export const IconWrapper = styled(BaseImage)`
  margin-right: 20px;
  ${props =>
    props.btnIcon &&
    css`
      margin-right: 0;
    `}
  &:hover {
    cursor: pointer;
  }
`

export const ButtonWrapper = styled(BaseButton)``
