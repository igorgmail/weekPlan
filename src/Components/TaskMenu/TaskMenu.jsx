import React, { useEffect, useState, useRef, useContext } from "react"
import Context from '../../context/todoContext'

import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Button, IconButton, Flex, Textarea } from "@chakra-ui/react"
import { ExternalLinkIcon, HamburgerIcon, AddIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'

export default function TaskMenu({ item, data }) {
  const { dispatch } = useContext(Context)

  const { isOpen, onOpen, onClose, isClose } = useDisclosure()
  const [editorButton, setEditorButton] = useState(false)
  const textareaRef = useRef(null)
  const modalBodyRef = useRef(null)


  const editorButtonHandler = () => {
    setEditorButton((stateEditor) => !stateEditor)
  }

  const closeModalHandler = () => {
    onClose()
    setEditorButton(false)
  }

  const saveEditorHandler = () => {
    const textValue = modalBodyRef.current.querySelector('textarea').value
    const itemIndex = modalBodyRef.current.dataset.modalIndex
    dispatch({
      type: 'UPDATE_ITEM',
      payload: {
        index: itemIndex,
        value: textValue
      }
    })
  }

  const deleteItemHandler = () => {
    const itemIndex = modalBodyRef.current.dataset.modalIndex
    dispatch({
      type: 'DELETE_ITEM',
      payload: itemIndex,
    })
  }


  useEffect(() => {
    console.log('----Modar Render');
    console.log('----Modar isClose', isClose);

    // return setEditorButton(false)
  })
  return (
    <>
      <Button p={'0'}>
        <HamburgerIcon boxSize={6} color='grey.500' onClick={onOpen} />
      </Button>

      <Modal onClose={closeModalHandler} isOpen={isOpen} isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody ref={modalBodyRef} data-modal-index={data}>
            {editorButton ? (
              <Textarea
                size='sm'
                // resize={''}
                overflow="auto"
                defaultValue={item.task}
              >
              </Textarea>
            ) : (
              item.task
            )}

          </ModalBody>
          <ModalFooter>
            <Flex w={'100%'} justifyContent={'space-between'}>
              {editorButton ? (
                <Button onClick={saveEditorHandler} color={'white'} backgroundColor={'#f4a261'}>Сохранить</Button>
              ) : (
                <Button onClick={editorButtonHandler} color={'white'} backgroundColor={'#2a9d8f'}>Редактировать</Button>

              )}

              <Button onClick={deleteItemHandler} color={'white'} backgroundColor={'#e63946'}>Удалить</Button>
              <Button onClick={closeModalHandler} color={'white'} backgroundColor={'#457b9d'}>Закрыть</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}