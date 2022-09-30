import styled, { css } from 'styled-components'
import { RadioGroup } from 'rsuite'
import { BaseInput, BaseIcon } from 'atoms'

export const Wrapper = styled(RadioGroup)`
  ${props =>
    props.block &&
    css`
      & .rs-radio-inline {
        display: block;
      }
    `};
`
export const WrapperItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Checkbox = styled.div`
  border: 1px solid ${props => props.theme.colors.secondary[4]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-left: 10px;
`
export const Input = styled(BaseInput)`
  border: none !important;
`
export const Icon = styled(BaseIcon)``
