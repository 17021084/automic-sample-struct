import styled, { css } from 'styled-components'
import {
  BaseTable,
  BaseCell,
  BasePagination,
  BaseHeaderCell,
  BaseColumn,
  BaseImage,
  BaseTitle,
  BaseToggle
} from 'atoms'

import RadioForm from '../RadioForm'

export const Wrapper = styled.div`
  position: relative;
`
export const HrWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 20px;
  border-bottom: 1px solid #f2f2f5;
  z-index: 7;
  width: 100%;
`
export const PaginationWrapper = styled(BasePagination)``
export const TableWrapper = styled(BaseTable)``
export const CellWrapper = styled(BaseCell)`
  padding: 0px;
  text-align: left;
  ${props =>
    props.hoverPointer &&
    `&:hover {
    cursor: pointer;
  }`}
  ${props =>
    props.isAvatar &&
    css`
      & .rs-table-cell-content {
        padding-top: 0;
        padding-bottom: 0;
      }
    `}

  ${props =>
    props.isCheckbox &&
    css`
      & .rs-table-cell-content {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `};
`

export const ActionCellWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`

export const ColumnWrapper = styled(BaseColumn)`
  padding-left: 0px;
  & .rs-table-cell-content {
    padding-left: 0px;
  }
`
export const HeaderCellWrapper = styled(BaseHeaderCell)`
  width: 100%;
  & .rs-table-cell-content {
    padding: 0px;
  }
`

export const ImageCellWrapper = styled(BaseImage)`
  height: 16x;
  width: 14px;
`

export const RadioCellWrapper = styled(RadioForm)``

export const ToggleCellWrapper = styled(BaseToggle)``

export const DateTimeCellWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`

export const MainHeaderCellWrapper = styled(BaseTitle)`
  flex: 1;
  height: 50%;
`
export const SubHeaderWrapper = styled.div`
  padding-top: 10px;
  height: 50%;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.primary};
  ${props =>
    props.firstCol &&
    css`
      color: ${props.theme.colors.secondary[2]};
      font-weight: 700;
    `};
`
export const CustomizeColorCell = styled.span`
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};
`
export const RadioGroup = styled(RadioForm)``
