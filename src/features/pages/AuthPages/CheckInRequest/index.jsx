import React, { useEffect, useRef, useState, useCallback } from 'react'
import {
  Wrapper,
  ModalWrapper,
  ModalContentWrapper,
  ModalInputWrapper,
  ModalButtonWrapper
} from './styled'
import { TableAction, FilterBar } from 'molecules'
import { BaseButton, BaseDateRangePicker, BaseInputPicker } from 'atoms'
import { usePaginate, useRequestManager } from 'hooks'
import { useTheme } from 'styled-components'
import { Constant } from 'utils'
import moment from 'moment'
import { EndPoint } from 'config/api'
import { globalUnitsState } from 'stores/Units/atom'
import { useRecoilValue } from 'recoil'
import { withArray, withNumber } from 'exp-value'

const CheckInRequest = () => {
  const {
    activePage,
    displayLength,
    total,
    setTotal,
    onChangePage,
    onChangeLength
  } = usePaginate()
  const theme = useTheme()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const units = useRecoilValue(globalUnitsState)
  const modalRef = useRef(null)
  const modalInputRef = useRef(null)
  const [cell, setCell] = useState({ row: null, id: null, value: '' })
  const [modal, setModal] = useState(false)
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

  const { onGetExecute, onPostExecute } = useRequestManager()
  const [searchData, setSearchData] = useState({
    enterpriseUnitId: null,
    dateRange: [
      moment(Date.now()).subtract(30, 'days').format('YYYY-MM-DD'),
      moment(Date.now()).format('YYYY-MM-DD')
    ]
  })
  const [columns, setColumns] = useState([])

  const getOffSet = useCallback(
    (event, rowData, id) => {
      setModalPosition({ x: event.pageX - 30, y: event.pageY - 30 })
      setCell({ row: rowData, id, value: rowData[id] })
      setModal(true)
    },
    [cell, modal]
  )

  const handleCellInput = useCallback(
    value => {
      setCell(prev => {
        return { ...prev, value }
      })
    },
    [cell]
  )

  const getForms = useCallback((offset, limit, enterpriseUnitId) => {
    return onGetExecute(EndPoint.FORMS, {
      params: {
        offset,
        limit,
        enterpriseUnitId
      }
    })
  }, [])

  const getCheckIn = useCallback(
    (offset, limit, dateRange, enterpriseUnitId) => {
      return onGetExecute(EndPoint.CHECK_IN_REQ(enterpriseUnitId), {
        params: {
          offset,
          limit,
          enterpriseUnitId,
          startDate: moment(dateRange[0]).format('YYYY-MM-DD'),
          endDate: moment(dateRange[1]).format('YYYY-MM-DD')
        }
      })
    },
    []
  )

  const transformData = useCallback((forms, checkIn) => {
    console.log(forms, checkIn)
    let columId = forms.map(f => {
      return f.id
    })

    let columns = [
      {
        width: 200,
        header: {
          label: 'Date'
        },
        cell: {
          id: 'targetDate',
          type: Constant.CellType.DATE_TIME
        }
      },
      ...forms.map(f => {
        return {
          width: 100,
          align: 'left',
          header: {
            label: f.title
          },
          cell: {
            id: f.id,
            type: Constant.CellType.ACTION_CELL,
            others: {
              handleOnClick: getOffSet,
              style: {
                width: '40%'
              }
            },
            style: {
              color: theme.colors.tertiary
            }
          }
        }
      })
    ]
    let data = []
    checkIn.forEach(checkInItem => {
      let row = {
        targetDate: checkInItem.targetDate
      }
      columId.forEach(column => {
        row[column] = 0
      })
      if (
        checkInItem.checkinRequests &&
        checkInItem.checkinRequests.length !== 0
      ) {
        checkInItem.checkinRequests.forEach(checkInRq => {
          row[checkInRq.form.id] = checkInRq.requestAmount
        })
        // row = { ...row, checkinRequests: checkInItem.checkinRequests }
      }
      data.push(row)
    })
    return { columns, data }
  }, [])

  const getData = useCallback((offset, limit, dateRange, enterpriseUnitId) => {
    Promise.all([
      getForms(offset, limit, enterpriseUnitId),
      getCheckIn(offset, limit, dateRange, enterpriseUnitId)
    ])
      .then(conCurrentData => {
        setTotal(withNumber('paging.total', conCurrentData[1]))
        const { columns, data } = transformData(
          withArray('data', conCurrentData[0]),
          withArray('data', conCurrentData[1])
        )
        setColumns(columns)
        setData(data)
      })
      .catch(err => console.log(err))
  }, [])

  const updateCell = useCallback(
    async (cell, unit) => {
      const { row, id, value } = cell
      await onPostExecute(
        EndPoint.UPDATE_CHECK_IN_REQ(unit, id),
        {
          params: {
            requestAmount: value,
            targetDate: row['targetDate']
          }
        },
        true
      )
      setModal(false)
    },
    [modal, units]
  )

  //initial
  useEffect(() => {
    if (units && units.length) {
      setSearchData(prev => {
        return { ...prev, enterpriseUnitId: units[0].value }
      })
      getData(activePage, displayLength, searchData.dateRange, units[0].value)
    }
  }, [])

  useEffect(() => {
    if (units && units.length && searchData.enterpriseUnitId) {
      getData(
        activePage,
        displayLength,
        searchData.dateRange,
        searchData.enterpriseUnitId
      )
    }
  }, [activePage, displayLength, units, searchData])

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false)
        setCell({ row: null, id: null })
      }
    }
    function handleKeyPress(event) {
      if (event.key === 'Enter') {
        updateCell(cell, searchData.enterpriseUnitId)
      }
    }
    document.addEventListener('keypress', handleKeyPress)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [modalRef])

  return (
    <Wrapper>
      {modal && (
        <ModalWrapper>
          <ModalContentWrapper
            style={{
              top: modalPosition.y,
              left: modalPosition.x
            }}
            ref={modalRef}
          >
            <ModalInputWrapper
              ref={modalInputRef}
              value={cell['value']}
              onChange={handleCellInput}
            />
            <ModalButtonWrapper
              onClick={() => updateCell(cell, searchData.enterpriseUnitId)}
              secondary
            >
              Save
            </ModalButtonWrapper>
          </ModalContentWrapper>
        </ModalWrapper>
      )}
      <FilterBar
        hasButton={false}
        style={{ marginBottom: 20 }}
        formOpt={{
          formValue: searchData,
          onSubmit: () => {
            getData(
              activePage,
              displayLength,
              searchData.dateRange,
              searchData.enterpriseUnitId
            )
          }
        }}
      >
        <BaseInputPicker
          placeholder='unit'
          style={{ marginLeft: 10 }}
          data={units}
          value={searchData['enterpriseUnitId']}
          onChange={v =>
            setSearchData(prev => {
              return { ...prev, ['enterpriseUnitId']: v.id }
            })
          }
        />
        <BaseDateRangePicker
          placeholder='Select date range'
          style={{ marginLeft: 10 }}
          onChange={v =>
            setSearchData(prev => {
              return { ...prev, ['dateRange']: v }
            })
          }
          //fix warning Rsuit
          value={searchData['dateRange']}
        />

        <BaseButton style={{ marginLeft: 10 }} secondary bold type='submit'>
          Search
        </BaseButton>
      </FilterBar>

      <TableAction
        virtualized
        id='table--checkinRequest'
        height={window.innerHeight - 200}
        loading={loading}
        data={data}
        columns={columns}
        paginateProps={{
          activePage,
          displayLength,
          total: total,
          onChangePage: page => onChangePage(page - 1, setLoading),
          onChangeLength: length => onChangeLength(length, setLoading)
        }}
      />
    </Wrapper>
  )
}

export default CheckInRequest
