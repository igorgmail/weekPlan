import React, { useEffect, useState, useRef, useContext } from "react"
import Context from '../../context/todoContext'

import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Button, Flex, Textarea, Badge } from "@chakra-ui/react"
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export default function TaskMenu({ item, data, isModalOpen, closeModal }) {
  console.log("▶ ⇛ item:", item);
  const { dispatch } = useContext(Context)


  const [editorButton, setEditorButton] = useState(false)
  const textareaRef = useRef(null)
  const modalBodyRef = useRef(null)


  const editorButtonHandler = () => {
    setEditorButton((stateEditor) => !stateEditor)
  }

  const closeModalHandler = () => {
    closeModal()
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
    // Помещаем курсор в конец текста в textarea
    if (textareaRef.current) {
      textareaRef.current.focus(); // Активация фокуса
      const textLength = item.task.length;
      // Установка позиции курсора в конец текста
      textareaRef.current.setSelectionRange(textLength, textLength);
    }
  }, [editorButton, item.task]);

  useEffect(() => {
    console.log('----Modar Render');
  })
  return (
    <>
      <Modal onClose={closeModalHandler} isOpen={isModalOpen} isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Badge backgroundColor={item.status === 'done' ? '#2a9d8f' : '#f4a261'}>{item.status === 'done' ? 'Завершенно' : 'Сделать'}</Badge>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody ref={modalBodyRef} data-modal-index={data}>
            {editorButton ? (
              <Textarea
                ref={textareaRef}
                size='sm'
                // resize={''}
                overflow="auto"
                defaultValue={item.task}
                autoFocus
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
                  <Button onClick={editorButtonHandler} color={'white'} backgroundColor={'#2a9d8f'}>
                    <EditIcon></EditIcon>
                  </Button>
              )}

              <Button onClick={deleteItemHandler} color={'white'} backgroundColor={'#e63946'}>
                <DeleteIcon></DeleteIcon>
              </Button>
              {/* <Button onClick={closeModalHandler} color={'white'} backgroundColor={'#457b9d'}>Закрыть</Button> */}
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}