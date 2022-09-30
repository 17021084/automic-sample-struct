import React, { useCallback } from 'react'
import { WrapperDropdown, DropdownItem, Icon } from './styled'
import PropTypes from 'prop-types'

const BaseDropdown = ({
  items,
  iconName,
  activeKey,
  changeStatus,
  ...others
}) => {
  const renderDropdown = useCallback(() => {
    return (
      <WrapperDropdown {...others} icon={iconName && <Icon name={iconName} />}>
        {items?.map((item, index) => {
          return (
            <DropdownItem
              eventKey={index + 1}
              key={index}
              active={activeKey == item}
              onSelect={() => {
                if (typeof changeStatus == 'function') changeStatus(item)
              }}
            >
              {item}
            </DropdownItem>
          )
        })}
      </WrapperDropdown>
    )
  }, [changeStatus, items, iconName, activeKey])

  return renderDropdown()
}

BaseDropdown.propTypes = {
  items: PropTypes.array,
  iconName: PropTypes.string,
  activeKey: PropTypes.string,
  changeStatus: PropTypes.func
}

export default React.memo(BaseDropdown)
