import styled from 'styled-components'
import { Input } from 'rsuite'
export const Wrapper = styled(Input)`
  background: #ffffff;

  border: 1px solid ${props => props.theme.colors.secondary[5]};
  box-sizing: border-box;
  border-radius: 8px;
`
