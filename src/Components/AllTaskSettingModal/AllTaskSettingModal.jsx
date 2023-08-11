import React, { useEffect, useRef, useContext } from "react"
import Context from '../../context/todoContext'

import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Button, Flex, Textarea } from "@chakra-ui/react"
import { SettingsIcon } from '@chakra-ui/icons'

import textCoctroller from "../../controller/textCoctroller"



export default function AllTaskSettingModal({ isModalOpen, closeModal }) {
  const { dispatch } = useContext(Context)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const modalTextareaRef = useRef(null)

  const closeModalHandler = () => {

  }

  useEffect(() => {
    console.log("Modal Add REnder");
  })



  return (
    <>


      {/* <Button
        w={'100%'}
        size='md'
        onClick={onOpen}
      > */}
      <SettingsIcon onClick={onOpen}></SettingsIcon>
      {/* </Button> */}

      <Modal onClose={onClose} isOpen={isOpen} isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Все Задачи</ModalHeader>
          <ModalCloseButton />
          <ModalBody m={3}>

            <Flex w={'100%'} justifyContent={'space-between'} flexDirection={'column'} gap={4}>
              <Button onClick={() => console.log()} color={'white'} backgroundColor={'#2a9d8f'}>Ометить все</Button>
              <Button onClick={onClose} color={'white'} backgroundColor={'#f4a261'}>Удалить все</Button>
            </Flex>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}