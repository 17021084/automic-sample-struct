import styled from 'styled-components'
import { BaseTitle } from 'atoms'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const WrapperContent = styled.div``

export const WrapperStep = styled.div`
  background: ${props => props.theme.colors.secondary[6]};
  color: ${props => props.theme.colors.primary};
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  border-radius: 50%;
  margin: 15px;
  & span:first-child {
    font-size: 32px;
  }
`
export const Span = styled.span``
export const Title = styled(BaseTitle)``
