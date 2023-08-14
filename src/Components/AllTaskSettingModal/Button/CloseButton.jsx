import React from "react"

import { Button } from "@chakra-ui/react"
export default function CloseButton({ closeModal }) {
  return (
    <Button
      m={'auto'}
      isActive={false} onClick={closeModal} color={'white'} backgroundColor={'#e6838b'}>Закрыть</Button>
  )
}