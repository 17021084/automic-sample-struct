import styled from 'styled-components'
import { BaseWrapper, BaseButton, BaseForm } from 'atoms'
export const ContainerWrapper = styled(BaseWrapper)`
  & div {
    display: flex;
    align-items: center;
  }
`
export const FilterWrapper = styled(BaseForm)`
  display: flex;
  align-items: center;
`
export const ButtonWrapper = styled(BaseButton)``
