import styled from 'styled-components'

export const Wrapper = styled.div`
  color: ${props => props.theme.colors.secondary[1]};
  ${props =>
    props.bold &&
    `
    color: ${props.theme.colors.secondary[0]};
    font-weight: bold;
    `};

  ${props =>
    props.link &&
    `
    color: ${props.theme.colors.blue};
    cursor: pointer;
    `};
  ${props =>
    props.uppercase &&
    `
    text-transform: uppercase;
  `}
`
