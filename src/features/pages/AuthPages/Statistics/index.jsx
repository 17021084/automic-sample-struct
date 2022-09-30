import React, { useState, useEffect, useCallback } from 'react' // useState
import { Wrapper } from './styled'
import { TableAction, FilterBar } from 'molecules'
import { BaseButton, BaseDateRangePicker, BaseInputPicker } from 'atoms'

import { IMAGES } from 'assets'
import { usePaginate } from 'hooks'
import { Constant } from 'utils'
import { useRequestManager, useUnits } from 'hooks'
import { EndPoint } from 'config/api'
import { globalUnitsState } from 'stores/Units/atom'
import { useRecoilValue } from 'recoil'
import moment from 'moment'
import { withArray } from 'exp-value'

const Statistics = () => {
  const {
    activePage,
    displayLength,
    // total,
    // setTotal,
    onChangePage,
    onChangeLength
  } = usePaginate()
  useUnits()

  const { onGetExecute } = useRequestManager()
  const units = useRecoilValue(globalUnitsState)
  const [forms, setForms] = useState()
  const [column, setColumn] = useState([])
  const [data, setData] = useState([])

  const [searchData, setSearchData] = useState(
    {
      enterpriseUnitId: null,
      dateRange: [
        // '2020-07-07',
        // '2021-08-30'
        moment(Date.now()).subtract(30, 'days').format('YYYY-MM-DD'),
        moment(Date.now()).format('YYYY-MM-DD')
      ],
      formId: null
      // formId: 280 // just one available
    },
    []
  )

  const getForms = useCallback(async () => {
    const response = await onGetExecute(
      EndPoint.FORMS,
      {
        params: {
          offset: 0,
          limit: 1000
        }
      },
      true
    )

    if (response) {
      return withArray('data', response).map(f => {
        return { ...f, label: f.title, value: f.id }
      })
    }
  })

  const getFormsResults = useCallback(
    (offset, limit, dateRange, enterpriseUnitId, formId) => {
      if (formId) return []
      return onGetExecute(EndPoint.FORMS_RESULTS(formId), {
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
  const getFormsProgress = useCallback(
    (offset, limit, dateRange, enterpriseUnitId, formId) => {
      if (formId) return []
      return onGetExecute(EndPoint.FORMS_RESULTS_PROGRESS(formId), {
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

  const dataTransform = useCallback((progress, results) => {
    if (!progress || !results) return { column: [], data: [] }
    const columnIds = progress.map(c => c.sectionId)
    let column = [
      {
        width: 200,
        header: {
          label: '　　　　',
          style: { height: 100 },
          subLabel: 'Progress'
        },
        cell: {
          id: 'name'
        }
      },
      ...progress.map(p => {
        let cellType = null
        let customStyle = {}
        switch (p.inputTypeId) {
          case Constant.sectionType[0].value: // single choice
            cellType = Constant.CellType.IMAGE
            break
          case Constant.sectionType[2].value: //image
            cellType = Constant.CellType.IMAGE
            customStyle = {
              width: 100,
              align: 'center',
              cellStyle: {
                padding: 0
              },
              cellOthersStyles: {
                width: 46,
                height: 27,
                borderRadius: 4,
                padding: 0
              }
            }
            break
          case Constant.sectionType[3].value: // text
            customStyle = {
              width: 300
            }
            break
        }
        return {
          width: customStyle?.width || 100,
          align: customStyle?.align || 'center',
          header: {
            subLabel: `${p.progress * 100}%`,
            label: p.title,
            style: { ...customStyle?.headerStyle }
          },
          cell: {
            id: p.sectionId,
            type: cellType,
            others: {
              ...customStyle?.cellOthersStyles
            },
            style: { ...customStyle?.cellStyle }
          }
        }
      })
    ]
    let data = []
    results.forEach(result => {
      let row = {
        name: `${result?.author?.firstName} ${result?.author?.lastName}`
      }
      columnIds.forEach(id => {
        row[id] = ''
      })
      // todo with empty
      result.resultItems.forEach(item => {
        let { inputTypeId, id } = item.section
        let { imageUrl, text, number } = item.value
        switch (inputTypeId) {
          case Constant.sectionType[0].value: // single choice
            row[id] = IMAGES.LOGO.CHECKED
            break
          case Constant.sectionType[2].value: //
            row[id] = imageUrl
            break
          case Constant.sectionType[3].value: //image
            row[id] = number
            break
          case Constant.sectionType[4].value: //image
            row[id] = text
            break
        }
      })
      data.push(row)
    })

    return { data, column }
  }, [])

  const getData = useCallback(
    (offset, limit, dateRange, enterpriseUnitId, formId) => {
      Promise.all([
        getFormsProgress(offset, limit, dateRange, enterpriseUnitId, formId),
        getFormsResults(offset, limit, dateRange, enterpriseUnitId, formId)
      ])
        .then(conCurrentData => {
          const [progress, results] = conCurrentData
          const { column, data } = dataTransform(progress, results)
          setColumn(column)
          setData(data)
        })
        .catch(error => console.log(error))
    },
    []
  )

  useEffect(() => {
    async function execute() {
      const listForm = await getForms()
      if (listForm?.length * units?.length !== 0) {
        setForms(listForm)
        setSearchData({
          formId: listForm[0].value,
          enterpriseUnitId: units[0].value
        })
        getData(
          activePage,
          displayLength,
          searchData.dateRange,
          units[0].value,
          280 // just one available
          // listForm[0].value,
        )
      }
    }
    execute()
  }, [])

  useEffect(() => {
    if (searchData.enterpriseUnitId && searchData.formId) {
      getData(
        activePage,
        displayLength,
        searchData.dateRange,
        searchData.enterpriseUnitId,
        searchData.formId
        // 280 // just one available
      )
    }
  }, [activePage, displayLength])

  return (
    <Wrapper>
      <FilterBar
        placeholder='checklist'
        hasButton={false}
        style={{ marginBottom: 20 }}
        formOpt={{
          formValue: searchData,
          onSubmit: () => {
            getData(
              activePage,
              displayLength,
              searchData.dateRange,
              searchData.enterpriseUnitId,
              searchData.formId
              // 280 // just one available
            )
          }
        }}
      >
        <BaseInputPicker
          placeholder='unit'
          style={{ marginLeft: 10 }}
          value={searchData['enterpriseUnitId']}
          data={units}
          onChange={v =>
            setSearchData(prev => {
              return { ...prev, ['enterpriseUnitId']: v }
            })
          }
        />
        <BaseInputPicker
          placeholder='Form'
          style={{ marginLeft: 10 }}
          data={forms}
          value={searchData['formId']}
          onChange={v =>
            setSearchData(prev => {
              return { ...prev, ['formId']: v }
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

        <BaseButton
          // onClick={() => getUnits(activePage, displayLength)}
          type='submit'
          style={{ marginLeft: 10 }}
          secondary
          bold
        >
          Filter
        </BaseButton>
      </FilterBar>

      <TableAction
        virtualized
        height={600}
        data={data}
        columns={column}
        hasSummary={true}
        paginateProps={{
          activePage,
          displayLength,
          total: 100,
          onChangePage: page => onChangePage(page - 1),
          onChangeLength: length => onChangeLength(length)
        }}
      />
    </Wrapper>
  )
}

export default Statistics
