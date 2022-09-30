import styled from 'styled-components'
import { Dropdown } from 'rsuite'
import { BaseIcon } from 'atoms'

export const WrapperDropdown = styled(Dropdown)`
  display: block;
  position: relative;
  .rs-dropdown-menu {
    right: 0;
    left: auto !important;
  }
`

export const DropdownItem = styled(Dropdown.Item)`
  ${props =>
    props.active &&
    `a {
      color: ${props.theme.colors.primary} !important;
    }`};
`
export const Icon = styled(BaseIcon)``
