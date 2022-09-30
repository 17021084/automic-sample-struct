import { BaseItemGrid, BaseWrapper } from 'atoms'
import { Container, Content } from 'rsuite'
import styled from 'styled-components'

export const BodyWrapper = styled(Content)`
  display: flex;
`

export const HeaderWrapper = styled.div`
  padding-top: 5vh;
`

export const GridItem = styled(BaseItemGrid)`
  flex: 1;
  display: flex;
  margin-top: 5vh;
`

export const FooterWrapper = styled(BaseWrapper)`
  margin-top: 15px;
`

export const WrapperContainer = styled(Container)`
  width: 100%;
  height: 100vh;
  flex: 1;
  background: ${props => props.theme.colors.background};
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
