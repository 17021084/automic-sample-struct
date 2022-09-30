import { InputPicker } from 'rsuite'
import { BaseImage } from 'atoms'
import styled, { css } from 'styled-components'

export const Wrapper = styled(InputPicker)`
  & a {
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 8px;
    min-width: 156px;
  }
`

export const ImageWrapper = styled(BaseImage)`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  ${props =>
    props.selected &&
    css`
      height: 25px;
      width: 25px;
    `}
`

export const TitleWrapper = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-left: 5px;
`
