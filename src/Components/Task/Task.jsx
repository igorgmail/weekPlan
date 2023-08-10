import React from "react"
import { useState, useEffect, useContext } from "react"
import { Button, Flex, HStack, VStack, Input, InputGroup, Spacer, InputRightElement } from "@chakra-ui/react"
import { DeleteIcon, HamburgerIcon, CheckIcon } from '@chakra-ui/icons'

import TaskMenu from "../TaskMenuModal/TaskMenuModal"
import Context from "../../context/todoContext"

export default function Task({ item, data }) {
  const { dispatch } = useContext(Context)
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [inputRead, setInputRead] = useState(true) // Инпут только для чтения переключение (readOnly)
  // const inputToogle = () => {
  //   setInputRead((current) => !current)
  // }
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
  const modalShowHandler = () => {

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


        <Input
          onClick={openModal}
          readOnly
          defaultValue={item.task}
          cursor={'pointer'}
          fontWeight={'500'}
          textDecoration={item.status === 'done' ? 'line-through' : 'none'}
          backgroundColor={item.status === 'done' ? '#baf3d8' : 'none'}
        />
        <TaskMenu item={item} data={data} isModalOpen={isModalOpen} closeModal={closeModal} />

        <InputRightElement>
          <Button onClick={toogleStatusButton} variant={'outline'} borderColor={'rgb(160, 174, 192)'}>
            <CheckIcon fontSize={'1.2rem'} color={item.status === 'done' ? 'green.500' : ''} />
          </Button>
        </InputRightElement>
      </InputGroup>


      <Flex w={['100%', '100%', 'auto']} gap={'8px'}>
        {/* {item.status === 'done' ? (
          <Button onClick={toogleStatusButton} colorScheme='teal' variant='outline' p={'0'}>
              <CheckIcon color='green.500' boxSize={6} />
            </Button>
        ) : (
          <Button onClick={toogleStatusButton} p={'0'}>
            <CheckIcon boxSize={6} opacity={'0.5'} />
          </Button>
        )} */}

        <Spacer flex='1'></Spacer>
        <TaskMenu item={item} data={data} />
      </Flex>

    </Flex >
  )
}