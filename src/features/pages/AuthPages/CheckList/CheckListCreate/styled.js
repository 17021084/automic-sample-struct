import styled from 'styled-components'
import {
  BaseThemeChecklist,
  BaseText,
  BaseTitle,
  BaseForm,
  BaseButton,
  BaseIcon,
  BaseImage
} from 'atoms'
import { InputGroup, RadioForm } from 'molecules'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`
export const WrapperContent = styled.div`
  width: 60%;
  padding: 0 20px;
  min-width: 560px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 40px auto;
  }
`
export const WrapperForm = styled.div`
  width: 35%;
  padding: 0 20px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 40px auto;
  }
`
export const Theme = styled(BaseThemeChecklist)``
export const Label = styled(BaseText)`
  margin: 20px 0;
`
export const Title = styled(BaseTitle)`
  margin: 10px 0;
`
export const ThemeBlock = styled.div`
  border-bottom: 2px solid ${props => props.theme.colors.secondary[6]};
  padding: 20px 0 40px;
`
export const FlexBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: calc(100vh - 200px);
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: none;
  & div {
    margin-right: 20px;
  }
`
export const Form = styled(BaseForm)`
  display: block;
  .rs-input-group {
    display: block;
  }
`
export const WrapperBlock = styled.div`
  display: block;
  margin: 20px 0;
`
export const Button = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    margin-right: 10px;
  }
`
export const WrapperItem = styled.div`
  display: flex;
  align-items: baseline;
  & div:first-child {
    width: 100px;
    margin-right: 10px;
  }
`
export const WrapperButton = styled.div`
  display: flex;
  margin: 20px auto;
  align-items: center;
  & > button {
    width: 45%;
    margin: 0 auto;
  }
`
export const Content = styled.div`
  font-weight: bold;
  word-wrap: break-word;
  width: 100%;
`
export const Icon = styled(BaseIcon)``

export const Input = styled(InputGroup)``
export const DisplayModeForm = styled(RadioForm)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const LoadingMore = styled(BaseImage)`
  height: 40px;
  margin: auto;
`
