import React from 'react'
import * as FeatherIcon from 'react-feather'
import PropTypes from 'prop-types'
import { RSIcon, Wrapper } from './styled'

const BaseIcon = ({ name, ...others }) => {
  const _renderIcon = React.useCallback(() => {
    if (name?.includes('feather-')) {
      const iconName = name
        .replace('feather', '')
        .replace(/-[a-zA-Z]/g, match => match.toUpperCase())
        .replaceAll('-', '')
      const Icon = FeatherIcon[iconName]
      if (Icon) return <Icon {...others} />
    }

    return (
      <Wrapper>
        <RSIcon icon={name?.replace('feather-', '')} {...others} />
      </Wrapper>
    )
  }, [name])

  return _renderIcon()
}

BaseIcon.propTypes = {
  name: PropTypes.string.isRequired
}

export default React.memo(BaseIcon)

/**
 * usages:
 * At styled File
 * import { BaseIcon } from 'atoms'
 * export const Icon = styled(BaseIcon)`
    font-size: 20px;
    color: ${props => props.theme.colors.blue};
  `
  * At View Component, please implement something like bellow
  * For Rsuite Icon:
    <Icon name={'star'} />
  * For Feather Icon
    <Icon name={'feather-camera'} />
 */
