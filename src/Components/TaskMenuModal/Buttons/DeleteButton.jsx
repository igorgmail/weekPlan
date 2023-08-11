import React from "react"
import style from '../style.module.css'

import { Button } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'

export default function DeleteButton({ deleteItemHandler, index }) {
  return (
    <Button onClick={() => deleteItemHandler(index)} color={'white'} backgroundColor={'#e63946'}>
      <DeleteIcon></DeleteIcon>
    </Button>
  )
}