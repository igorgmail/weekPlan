import React from "react"
import { useRef, useEffect, useState, useContext } from "react"
import './style.css'
import Context from '../../context/todoContext'
import { Flex, Stack, Input, InputGroup, InputRightElement, Button, Text } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'


export default function AddInput({ showInputHandler }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null)
  const { dispatch, setOriginStateList } = useContext(Context)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    console.log("----Render AddInput");
  }, [])

  const addHandler = () => {
    dispatch({
      type: 'ADDTASK',
      payload: {
        task: inputValue,
        status: 'work',
        dataEnd: Date.now()
      }
    })
    showInputHandler()
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addHandler()
    }
  }

  return (
    <Flex justifyContent={'center'} alignItems={'center'} mt='2rem' w={'100%'}>
      <Stack w={'60%'}>
        <Text fontSize='1rem' as='u' textAlign={'center'} fontWeight={'500'}>Добавление Новой Задачи</Text>
        <InputGroup
          w={'100%'}
          m={'auto'}
          border='2px' borderColor='gray.400'
          borderRadius={'8px'}
        >

          <Input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />



          <InputRightElement>
            <Button
              type="submit"
              onClick={() => addHandler()}
            >
              <AddIcon color='green.500' />

            </Button>
          </InputRightElement>

        </InputGroup>
      </Stack>
      <hr></hr>
    </Flex>
  )
}