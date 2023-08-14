import React, { useEffect, useState, useRef, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import Context from '../../context/todoContext'

// import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Flex, Textarea, Badge } from "@chakra-ui/react"

import textCoctroller from "../../controller/textCoctroller"

// actions
import actions from "../../reducers/actionsGenerate"

// Buttons
import SaveButton from "./Buttons/SaveButton"
import EditButton from "./Buttons/EditButton"
import DeleteButton from "./Buttons/DeleteButton"
import CloseButton from "./Buttons/CloseButton"
export default function AboutTaskModal({ itemDataForModal, isModalOpen, closeModal }) { // myData, item, data,
  // console.log("▶ ⇛ myData:", myData);
  const { dispatch, visibleList } = useContext(Context)
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
    const itemIndex = itemDataForModal.index
    if (textCoctroller.isEmpty(textValue)) {
      dispatch(actions.updatiItem({ itemIndex, textValue }))
    } else {
      return
    }
  }

  const deleteItemHandler = (index) => {
    dispatch(actions.deleteItem(index))
  }

  // Закрывайте модальное окно и предотвращайте переход назад при нажатии кнопки "назад"
  const handlePopstate = (event) => {
    if (isModalOpen) {
      closeModalHandler();
    } else {
      navigate(-1);
    }
  };

  //TODO Для смартфонов закрытие модалки по кнопке назад

  useEffect(() => {
    // Добавьте слушатель события popstate при монтировании компонента
    window.addEventListener('popstate', handlePopstate);
    console.log("▶ ⇛ popstate:");

    // Удалите слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [isModalOpen, closeModal]);


  // Помещаем курсор в конец текста в textarea
  useEffect(() => {
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
        <ModalContent m={'auto 1rem'}>
          <ModalHeader>
            <Badge backgroundColor={itemDataForModal.status === 'done' ? '#2a9d8f' : '#f4a261'}>{itemDataForModal.status === 'done' ? 'Завершенно' : 'Сделать'}</Badge>
          </ModalHeader>
          <ModalCloseButton fontSize={'1.2rem'} />
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
                <>
                  <SaveButton saveEditorHandler={saveEditorHandler}></SaveButton>
                  <CloseButton closeModalHandler={closeModalHandler}></CloseButton>
                </>

              ) : (<>
                <EditButton editorButtonHandler={editorButtonHandler}></EditButton>
                <DeleteButton deleteItemHandler={deleteItemHandler} index={itemDataForModal.index}></DeleteButton>
              </>

              )}
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}