import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, WrapperItem, Checkbox, Input, Icon } from './styled'
import { BaseRadio } from 'atoms'
import { withNumber } from 'exp-value'

const CustomRadio = ({
  inline = true,
  value,
  onChange,
  sectionItems,
  setSectionItems,
  addItem = false,
  ...others
}) => {
  const [data, setData] = useState([])
  const [item, setItem] = useState('')
  const handleChangeItem = useCallback(e => setItem(e), [])
  const addDataItem = useCallback(() => {
    if (!item) return
    setItem('')
    setSectionItems([...sectionItems, { value: item }])
    setData([...data, { value: item, label: item }])
  }, [item])

  const removeDataItem = useCallback(
    id => {
      if (id < 0 || id > data.length) return
      setSectionItems(sectionItems.filter((_, index) => index !== id))
      setData(data.filter((_, index) => index !== id))
    },
    [sectionItems, data]
  )

  const updateDataItem = useCallback(
    (value, id) => {
      if (id < 0 || id >= sectionItems.length) return
      const temp = JSON.parse(JSON.stringify(sectionItems))
      temp[id].value = value
      setSectionItems(temp)

      const tmp2 = JSON.parse(JSON.stringify(data))
      tmp2[id] = {
        value: value,
        label: value
      }
      setData(tmp2)
    },
    [sectionItems, data]
  )

  const renderForm = useCallback(
    data => {
      return data?.map((item, index) => {
        if (!addItem)
          return <BaseRadio key={index} value={item.value} label={item.label} />
        return (
          <WrapperItem key={index}>
            {addItem && (
              <Checkbox
                onClick={() => removeDataItem(index)}
                style={{ borderWidth: 0 }}
              >
                <Icon name='feather-x' size={16} />
              </Checkbox>
            )}
            <Input
              value={item.value}
              onChange={value => updateDataItem(value, index)}
            />
          </WrapperItem>
        )
      })
    },
    [sectionItems, data, addItem]
  )
  useEffect(() => {
    if (sectionItems) {
      if (withNumber('length', sectionItems) < 1) return setData([])
      const temp = sectionItems.map(item => {
        return {
          value: item.value,
          label: item.value
        }
      })
      return setData(temp)
    }
  }, [sectionItems, addItem, value])

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

CustomRadio.propTypes = {
  inline: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.any,
  addItem: PropTypes.bool,
  setSectionItems: PropTypes.func,
  sectionItems: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.any
    })
  )
}

export default React.memo(CustomRadio)
