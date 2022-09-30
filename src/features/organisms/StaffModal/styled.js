import styled from 'styled-components'
import { BaseModal, BaseForm } from 'atoms'

export const ModalWrapper = styled(BaseModal)``
export const FormWrapper = styled(BaseForm)``

export const EmailWrapper = styled.span`
  color: ${props => props.theme.colors.tertiary};
`
