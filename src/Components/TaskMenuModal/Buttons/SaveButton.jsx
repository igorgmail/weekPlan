import React from "react"
import style from '../style.module.css'

import { Button } from "@chakra-ui/react"


export default function SaveButton({ saveEditorHandler }) {
  return (
    <Button
      className={[style.buutonSave, style.buutonSave2].join(' ')}
      isActive={false} onClick={saveEditorHandler} color={'white'} backgroundColor={'#2b6cb0'}>Сохранить</Button>

  )
}