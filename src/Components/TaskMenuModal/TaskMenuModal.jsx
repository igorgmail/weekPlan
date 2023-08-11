import React, { useEffect, useState, useRef, useContext } from "react"
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import Context from '../../context/todoContext'

// import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Button, Flex, Textarea, Badge } from "@chakra-ui/react"
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

import SaveButton from "./SaveButton/SaveButton"
import EditButton from "./EditButton/EditButton"
export default function TaskMenuModal({ itemDataForModal, isModalOpen, closeModal }) { // myData, item, data,
  // console.log("▶ ⇛ myData:", myData);
  const { dispatch, visibleList } = useContext(Context)
  console.log("▶ ⇛ visibleList:", visibleList);
  const navigate = useNavigate()

  const [editorButton, setEditorButton] = useState(false)
  const textareaRef = useRef(null)
  const modalBodyRef = useRef(null)


  const editorButtonHandler = (e) => {
    e.target.blur()
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

  // Закрывайте модальное окно и предотвращайте переход назад при нажатии кнопки "назад"
  const handlePopstate = (event) => {
    if (isModalOpen) {
      closeModalHandler();
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    // Добавьте слушатель события popstate при монтировании компонента
    window.addEventListener('popstate', handlePopstate);
    console.log("▶ ⇛ popstate:");

    // Удалите слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [isModalOpen, closeModal]);

  useEffect(() => {
    // Помещаем курсор в конец текста в textarea
    if (textareaRef.current) {
      textareaRef.current.focus(); // Активация фокуса
      const textLength = textareaRef.current.value.length;

      // Установка позиции курсора в конец текста
      textareaRef.current.setSelectionRange(textLength, textLength);
    }
  }, [editorButton]);

  useEffect(() => {
    console.log('----TASK Modar Render');
  })
  return (
    <>
      <Modal onClose={closeModalHandler} isOpen={isModalOpen} isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Badge backgroundColor={itemDataForModal.status === 'done' ? '#2a9d8f' : '#f4a261'}>{itemDataForModal.status === 'done' ? 'Завершенно' : 'Сделать'}</Badge>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody ref={modalBodyRef}>
            {editorButton ? (
              <Textarea
                ref={textareaRef}
                size='sm'
                overflow="auto"
                defaultValue={itemDataForModal.text}
                autoFocus
              >
              </Textarea>
            ) : (
                itemDataForModal.text
            )}

          </ModalBody>
          <ModalFooter>
            <Flex w={'100%'} justifyContent={'space-between'}>
              {editorButton ? (
                <SaveButton saveEditorHandler={saveEditorHandler}></SaveButton>

                // <Button
                //   className={[style.buutonSave, style.buutonSave2].join(' ')}
                //   isActive={false} onClick={saveEditorHandler} color={'white'} backgroundColor={'custom.green.100'}>Сохранить</Button>
              ) : (
                  <EditButton editorButtonHandler={editorButtonHandler}></EditButton>

                  // <Button
                  //   onClick={editorButtonHandler} color={'white'} backgroundColor={'#2a9d8f'}>
                  //   <EditIcon></EditIcon>
                  // </Button>
              )}

              <Button onClick={deleteItemHandler} color={'white'} backgroundColor={'#e63946'}>
                <DeleteIcon></DeleteIcon>
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}