import { Header, Content, Footer, Sidebar } from 'rsuite'
import styled from 'styled-components'
import { PrivateHeader } from 'molecules'
import { BaseInputPicker } from 'atoms'

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const CenterWrapper = styled.div`
  display: block;
  margin: 0 10px;
  background: ${props => props.theme.colors.white};
  width: calc(100% - 270px);

  &::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: none;
`

export const HeaderWrapper = styled(Header)`
  margin: 0 -10px;
  padding: 20px 10px 0px 10px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;
  background: ${props => props.theme.colors.white};
  display: flex;
`
export const Breadcrumb = styled(PrivateHeader)`
  flex-grow: 1;
`
export const LanguageChoice = styled(BaseInputPicker)`
  height: 36px;
  width: 110px;
  & input {
    &:hover {
      cursor: pointer;
    }
  }
`

export const LeftSideBar = styled(Sidebar)`
  height: 100vh;
  min-width: 250px;
  background: ${props => props.theme.colors.secondary[6]};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  &.rs-sidebar {
    flex: unset !important;
    width: unset !important;
  }
`

export const ContentWrapper = styled(Content)`
  display: block;
  width: 100%;
  overflow: auto;
  margin: 10px;
`

export const FooterWrapper = styled(Footer)`
  margin: 0;
  padding: 0;
`
