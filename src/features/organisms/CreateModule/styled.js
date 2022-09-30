import styled from 'styled-components'
import { BaseButton, BaseTitle, BaseIcon } from 'atoms'
import { ModuleCheckList } from 'molecules'

export const Wrapper = styled.div``
export const WrapperModule = styled(ModuleCheckList)``

export const Title = styled(BaseTitle)``

export const Icon = styled(BaseIcon)``

export const HeaderModule = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ModuleCount = styled.div`
  display: flex;
  color: ${props => props.theme.colors.tertiary};
  margin-bottom: -15px;
  align-items: center;
  button {
    padding: 5px;
    border-radius: 20px;
    margin-left: 10px;
  }
`
export const Button = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    margin-right: 10px;
  }
`
