import React, { useEffect, useRef, useContext } from "react"
import Context from '../../context/todoContext'

import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Button, Flex, Textarea } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

import textCoctroller from "../../controller/textCoctroller"
export default function AddTaskModal() {

  const { dispatch } = useContext(Context)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const modalTextareaRef = useRef(null)

  const addTaskHandler = () => {
    const textTask = modalTextareaRef.current.value

    if (textCoctroller.isEmpty(textTask)) {
      dispatch({
        type: 'ADDTASK',
        payload: textTask
      })
      onClose()
    } else return
  }
  useEffect(() => {
    console.log("Modal Add REnder");
  })



  return (
    <>
      <Button
        w={'100%'}
        colorScheme='green' size='md'
        onClick={onOpen}
      >
        <AddIcon />
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody data-modal-index={'data'}>
            <Textarea
              ref={modalTextareaRef}
              size='sm'
              resize={'vertical'}
              overflow="auto"
              autoFocus
            // focusBorderColor={'red.500'}
            // isInvalid={areaEmpty}
            >
            </Textarea>
          </ModalBody>
          <ModalFooter>
            <Flex w={'100%'} justifyContent={'space-between'}>
              <Button onClick={() => addTaskHandler()} color={'white'} backgroundColor={'#2a9d8f'}>Добавить</Button>
              <Button onClick={onClose} color={'white'} backgroundColor={'#f4a261'}>Отменить</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}