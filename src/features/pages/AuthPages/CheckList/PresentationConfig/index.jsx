import React, { useState, useCallback } from 'react'
import {
  Wrapper,
  Block,
  Title,
  ItemInfo,
  Table,
  Row,
  HeaderCell
} from './styled'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Constant } from 'utils'
import {
  getImageSection,
  globalPresentationConfig,
  setDataPresentConfig
} from 'stores/CreateForm'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { useEffect } from 'react'

function PresentationConfig() {
  const [items, setItems] = useState(Constant.presentationConfig)
  const [itemsImage, setItemsImage] = useState([])
  const handleGetImageSection = useSetRecoilState(getImageSection)
  const presentConfig = useRecoilValue(globalPresentationConfig)
  const setPresentConfig = useSetRecoilState(setDataPresentConfig)

  const reorder = useCallback(
    (list, startIndex, endIndex) => {
      const temp = JSON.parse(JSON.stringify(list))
      const [removed] = temp.splice(startIndex, 1)
      temp.splice(endIndex, 0, removed)
      return temp
    },
    [items]
  )

  const onDragEnd = useCallback(
    (type, result) => {
      if (!result.destination) return
      if (type === 'image')
        setItemsImage(
          reorder(itemsImage, result.source.index, result.destination.index)
        )
      setItems(reorder(items, result.source.index, result.destination.index))
      setPresentConfig(items)
    },
    [items, itemsImage]
  )

  useEffect(handleGetImageSection, [])

  useEffect(() => {
    setItemsImage(presentConfig)
    setPresentConfig([...items, ...presentConfig])
  }, [presentConfig])

  return (
    <Wrapper>
      <Block>
        <Title H2 bold>
          Presentation config
        </Title>
        <DragDropContext onDragEnd={value => onDragEnd('', value)}>
          <Droppable droppableId='table_config'>
            {provided => (
              <Table {...provided.droppableProps} ref={provided.innerRef}>
                <Row>
                  <HeaderCell>Position</HeaderCell>
                  <HeaderCell>Screen name</HeaderCell>
                  <HeaderCell></HeaderCell>
                  <HeaderCell>Duration</HeaderCell>
                </Row>

                {items.map((item, index) => {
                  return (
                    <Draggable
                      key={item.index}
                      draggableId={item.index + ''}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <ItemInfo
                            itemPresentationConfig={item}
                            provided={provided}
                            isDragging={snapshot.isDragging}
                          />
                        )
                      }}
                    </Draggable>
                  )
                })}
              </Table>
            )}
          </Droppable>
        </DragDropContext>
      </Block>

      <Block id='image'>
        <Title bold>Images</Title>

        <DragDropContext onDragEnd={value => onDragEnd('image', value)}>
          <Droppable droppableId='table_image'>
            {provided => (
              <Table {...provided.droppableProps} ref={provided.innerRef}>
                <Row>
                  <HeaderCell>Position</HeaderCell>
                  <HeaderCell>Screen name</HeaderCell>
                  <HeaderCell></HeaderCell>
                  <HeaderCell>Duration</HeaderCell>
                </Row>

                {itemsImage.map((item, index) => {
                  return (
                    <Draggable
                      key={item.index}
                      draggableId={item.index + ''}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <ItemInfo
                            itemPresentationConfig={item}
                            provided={provided}
                            isDragging={snapshot.isDragging}
                          />
                        )
                      }}
                    </Draggable>
                  )
                })}
              </Table>
            )}
          </Droppable>
        </DragDropContext>
      </Block>
    </Wrapper>
  )
}

PresentationConfig.propTypes = {}

export default PresentationConfig
