import styled from 'styled-components'
import { Modal } from 'rsuite'
import RadioForm from '../../RadioForm'
import UserListPicker from '../UserListPicker'

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
  ${props => props.showListUser && `height: 500px;`}
`
export const ModalBody = styled(Modal.Body)`
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
export const TargetType = styled(RadioForm)``
export const SelectUser = styled(UserListPicker)``
export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 5px 20px;
`
