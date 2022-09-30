import styled from 'styled-components'
import { BaseTitle } from 'atoms'

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  // justify-content: space-between;
`

export const TitleWrapper = styled(BaseTitle)`
  width: 40%;
`
export const ContentWrapper = styled(BaseTitle)`
  width: 60%;
  text-align: left;
`
