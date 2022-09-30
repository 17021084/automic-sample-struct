import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, Cell, Icon, Input, Button, Text } from './styled'
import ModalTargetUser from '../ModalTargetUser'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { withArray, withEmpty } from 'exp-value'
import { updateDefaultPresentation } from 'stores/CreateForm'
import { useSetRecoilState } from 'recoil'
import { useAlert } from 'hooks'
function ItemRowConfig({
  itemPresentationConfig,
  setItemPresentationConfig,
  provided,
  isDragging,
  ...others
}) {
  const updatePresentation = useSetRecoilState(updateDefaultPresentation)
  const [showModal, setShowModal] = useState(false)
  const { showError } = useAlert()
  const [data, setData] = useState({
    index: 0,
    id: 0,
    screenName: '',
    commentType: '',
    duration: '',
    commentOfUsers: []
  })

  const handleChangeData = useCallback(
    (type, value) => {
      setData(prev => ({ ...prev, [type]: value }))
      updatePresentation(data)
      if (type == 'commentType' && data.commentOfUsers.length < 1)
        showError('User list can`t empty')
      if (typeof setItemPresentationConfig === 'function')
        setItemPresentationConfig(data)
    },
    [data]
  )

  useEffect(() => {
    setData({
      index: withEmpty('index', itemPresentationConfig),
      id: withEmpty('id', itemPresentationConfig),
      screenName: withEmpty('screenName', itemPresentationConfig),
      commentType: withEmpty('commentType', itemPresentationConfig),
      duration: withEmpty('duration', itemPresentationConfig),
      commentOfUsers: withArray('commentOfUsers', itemPresentationConfig)
    })
  }, [itemPresentationConfig])

  return (
    <Row
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      isDragging={isDragging}
      {...others}
    >
      <Cell>{data.index}</Cell>
      <Cell>{data.screenName}</Cell>
      <Cell style={{ width: 120, textAlign: 'center' }}>
        {data.commentType && (
          <Text onClick={() => setShowModal(true)}>Detail</Text>
        )}
      </Cell>
      <Cell>
        <Input
          type='number'
          value={data.duration}
          onChange={value => {
            if (value > 0) handleChangeData('duration', value)
          }}
        />
      </Cell>
      <Cell>
        <Button>
          <Icon name='feather-move' size={18} />
        </Button>
      </Cell>
      {showModal && (
        <ModalTargetUser
          show={showModal}
          onHide={() => setShowModal(false)}
          commentType={data.commentType}
          commentOfUsers={data.commentOfUsers}
          onChangeType={e => handleChangeData('commentType', e)}
          onChangeListUser={value => handleChangeData('commentOfUsers', value)}
        />
      )}
    </Row>
  )
}

ItemRowConfig.propTypes = {
  provided: PropTypes.object,
  isDragging: PropTypes.bool,
  itemPresentationConfig: PropTypes.object,
  setItemPresentationConfig: PropTypes.func
}

export default ItemRowConfig
