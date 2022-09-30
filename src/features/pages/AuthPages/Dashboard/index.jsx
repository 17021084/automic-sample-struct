import React from 'react'
import { Wrapper } from './styled'
import { TableAction, FilterBar } from 'molecules'
import { BaseButton, BaseCheckPicker } from 'atoms'

// import { IMAGES } from 'assets'

const testData = [
  { checkListName: 'checklist1', timestamp: '13/2/2002' },
  { checkListName: 'checklist1', timestamp: '13/2/2002' }
]

const Dashboard = () => {
  const columns = [
    {
      width: 200,
      header: {
        label: 'Checklist name'
      },
      cell: {
        id: 'checkListName'
      }
    },
    {
      width: 200,
      header: {
        label: 'Last update time'
      },
      cell: {
        id: 'timestamp'
      }
    }
  ]

  const data = [
    {
      value: '1',
      label: '四川'
    },
    {
      value: '2',
      label: '四川'
    }
  ]

  return (
    <Wrapper>
      <FilterBar hasButton={false} style={{ marginBottom: 20 }}>
        <BaseCheckPicker data={data} />
        <BaseButton style={{ marginLeft: 10 }} secondary bold>
          Filter
        </BaseButton>
      </FilterBar>
      <TableAction
        width={400}
        data={testData}
        columns={columns}
        hasPaginate={false}
      />
    </Wrapper>
  )
}

export default Dashboard
