import PropTypes from 'prop-types'
import React from 'react'
import { Constant } from 'utils'
import {
  ModalBody,
  SelectUser,
  TargetType,
  Title,
  WrapperModal
} from './styled'

function ModalTargetUser({
  commentType = 'targetUsers',
  onChangeType,
  onChangeListUser,
  commentOfUsers,
  showListUser = commentType == 'targetUsers',
  ...others
}) {
  return (
    <WrapperModal {...others} showListUser>
      <WrapperModal.Header>
        <Title>Details</Title>
      </WrapperModal.Header>
      <ModalBody>
        <TargetType
          value={commentType}
          onChange={onChangeType}
          options={Constant.commentType}
        />
        {showListUser && (
          <SelectUser value={commentOfUsers} onChange={onChangeListUser} />
        )}
      </ModalBody>
    </WrapperModal>
  )
}
ModalTargetUser.propTypes = {
  commentType: PropTypes.string,
  commentOfUsers: PropTypes.array,
  onChangeType: PropTypes.func,
  onChangeListUser: PropTypes.func,
  showListUser: PropTypes.bool
}
export default ModalTargetUser
