import styled from 'styled-components'
import { Radio } from 'rsuite'

export const Wrapper = styled(Radio)`
  & label .rs-radio-wrapper .rs-radio-inner::before {
    background: ${props => props.theme.colors.secondary[6]};
  }
  &.rs-radio-checked .rs-radio-wrapper .rs-radio-inner {
    &::before {
      background: ${props => props.theme.colors.primary};
      border: 3px solid ${props => props.theme.colors.secondary[6]};
    }
    &::after {
      background: ${props => props.theme.colors.primary};
    }
  }
`
