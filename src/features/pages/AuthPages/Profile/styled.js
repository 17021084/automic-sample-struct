import styled from 'styled-components'
import { BaseItemGrid, BaseForm } from 'atoms'
import { FlexboxGrid } from 'rsuite'

export const ContainerWrapper = styled(FlexboxGrid)`
  flex: 1;
`

export const ColWrapper = styled(BaseItemGrid)`
  display: flex;
  flex-direction: column;
`

export const ButtonWrapper = styled.div`
  display: flex;
`

export const FormWrapper = styled(BaseForm)``
