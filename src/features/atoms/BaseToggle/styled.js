import { Toggle } from 'rsuite'
import styled from 'styled-components'

export const Wrapper = styled(Toggle)`
  &.rs-btn-toggle-checked {
    background: ${props => props.theme.colors.status[1]};
  }
`
