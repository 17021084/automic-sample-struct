import React, { useState, useEffect, useCallback } from 'react'
import { Wrapper } from './styled'
import { TableAction, FilterBar } from 'molecules'
import { BaseButton, BaseDateRangePicker, BaseInputPicker } from 'atoms'
import { usePaginate, useRequestManager } from 'hooks'
import { useTheme } from 'styled-components'
import moment from 'moment'
import { EndPoint } from 'config/api'
import { Constant } from 'utils'
import { useRecoilValue } from 'recoil'
import { globalUnitsState } from 'stores/Units/atom'

const History = () => {
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
  const [searchData, setSearchData] = useState({
    enterpriseUnitId: null,
    dateRange: [
      moment(Date.now()).subtract(30, 'days').format('YYYY-MM-DD'),
      moment(Date.now()).format('YYYY-MM-DD')
    ]
  })
  const { onGetExecute } = useRequestManager()
  const units = useRecoilValue(globalUnitsState)

  const getData = useCallback(
    async (offset, limit, dateRange, enterpriseUnitId) => {
      const response = await onGetExecute(EndPoint.RESULT_LOGS, {
        params: {
          offset,
          limit,
          enterpriseUnitId,
          startDate: moment(dateRange[0]).format('YYYY-MM-DD'),
          endDate: moment(dateRange[1]).format('YYYY-MM-DD')
        }
      })
      if (response) {
        const { data, paging } = response
        setData(
          data.map(d => {
            return { ...d, name: d.author.name, title: d.form.title }
          })
        )
        setTotal(paging.total)
      }
    },
    []
  )

  useEffect(() => {
    if (units && units.length) {
      if (!searchData.enterpriseUnitId) {
        getData(activePage, displayLength, searchData.dateRange, units[0].value)
        setSearchData(prev => {
          return { ...prev, enterpriseUnitId: units[0].value }
        })
        return
      }
      getData(
        activePage,
        displayLength,
        searchData.dateRange,
        searchData.enterpriseUnitId
      )
    }
  }, [activePage, displayLength, units])

  const columns = [
    {
      align: 'left',
      width: 200,
      header: {
        label: 'Last update time'
      },
      cell: {
        id: 'actionAt',
        type: Constant.CellType.DATE_TIME,
        others: {
          format: 'YYYY-MM-DD HH:mm:ss'
        }
      }
    },
    {
      align: 'left',
      width: 300,
      header: {
        label: 'Staff'
      },
      cell: {
        id: 'name',
        style: {
          color: theme.colors.tertiary
        }
      }
    },
    {
      width: 200,
      align: 'left',
      header: {
        label: 'Checklist'
      },
      cell: {
        id: 'title',
        style: {
          color: theme.colors.tertiary
        }
      }
    },
    {
      width: 100,
      align: 'center',
      header: {
        style: {
          textAlign: 'center'
        },
        label: 'Action'
      },
      cell: {
        id: 'changeType',
        style: {
          color: theme.colors.tertiary
        }
      }
    }
  ]

  return (
    <Wrapper>
      <FilterBar
        formOpt={{
          formValue: searchData,
          onSubmit: () =>
            getData(
              activePage,
              displayLength,
              searchData.dateRange,
              searchData.enterpriseUnitId
            )
        }}
        hasButton={false}
        style={{ marginBottom: 20 }}
      >
        <BaseInputPicker
          placeholder='unit'
          style={{ marginLeft: 10 }}
          data={units}
          value={searchData['enterpriseUnitId']}
          onChange={v =>
            setSearchData(prev => {
              return { ...prev, ['enterpriseUnitId']: v }
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
        <BaseButton type='submit' style={{ marginLeft: 10 }} secondary bold>
          Filter
        </BaseButton>
      </FilterBar>

      <TableAction
        height={600}
        width={800}
        data={data}
        columns={columns}
        paginateProps={{
          activePage,
          displayLength,
          total,
          onChangePage: p => onChangePage(p - 1),
          onChangeLength: l => onChangeLength(l)
        }}
      />
    </Wrapper>
  )
}

//Moc data

export default History
