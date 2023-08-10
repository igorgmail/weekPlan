import React from "react"
import { useState, useEffect, useContext } from "react"
import { Button, Flex, HStack, VStack, Input, InputGroup, Spacer } from "@chakra-ui/react"
import { DeleteIcon, HamburgerIcon, CheckIcon } from '@chakra-ui/icons'

import TaskMenu from "../TaskMenu/TaskMenu"
import Context from "../../context/todoContext"

export default function Task({ item, data }) {
  const { dispatch } = useContext(Context)

  const [inputRead, setInputRead] = useState(true) // Инпут только для чтения переключение (readOnly)
  const inputToogle = () => {
    setInputRead((current) => !current)
  }

  useEffect(() => {
    console.log("----Render Task");
  }, [])

  const toogleStatusButton = (e) => {
    const dataItem = e.target.closest('.task-input').dataset.item
    dispatch({
      type: 'TOGGLE_STATUS',
      payload: dataItem
    })
    dispatch({
      type: 'SORT_BY_DONE'
    })
  }


  return (
    <Flex
      className={"task-input"}
      data-item={data}
      flexDirection={['column', 'column', 'row']} justifyContent={'center'} alignItems={'center'} w={'100%'} gap={'8px'} mb={'10px'}

    >

        <InputGroup

          w={'100%'}
          m={'auto'}
          border='2px' borderColor='gray.400'
          borderRadius={'8px'}
        >
          {item.status === 'done' ?
            (
              <Input
                readOnly={inputRead}
                defaultValue={item.task}
                textDecoration={'line-through'}
              backgroundColor={'#baf3d8'}
              />
            )
            :
            (
              <Input
                fontWeight={'500'}
                readOnly={inputRead}
                defaultValue={item.task}
              textDecoration={'none'}
              />
          )
        }
      </InputGroup>

      <Flex w={['100%', '100%', 'auto']} gap={'8px'}>
        {item.status === 'done' ? (
          <Button onClick={toogleStatusButton} colorScheme='teal' variant='outline' p={'0'}>
              <CheckIcon color='green.500' boxSize={6} />
            </Button>
        ) : (
          <Button onClick={toogleStatusButton} p={'0'}>
            <CheckIcon boxSize={6} opacity={'0.5'} />
          </Button>
        )}

        <Spacer flex='1'></Spacer>
        <TaskMenu item={item} data={data} />
      </Flex>

    </Flex >
  )
}