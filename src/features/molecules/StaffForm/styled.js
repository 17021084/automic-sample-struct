import styled from 'styled-components'
import { RadioForm } from 'molecules'
import {
  BaseItemGrid,
  BaseWrapper,
  BaseTitle,
  BaseToggle,
  BaseForm,
  BaseTextArea
} from 'atoms'
import { FlexboxGrid } from 'rsuite'
import { InputBlock } from 'molecules/ProfileChange'

export const FlexGridWrapper = styled(FlexboxGrid)`
  flex: 1;
`

export const ColWrapper = styled(BaseItemGrid)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const ContainerWrapper = styled(BaseForm)``

export const InputWrapper = styled(InputBlock)``

export const BlockFieldWrapper = styled(BaseWrapper)`
  margin-top: 10px;
  margin-bottom: 20px;
`
export const TitleWrapper = styled(BaseTitle)`
  margin-bottom: 10px;
`

export const ToggleWrapper = styled(BaseToggle)`
  width: 50px;
`

export const ButtonGroup = styled(BaseWrapper)`
  display: flex;
  flex-direction: row-reverse;
`

export const RadioFormWrapper = styled(RadioForm)``
export const TextAreaWrapper = styled(BaseTextArea)``
