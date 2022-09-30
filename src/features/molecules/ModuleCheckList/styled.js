import styled from 'styled-components'
import { BaseTitle, BaseButton, BaseIcon, BaseInput } from 'atoms'

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`
export const Module = styled.div`
  border: 2px solid ${props => props.theme.colors.secondary[6]};
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  margin: 20px auto;
`
export const Title = styled(BaseTitle)`
  width: 100%;
`

export const WrapperTop = styled.div``
export const WrapperContent = styled.div``
export const ButtonCreateSection = styled(BaseButton)`
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  display: block;
  text-align: center;
  background: ${props => props.theme.colors.background[0]};
`
export const Icon = styled(BaseIcon)``
export const ContainerSection = styled.div``
export const IconRemoveModule = styled(BaseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
`
export const SectionCount = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${props => props.theme.colors.tertiary};
  align-items: center;
  margin-bottom: -15px;
  cursor: pointer;
`
export const Collapse = styled.div`
  display: block;
  transition: ease-in 1s;
  height: auto;
  ${props => props.collapse && `display: none;`}
`

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
export const Input = styled(BaseInput)`
  ${props =>
    props.borderNone &&
    `border: none !important;    
    padding: 10px 0 !important;`}
  ${props => props.h2 && `font-size: 18px !important;`}
  ${props => props.h3 && `font-size: 14px !important;`}
  ${props => props.bold && `font-weight: 500 !important;`}
`
