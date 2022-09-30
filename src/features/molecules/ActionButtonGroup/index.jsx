import React from 'react'
import PropTypes from 'prop-types'

import { ContainerWrapper, ButtonWrapper, IconWrapper } from './styled'
import { IMAGES } from 'assets'

const ActionButtonGroup = ({
  onClickView,
  onClickDelete,
  onClickEdit,
  ...others
}) => {
  return (
    <ContainerWrapper {...others}>
      <IconWrapper source={IMAGES.EYE} onClick={onClickView} />
      <IconWrapper source={IMAGES.NOTE} onClick={onClickEdit} />
      <ButtonWrapper onClick={onClickDelete}>
        <IconWrapper btnIcon source={IMAGES.TRASH} />
      </ButtonWrapper>
    </ContainerWrapper>
  )
}

ActionButtonGroup.propTypes = {
  onClickView: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func
}

export default React.memo(ActionButtonGroup)
