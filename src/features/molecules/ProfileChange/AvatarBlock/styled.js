import styled from 'styled-components'
import { BaseImage, BaseUploadFile } from 'atoms'
export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const AvatarWrapper = styled(BaseImage)`
  height: 48px;
  width: auto;
  border-radius: 50%;
  margin-right: 20px;
`
export const UploaderWrapper = styled(BaseUploadFile)`
  & .rs-uploader-trigger button {
    color: ${props => props.theme.colors.tertiary};
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`
