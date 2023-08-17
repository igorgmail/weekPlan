import React from "react"
import { useEffect } from "react"

import { Container, Button, Grid, GridItem } from '@chakra-ui/react'

import AddTaskModal from "../AddTaskModal/AddTaskModal"
const Menu = React.memo(({ setActiveMenuHandler }) => {

  useEffect(() => {
    console.log("----Render Menu");
  })


  return (
    <>
    <Container>

        <Grid templateColumns={['1fr 1fr 1fr', '1fr 1fr 1fr 1fr']} gap={2}>
          <GridItem w='100%' h='10' rowSpan={1} >
            <Button w={'100%'} backgroundColor={'#006d77'} color={'white'} onClick={() => { setActiveMenuHandler('all') }} fontSize={['.8rem', '1rem']}>Все задачи</Button>
          </GridItem>
          <GridItem w='100%' h='10'  >
            <Button w={'100%'} backgroundColor={'#e07a5f'} color={'white'} size='md' onClick={() => { setActiveMenuHandler('work') }} fontSize={['.8rem', '1rem']}>Сделать</Button>
          </GridItem>
          <GridItem w='100%' h='10'  >
            <Button w={'100%'} backgroundColor={'#8d99ae'} color={'white'} size='md' onClick={() => { setActiveMenuHandler('done') }} fontSize={['.8rem', '1rem']}>Завершенно</Button>
          </GridItem>
          <GridItem w={['30%', '100%']} m={'auto'} h='10' rowSpan={1} colSpan={['3', '1']} >

            <AddTaskModal></AddTaskModal>
          </GridItem>
        </Grid>

    </Container>
    </>
  )
})

export default Menu