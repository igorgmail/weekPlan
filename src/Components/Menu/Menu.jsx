import React from "react"
import { useEffect, useContext } from "react"

import { Container, Flex, Button, Center } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import Context from '../../context/todoContext'
export default function Menu({ showInputHandler, setActiveMenu }) {


  const { dispatch, setFilterNameState } = useContext(Context)

  const filterDoneHandler = () => {
    dispatch({
      type: 'FILTER_BY_DONE'
    })
  }

  const filterAllHandler = () => {
    dispatch({
      type: 'FILTER_BY_All'
    })
  }






  useEffect(() => {
    console.log("----Render Menu");
  }, [])


  return (
    <>
    <Container>
        <Flex
          w={['80%', '100%']}
          flexDirection={['column', 'row']}
          justifyContent={'center'}
          gap={['0.5rem', '1rem', '1.5rem']}
          flexWrap={'wrap'}
          m={'auto'}
        >

          <Button backgroundColor={'#457b9d'} color={'white'} size='md' onClick={() => { setFilterNameState('none'); setActiveMenu('all') }}>Все задачи</Button>
          <Button backgroundColor={'#f4a261'} color={'white'} size='md' onClick={() => { setFilterNameState('work'); setActiveMenu('work') }}>К выполнению</Button>
          <Button backgroundColor={'#2a9d8f'} color={'white'} size='md' onClick={() => { setFilterNameState('done'); setActiveMenu('done') }}>Завершенно</Button>
        <Button
          colorScheme='green' size='md'
          onClick={showInputHandler}
        >
          <AddIcon />
        </Button>
      </Flex>
    </Container>
    </>
  )
}