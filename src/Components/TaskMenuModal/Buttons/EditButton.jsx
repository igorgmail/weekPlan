import React from "react"
import style from '../style.module.css'

import { Button } from "@chakra-ui/react"
import { EditIcon } from '@chakra-ui/icons'

export default function EditButton({ editorButtonHandler }) {
  return (
    <Button
      onClick={editorButtonHandler} color={'white'} backgroundColor={'#2b6cb0'}>
      <EditIcon></EditIcon>
    </Button>
  )
}