import React from "react"
import { useState, useEffect, useContext } from "react"
import { Button, Flex, HStack, Input, InputGroup } from "@chakra-ui/react"
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons'

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
    const dataItem = e.target.closest('.chakra-stack').dataset.item
    console.log("▶ ⇛ dataItem:", dataItem);
    dispatch({
      type: 'TOGGLE_STATUS',
      payload: dataItem
    })
    dispatch({
      type: 'SORT_BY_DONE'
    })
  }


  return (
    <Flex justifyContent={'center'} alignItems={'center'} mt='2rem' w={'100%'}>
      <HStack w={"90%"} data-item={data} >
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
              // textDecoration={'none'}
              />
            )
            :
            (
              <Input
                fontWeight={'500'}
                readOnly={inputRead}
                defaultValue={item.task}
                textDecoration={'none'}
              // textDecoration={'none'}
              />
            )

          }


        </InputGroup>
        {item.status === 'done' ? (
          <>
            <Button onClick={toogleStatusButton} colorScheme='teal' variant='outline'>
              <CheckIcon color='green.500' boxSize={6} />
            </Button>
            <Button >
              <DeleteIcon boxSize={6} color='red.500' />
            </Button>
          </>

        ) : (<>
          <Button onClick={toogleStatusButton}>
            <CheckIcon boxSize={6} opacity={'0.5'} />
          </Button>
          <Button >
            <DeleteIcon boxSize={6} color='red.500' />
          </Button>
        </>

        )}

      </HStack >
    </Flex >
  )
}