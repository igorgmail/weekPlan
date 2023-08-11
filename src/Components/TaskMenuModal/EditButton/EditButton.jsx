import React from "react"
import style from '../style.module.css'


// import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Button, Flex, Textarea, Badge } from "@chakra-ui/react"
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export default function EditButton({ editorButtonHandler }) {
  return (
    <Button
      onClick={editorButtonHandler} color={'white'} backgroundColor={'#2b6cb0'}>
      <EditIcon></EditIcon>
    </Button>
  )
}