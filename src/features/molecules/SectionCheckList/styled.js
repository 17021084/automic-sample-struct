import styled from 'styled-components'
import {
  BaseTitle,
  BaseUploadFile,
  BaseInput,
  BaseButton,
  BaseIcon
} from 'atoms'
import { BaseCheckPicker, BaseInputPicker } from 'atoms'
import CustomCheckbox from '../CustomCheckbox'
import CustomRadio from '../CustomRadio'

export const Wrapper = styled.div`
  border-top: 2px solid ${props => props.theme.colors.secondary[6]};
  width: 100%;
  padding: 20px 0;
  margin: 20px auto;
`
export const Title = styled(BaseTitle)`
  width: 100%;
`

export const WrapperTop = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & div {
    margin-right: 10px;
  }
`
export const WrapperContent = styled.div``

export const Drag = styled(BaseUploadFile)`
  min-height: 150px;
  width: 150px;
  margin: auto;
  .rs-uploader-trigger-btn {
    height: 100%;
    width: 100% !important;
  }
  & .rs-uploader-trigger {
    height: 150px;
  }
  .rs-uploader-trigger-disabled {
    opacity: 1;
  }
`
export const DragIcon = styled(BaseIcon)`
  justify-content: center;
  align-items: center;
`
export const CheckPicker = styled(BaseCheckPicker)`
  font-weight: bold;
  &.rs-picker-check {
    a {
      padding: 2px 5px !important;
      background: ${props => props.theme.colors.secondary[6]} !important;
      & .rs-picker-toggle-caret {
        top: 2px !important;
      }
      & .rs-picker-toggle-value {
        color: ${props => props.theme.colors.primary} !important;
        font-weight: bold !important;
      }
      & .rs-picker-toggle-clean {
        top: 2px !important;
      }
    }
  }
`

export const InputPicker = styled(BaseInputPicker)`
  & .rs-picker-toggle {
    height: 25px !important;
    padding: 2px 5px !important;
    background: ${props => props.theme.colors.secondary[6]} !important;
    & .rs-picker-toggle-caret {
      top: 2px !important;
    }
    .rs-picker-toggle-value {
      color: ${props => props.theme.colors.primary} !important;
      font-weight: bold !important;
    }
    .rs-picker-toggle-clean {
      top: 2px !important;
    }
  }
  & .rs-picker-tag-wrapper {
    height: 25px !important;
    input {
      padding: 2px !important;
    }
  }
`
export const CheckBox = styled(CustomCheckbox)`
  margin-left: -10px;
`
export const Input = styled(BaseInput)`
  width: 100%;
  ${props =>
    props.borderNone &&
    `border: none !important;    
    padding: 10px 0 !important;`}
  ${props => props.h2 && `font-size: 18px !important;`}
  ${props => props.h3 && `font-size: 14px !important;`}
`
export const Radio = styled(CustomRadio)`
  width: 100%;
  display: block !important;
  margin-left: -10px;
  & .rs-radio {
    margin-left: unset;
  }
`
export const Block = styled.div`
  margin: 5px 0;
`
export const Button = styled(BaseButton)`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 0;
  border-radius: 5px;
`
export const Icon = styled(BaseIcon)`
  &svg:hover {
    background: ${props => props.theme.colors.secondary[3]};
  }
`
export const WrapperRowButton = styled.div`
  display: flex;
  background: ${props => props.theme.colors.secondary[6]};
  border-radius: 5px;
  & > button:first-child {
    border-radius: 5px 0 0 5px !important;
    border-right: 1px solid ${props => props.theme.colors.secondary[3]};
  }
`
