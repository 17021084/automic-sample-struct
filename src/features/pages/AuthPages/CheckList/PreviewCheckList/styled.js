import styled, { css } from 'styled-components'
import { BaseTitle, BaseButton, BaseIcon } from 'atoms'
import { StepProgress } from 'molecules'
import { Progress, Modal } from 'rsuite'

export const Wrapper = styled.div`
  height: 90vh;
`
export const Title = styled(BaseTitle)``
export const LineProgress = styled(Progress.Line)``

export const Button = styled(BaseButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  ${props =>
    props.hide &&
    css`
       {
        visibility: hidden;
      }
    `};

  ${props =>
    props.finish &&
    css`
       {
        padding: 2px 10px;
      }
    `};
`
export const WrapperProgress = styled(StepProgress)`
  margin: 20px -20px;
`
export const WrapperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.secondary[6]};
  border-radius: 20px;
  width: 100%;
  padding: 5px;
`
export const Icon = styled(BaseIcon)``
export const WrapperModal = styled(Modal)`
  width: 480px;
  .rs-modal-header {
    padding: 0;
  }
  .rs-modal-content {
    padding: 10px;
    border-radius: 20px;
  }
  .rs-modal-header .rs-modal-header-close {
    display: none !important;
  }
`
export const Body = styled(Modal.Body)`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 20px;
  ::-webkit-scrollbar {
    width: 3px;
    height: 100px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 3px;
  }
`
