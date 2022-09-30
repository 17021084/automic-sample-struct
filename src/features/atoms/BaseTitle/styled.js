import styled from 'styled-components'

export const Wrapper = styled.div`
  color: ${props => props.theme.colors.secondary[2]};
  margin-vertical: 10px;
  ${props =>
    props.bold &&
    `
    font-weight: bold;
    display:  inline-block;
    `};
  ${props =>
    props.uppercase &&
    `
    text-transform: uppercase;
  `}
  ${props => props.light && `color: ${props.theme.colors.secondary[3]}`};

  ${props => props.H1 && `font-size: 24px`};
  ${props => props.H2 && `font-size: 20px`};
  ${props => props.H3 && `font-size: 18px`};
  ${props => props.H4 && `font-size: 16px`};
  ${props => props.H5 && `font-size: 14px`};
  ${props => props.H6 && `font-size: 12px`};
`
