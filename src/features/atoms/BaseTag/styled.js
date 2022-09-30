import styled, { css } from 'styled-components'
import { Tag } from 'rsuite'

export const Wrapper = styled(Tag)`
  ${props =>
    props.size &&
    css`
      font-size: ${props.size}px;
    `}
`
