import React from 'react'
import { Wrapper } from './styled'
import { BaseButton } from 'atoms'
import BaseToggle from '../../atoms/BaseToggle'
import { RadioForm, CheckBoxGroup } from '../../molecules'
import InputGroup from '../../molecules/InputGroup'
import { Icon } from 'rsuite'

import { TableAction, ActionButtonGroup } from 'molecules'

// https://rsuitejs.com/tools/icons

const Previews = () => {
  const testData = [
    { checkListName: 'checklist1', timestamp: '13/2/2002' },
    { checkListName: 'checklist1', timestamp: '13/2/2002' }
  ]

  const columns = [
    {
      header: {
        label: 'Checklist name',
        subLabel: 'Process'
      },
      cell: {
        value: rowData => rowData.checkListName
      }
    },
    {
      header: {
        label: 'Last update time',
        subLabel: '80%'
      },
      cell: {
        value: rowData => {
          console.log(testData.indexOf(rowData))
          return rowData.timestamp
        }
      }
    },
    {
      header: {
        label: 'Action'
      },
      cell: {
        // eslint-disable-next-line react/display-name
        value: () => <ActionButtonGroup style={{ padding: 0 }} />,
        style: {
          padding: 0
        }
      }
    }
  ]

  return (
    <Wrapper>
      <h1> Preview</h1>
      <TableAction
        hasSummary={true}
        data={testData}
        columns={columns}
        hasPaginate={true}
        paginateProps={{
          lengthMenu: [
            {
              value: 10,
              label: 10
            },
            {
              value: 20,
              label: 20
            }
          ],
          activePage: 3,
          displayLength: 10,
          total: 100,
          onChangePage: () => null,
          onChangeLength: () => null
        }}
      />
      <br />
      ===========
      <br />
      <BaseButton>no option</BaseButton>
      <BaseButton primary>primary</BaseButton>
      <BaseButton primary uppercase>
        primary uppercase
      </BaseButton>
      <BaseButton secondary uppercase bold>
        secondary uppercase bold
      </BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <BaseButton bold>bold</BaseButton>
      <BaseButton blue>blue</BaseButton>
      <BaseButton tertiary>bold</BaseButton>
      <br />
      BaseToggle ===========
      <br />
      <BaseToggle />
      <br />
      RadioForm ===========
      <br />
      <RadioForm
        options={[
          {
            value: 'a',
            label: 'abc'
          },
          {
            value: 'b',
            label: <div>abcs</div>
          },
          {
            value: 'c',
            label: 'abc',
            others: {
              disabled: true
            }
          }
        ]}
        onChange={() => {
          console.log('asd')
        }}
        name='radioList'
        // value='a'
      />
      <br />
      InputGroup form ===========
      <br />
      <InputGroup
        LeftSide={<Icon icon='blind' />}
        RightSide={{
          onClick: () => alert('abc'),
          icon: <Icon icon='blind' />
        }}
        placeholder='help text no error'
        helpText='helptext'
      />
      <InputGroup
        LeftSide={<Icon icon='blind' />}
        RightSide={{
          onClick: () => alert('abc'),
          icon: <Icon icon='blind' />
        }}
        placeholder='helptext is error = true'
        helpText='isError =true'
        isError={true}
      />
      <InputGroup
        LeftSide={<Icon icon='blind' />}
        placeholder='helptext is error = true'
      />
      <InputGroup placeholder='futsu input' />
      <br />
      CheckBoxGroupInput form xx ===========
      <br />
      <CheckBoxGroup
        options={[
          { content: 'abcv', id: 1 },
          { content: 'abcvasdas', id: 2 },
          { content: 'abcvzxcvzxcv', id: 3 },
          { content: 'abcv', id: 4 }
        ]}
      />
    </Wrapper>
  )
}

// 12
// 14
// 16
// 18
//20
//24
//
export default Previews
