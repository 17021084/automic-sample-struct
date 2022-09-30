import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, WrapperItem, Checkbox, Input, Icon } from './styled'
import { BaseRadio } from 'atoms'
import { Constant } from 'utils'
import { withNumber } from 'exp-value'

const RadioForm = ({
  inline = true,
  value,
  onChange,
  options = Constant.DEFAULT_OPTIONS,
  sectionItems,
  setSectionItems,
  addItem = false,
  ...others
}) => {
  const [data, setData] = useState([])
  const [item, setItem] = useState('')
  const handleChangeItem = useCallback(e => setItem(e), [])
  const addDataItem = useCallback(() => {
    setSectionItems([...sectionItems, { value: item }])
    setData([...data, { value: item, label: item }])
  }, [item])

  const renderForm = useCallback(
    data => {
      return data?.map((item, index) => (
        <BaseRadio
          key={index}
          value={item.value}
          label={item.label}
          {...item.others}
        />
      ))
    },
    [data]
  )

  useEffect(() => {
    if (sectionItems) {
      if (withNumber('length', sectionItems) < 1) return
      let temp = sectionItems.map(item => {
        return {
          content: item.value,
          label: item.value
        }
      })
      return setData(temp)
    }

    if (!options || options.length < 0) return
    return setData(options)
  }, [sectionItems, options])

  return (
    <Wrapper inline={inline} value={value} onChange={onChange} {...others}>
      {renderForm(data)}
      {addItem ? (
        <WrapperItem>
          <Checkbox onClick={addDataItem}>
            <Icon name='feather-plus' size={16} />
          </Checkbox>
          <Input
            placeHolder='Add a item'
            value={item}
            onChange={handleChangeItem}
          />
        </WrapperItem>
      ) : null}
    </Wrapper>
  )
}

RadioForm.propTypes = {
  inline: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string,
      others: PropTypes.any
    })
  ).isRequired,
  addItem: PropTypes.bool,
  setSectionItems: PropTypes.func,
  sectionItems: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.any
    })
  )
}

export default React.memo(RadioForm)
