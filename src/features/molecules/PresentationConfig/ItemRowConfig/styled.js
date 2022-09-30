import styled from 'styled-components'
import { BaseButton, BaseIcon, BaseInput, BaseText } from 'atoms'

export const Wrapper = styled.div`
  display: flex;
`
export const Row = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors.border};
  border-collapse: collapse;
  cursor: pointer !important;
  ${props =>
    props.isDragging &&
    `
td {
   padding: 2px 10px;
   button {
     right: 0;
   }
}
    `}
`
export const Cell = styled.td`
  border-collapse: collapse;
  padding: 2px;
  text-align: left;
`
export const Button = styled(BaseButton)`
  cursor: grab;
`
export const Icon = styled(BaseIcon)``
export const Input = styled(BaseInput)`
  border: none !important;
  padding: 5px 0 !important;
  color: ${props => props.theme.colors.tertiary} !important;
  width: 50px;
  text-align: center;
`
export const Text = styled(BaseText)``
