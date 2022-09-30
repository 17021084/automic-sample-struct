import styled from 'styled-components'
import { BaseImage, BaseButton } from 'atoms'
import { InputGroup } from 'molecules'

export const Wrapper = styled.div`
  flex: 1;
`

export const RowImageWrapper = styled(BaseImage)`
  width: 46px;
  height: 27px;
  border-radius: 4px;
`

export const LogoImageWrapper = styled(BaseImage)`
  height: 16x;
  width: 14px;
`

export const CellWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`

export const ModalWrapper = styled.div`
  display: block;
  position: fixed;
  z-index: 999999;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-animation-name: fadeIn;
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s;
`

export const ModalContentWrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 999;
  width: 115px;
  height: 40px;
  padding: 5px;
  justify-content: center;
  background: #ffffff;
  border-radius: 8px;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s;
`

export const ModalInputWrapper = styled(InputGroup)`
  width: 42px;
  height: 28px;
  margin: 0;
`
export const ModalButtonWrapper = styled(BaseButton)`
  width: 70px;
  height: 28px;
  margin: 0 0 0 8px;
  padding: 5px;
`
