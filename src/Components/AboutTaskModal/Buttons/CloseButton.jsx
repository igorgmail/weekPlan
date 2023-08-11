import React from "react"
import style from '../style.module.css'

import { Button } from "@chakra-ui/react"
export default function CloseButton({ closeModalHandler }) {
  return (
    <Button
      isActive={false} onClick={closeModalHandler} color={'white'} backgroundColor={'#e6838b'}>Закрыть</Button>
  )
}