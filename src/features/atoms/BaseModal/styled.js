import styled from 'styled-components'
import { Modal, Container } from 'rsuite'

export const Wrapper = styled(Container)`
  z-index: 99999;
  border-radius: 20px;
`
export const WrapperModal = styled(Modal)`
  width: 100%;

  .rs-modal-content {
    @media screen and (max-width: 980px) {
      margin: 10px;
      padding: 10px;
    }
    @media screen and (min-width: 980px) {
      max-width: 980px;
      margin: auto;
    }
  }
`
export const Body = styled(Modal.Body)`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: 100%;
  height: 100%;

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 3px;
  }
`
