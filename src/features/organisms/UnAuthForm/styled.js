import styled from 'styled-components'
import { BaseWrapper } from 'atoms'
import { BaseForm } from 'atoms'

export const ContainerWrapper = styled(BaseWrapper)``

export const FormWrapper = styled(BaseForm)`
  margin-top: 20px;
`

export const LinkWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary[1]};

    &:hover {
      color: ${props => props.theme.colors.primary};
      cursor: pointer;
    }
  }
`

export const ActionButtonWrapper = styled(BaseWrapper)`
  margin-top: 10px;
`
