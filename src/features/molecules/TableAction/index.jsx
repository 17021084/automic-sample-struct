import React from 'react'
import PropTypes from 'prop-types'
import {
  TableWrapper,
  CellWrapper,
  HeaderCellWrapper,
  Wrapper,
  ColumnWrapper,
  PaginationWrapper,
  MainHeaderCellWrapper,
  SubHeaderWrapper,
  HrWrapper,
  ActionCellWrapper,
  ImageCellWrapper,
  RadioCellWrapper,
  ToggleCellWrapper,
  DateTimeCellWrapper,
  CustomizeColorCell,
  RadioGroup
} from './styled'
import { Constant } from 'utils'
import ActionButtonGroup from '../ActionButtonGroup'
import { BaseTag } from 'atoms'
import moment from 'moment'
import { setColorViaValue } from 'utils/Helpers'
import { useTheme } from 'styled-components'

const TableAction = ({
  hasPaginate = true,
  hasSummary = false,
  paginateProps,
  data,
  columns,
  ...others
}) => {
  const theme = useTheme()
  const _renderCell = React.useCallback((type, id, rowData, others) => {
    const {
      ACTION_BUTTON_GROUP,
      IMAGE,
      RADIO_GROUP,
      GROUP,
      TOGGLE,
      DATE_TIME,
      ACTION_CELL,
      ICON_BUTTON,
      COLOR_VIA_VALUE,
      DISPLAY
    } = Constant.CellType
    switch (type) {
      case COLOR_VIA_VALUE:
        return (
          <CustomizeColorCell
            onClick={e => others.handleOnClick(e, rowData)}
            color={setColorViaValue(
              rowData[id] ? rowData[id] : Constant.CellColor.INACTIVE,
              theme
            )}
          >
            {rowData[id]}
          </CustomizeColorCell>
        )
      case IMAGE:
        return (
          <ImageCellWrapper
            onClick={e => others.handleOnClick(e, rowData)}
            source={rowData[id]}
            {...others}
          />
        )
      case TOGGLE:
        return (
          <ToggleCellWrapper
            checked={rowData[id] === Constant.CellColor.ACTIVE ? true : false}
            onChange={(checked, e) => {
              others.handleOnChange(checked, e, rowData)
            }}
            {...others}
          />
        )
      case RADIO_GROUP:
        return <RadioCellWrapper {...others} />
      case DATE_TIME: {
        const format = others?.format ? others.format : 'YYYY/MM/DD'
        const value = moment(rowData[id]).format(format)
        const isToday = moment(value).isSame(moment(), 'day')
        return (
          <DateTimeCellWrapper onClick={e => others.handleOnClick(e, rowData)}>
            {value}
            {isToday && (
              <BaseTag size={10} color='red' style={{ marginLeft: 10 }}>
                Today
              </BaseTag>
            )}
          </DateTimeCellWrapper>
        )
      }
      case GROUP:
        return
      case ICON_BUTTON:
        return (
          <ActionCellWrapper
            onClick={e => others.handleOnClick(e, rowData)}
            {...others}
          >
            <ImageCellWrapper source={others.source} />
            {others.label}
          </ActionCellWrapper>
        )
      case ACTION_BUTTON_GROUP:
        return <ActionButtonGroup {...others} />
      case ACTION_CELL:
        return (
          <ActionCellWrapper
            onClick={e => others.handleOnClick(e, rowData, id)}
            {...others}
          >
            {rowData[id]}
          </ActionCellWrapper>
        )
      case DISPLAY:
        return (
          <RadioGroup
            value={rowData[id]}
            onClick={e => others.handleOnClick(e, rowData[id])}
          />
        )
      default:
        return rowData[id]
    }
  }, [])

  const headerSummary = React.useCallback((main, sub, index, customStyle) => {
    const firstCol = index === 0 ? true : false
    return (
      <>
        <MainHeaderCellWrapper H6>
          <span style={{ ...customStyle?.main }}>{main}</span>
        </MainHeaderCellWrapper>
        <SubHeaderWrapper style={{ ...customStyle?.sub }} firstCol={firstCol}>
          {sub}
        </SubHeaderWrapper>
      </>
    )
  }, [])

  return (
    <Wrapper>
      {hasSummary && <HrWrapper></HrWrapper>}
      <TableWrapper headerHeight={hasSummary ? 60 : 35} data={data} {...others}>
        {columns.map((col, index) => (
          <ColumnWrapper
            align={col?.align || 'left'}
            width={col?.width || 60}
            key={index}
          >
            <HeaderCellWrapper style={col?.header?.style && col.header.style}>
              {hasSummary
                ? headerSummary(col.header.label, col.header.subLabel, index)
                : col.header.label}
            </HeaderCellWrapper>
            <CellWrapper
              minWidth={50}
              minHeight={50}
              style={col.cell.style}
              isAvatar={col?.cell?.isAvatar}
              isCheckbox={col?.cell?.isCheckbox}
              hoverPointer={col?.cell?.hoverPointer && col?.cell?.hoverPointer}
            >
              {rowData =>
                _renderCell(
                  col.cell.type,
                  col.cell.id,
                  rowData,
                  col.cell.others
                )
              }
            </CellWrapper>
          </ColumnWrapper>
        ))}
      </TableWrapper>

      {hasPaginate && (
        <PaginationWrapper
          lengthMenu={
            paginateProps?.lengthMenu
              ? paginateProps.lengthMenu
              : Constant.PaginateLengthMenu
          }
          activePage={
            paginateProps?.activePage ? paginateProps?.activePage + 1 : 0
          }
          displayLength={paginateProps?.displayLength}
          total={paginateProps?.total}
          onChangePage={paginateProps?.onChangePage}
          onChangeLength={paginateProps?.onChangeLength}
          showInfo={paginateProps?.showInfo || false}
        />
      )}
    </Wrapper>
  )
}

TableAction.propTypes = {
  hasPaginate: PropTypes.bool,
  width: PropTypes.number,
  paginateProps: PropTypes.shape({
    lengthMenu: PropTypes.number,
    total: PropTypes.number,
    activePage: PropTypes.number,
    displayLength: PropTypes.number,
    onChangeLength: PropTypes.func,
    onChangePage: PropTypes.func,
    showInfo: PropTypes.bool
  }),
  data: PropTypes.any,
  hasSummary: PropTypes.bool,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      align: PropTypes.string,
      header: PropTypes.shape({
        label: PropTypes.string,
        style: PropTypes.any,
        subLabel: PropTypes.string,
        customStyle: PropTypes.shape({
          main: PropTypes.object,
          sub: PropTypes.object
        })
      }),
      cell: {
        value: PropTypes.any,
        id: PropTypes.string,
        style: PropTypes.any,
        others: PropTypes.object,
        type: PropTypes.string
      }
    })
  )
}

export default React.memo(TableAction)
