import React from "react"
import { useEffect, useContext } from "react"

import { Container, Button, Grid, GridItem } from '@chakra-ui/react'

import AddTaskModal from "../AddTaskModal/AddTaskModal"
import Context from '../../context/todoContext'
export default function Menu({ setActiveMenu }) {


  const { setFilterNameState } = useContext(Context)


  useEffect(() => {
    console.log("----Render Menu");
  })


  return (
    <>
    <Container>

        <Grid templateColumns={['1fr 1fr', '1fr 1fr 1fr 1fr']} gap={2}>
          <GridItem w='100%' h='10' rowSpan={1} colSpan={['2', '1']}>
            <Button w={'100%'} backgroundColor={'#457b9d'} color={'white'} onClick={() => { setFilterNameState('none'); setActiveMenu('all') }}>Все задачи</Button>
          </GridItem>
          <GridItem w='100%' h='10'  >
            <Button w={'100%'} backgroundColor={'custom.red.100'} color={'white'} size='md' onClick={() => { setFilterNameState('work'); setActiveMenu('work') }}>Сделать</Button>
          </GridItem>
          <GridItem w='100%' h='10'  >
            <Button w={'100%'} backgroundColor={'custom.yellow.100'} color={'white'} size='md' onClick={() => { setFilterNameState('done'); setActiveMenu('done') }}>Завершенно</Button>
          </GridItem>
          <GridItem w='100%' h='10' rowSpan={1} colSpan={['2', '1']} >

            <AddTaskModal></AddTaskModal>
          </GridItem>
        </Grid>

    </Container>
    </>
  )
}