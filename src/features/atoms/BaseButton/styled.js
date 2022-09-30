import styled, { css } from 'styled-components'
import { Button } from 'rsuite'

export const Wrapper = styled(Button)`
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${props => props.theme.colors.secondary[6]};
  color: ${props => props.theme.colors.secondary[2]};
  ${props => props.fluid && 'width: 100%;'}
  ${props => props.uppercase && 'text-transform: uppercase;'}
  ${props => props.bold && 'font-weight: bold;'}
  ${props =>
    props.blue &&
    css`
      color: ${props => props.theme.colors.tertiary};
    `}
  
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.secondary[6]};
    `};
  ${props =>
    props.secondary &&
    css`
      background: ${props => props.theme.colors.secondary[6]};
      color: ${props => props.theme.colors.primary};
    `};

  ${props =>
    props.tertiary &&
    css`
      border: 2px dashed ${props => props.theme.colors.secondary[4]};
      box-sizing: border-box;
      border-radius: 20px;
      background: ${props => props.theme.colors.secondary[7]};
      color: ${props => props.theme.colors.secondary[3]};
    `};
  ${props =>
    props.dashed &&
    `border: 1px dashed ${props.theme.colors.secondary[3]} !important;`};
`
