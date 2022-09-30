import React from 'react'
import { Wrapper } from './styled'
import { BaseButton, } from 'atoms'
import BaseToggle from '../../atoms/BaseToggle'
import { RadioForm ,CheckboxGroup } from '../../molecules'
import InputGroup from '../../molecules/InputGroup'
import {  Icon } from 'rsuite'
import BaseTitle from '../../atoms/BaseTitle'
// import { BaseImage } from '../../atoms'
// import { IMAGES } from 'assets'

// https://rsuitejs.com/tools/icons

const Previews = () => {
  return (
    <Wrapper>
      <h1> Preview</h1>
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
      CheckboxGroupInput form xx  ===========
      <br />
      
      <CheckboxGroup
        options={[
          { content: 'abcv', id: 1 },
          { content: 'abcvasdas', id: 2 },
          { content: 'abcvzxcvzxcv', id: 3 },
          { content: 'abcv', id: 4 }
        ]}
      />
     <br />
     <h3>  CheckboxGroupInput form xx  ===========</h3>
      <br />
        <BaseTitle H1 bold> H1 bold </BaseTitle>
        <BaseTitle H2 uppercase> H2 uppercase </BaseTitle>
        <BaseTitle H3 bold uppercase > H3 bold </BaseTitle>
        <BaseTitle H4 > H4  </BaseTitle>
        <BaseTitle H5 > H5  </BaseTitle>
        <BaseTitle H6 > H6  </BaseTitle>
      


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
