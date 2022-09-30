import styled, { css } from 'styled-components'
import BaseImage from '../BaseImage'

export const Image = styled(BaseImage)`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  object-fit: contain;
  border: 2px solid ${props => props.theme.colors.secondary[6]};
  margin-top: 20px;
  background: ${props => props.theme.colors.secondary[7]};
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  width: fit-content;
  cursor: pointer;
  ${props =>
    props.check &&
    css`
      img {
        border: 2px solid ${props => props.theme.colors.primary} !important;
      }
      p {
        background: ${props => props.theme.colors.primary} !important;
        color: ${props => props.theme.colors.white} !important;
      }
    `};
  &:hover {
    img {
      border: 2px solid ${props => props.theme.colors.primary} !important;
    }
    p {
      background: ${props => props.theme.colors.primary} !important;
      color: ${props => props.theme.colors.white} !important;
    }
  }
`
export const Title = styled.p`
  width: fit-content;
  padding: 2px 9px;
  margin-top: 10px;
  border-radius: 4px;
`
