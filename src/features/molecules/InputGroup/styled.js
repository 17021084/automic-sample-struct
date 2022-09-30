import styled, { css } from 'styled-components'
import { InputGroup, Input } from 'rsuite'

export const WrapperContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`
export const WrapperInputGroup = styled(InputGroup)`
  box-sizing: border-box;
  border-radius: 10px;
  border-color: ${props =>
    props.$isError
      ? props.theme.colors.error
      : props.theme.colors.primary[5]} !important;
`
export const WrapperInput = styled(Input)`
  &::placeholder {
    color: ${props => props.theme.colors.secondary[3]};
  }
  color: ${props => props.theme.colors.secondary[1]};
  font-weight: normal;
  font-style: normal;
  border: 0px;
`
export const WrapperAddon = styled(InputGroup.Addon)`
  background: transparent;
`
export const WrapperButton = styled(InputGroup.Button)`
  background: transparent;
  ${props =>
    props.disabled &&
    css`
      background: transparent;
    `}
`
