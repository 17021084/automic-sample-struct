import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Wrapper, WrapperItem, Checkbox, Input, Icon } from './styled'
import { BaseCheckbox } from 'atoms'
import { withNumber } from 'exp-value'

const CustomCheckbox = ({
  value,
  onChange,
  sectionItems,
  setSectionItems,
  addItem,
  ...others
}) => {
  const [data, setData] = useState([])
  const [item, setItem] = useState('')
  const handleChangeItem = useCallback(e => setItem(e), [])

  const addDataItem = useCallback(() => {
    if (!item) return
    setItem('')
    setSectionItems([...sectionItems, { value: item }])
    setData([...data, { content: item, id: data.length + 1 }])
  }, [item])

  const removeDataItem = useCallback(
    id => {
      if (id < 0 || id > sectionItems.length) return
      setSectionItems(sectionItems.filter((_, index) => index !== id))
      setData(data.filter((_, index) => index !== id))
    },
    [sectionItems]
  )

  const updateDataItem = useCallback(
    (value, id) => {
      if (id < 0 || id > sectionItems.length) return
      const temp = JSON.parse(JSON.stringify(sectionItems))
      temp[id].value = value
      setSectionItems(temp)

      const tmp2 = JSON.parse(JSON.stringify(data))
      tmp2[id].content = value
      setData(tmp2)
    },
    [sectionItems]
  )

  const renderForm = useCallback(
    data => {
      return data.map((item, index) => {
        if (!addItem)
          return (
            <BaseCheckbox key={index} content={item.content} id={item.id} />
          )
        return (
          <WrapperItem key={index}>
            <WrapperItem>
              {addItem && (
                <Checkbox
                  onClick={() => removeDataItem(index)}
                  style={{ borderWidth: 0 }}
                >
                  <Icon name='feather-x' size={16} />
                </Checkbox>
              )}
              <Input
                value={item.content}
                onChange={value => updateDataItem(value, index)}
              />
            </WrapperItem>
          </WrapperItem>
        )
      })
    },
    [sectionItems]
  )

  useEffect(() => {
    if (sectionItems) {
      if (withNumber('length', sectionItems) < 1) return setData([])
      const temp = sectionItems.map((item, index) => {
        return {
          content: item.value,
          id: index
        }
      })
      return setData(temp)
    }
  }, [sectionItems, addItem])

  return (
    <Wrapper value={value} onChange={onChange} {...others}>
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

CustomCheckbox.propTypes = {
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

export default React.memo(CustomCheckbox)
