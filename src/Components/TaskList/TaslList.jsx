import React from "react"
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useContext } from "react"
import Context from '../../context/todoContext'
import { Box, Input, InputGroup, Badge } from "@chakra-ui/react";
import Task from "../Task/Task"

export default function TaslList({ activeMenu }) {

  useEffect(() => {
    console.log("----Render TaskList");

  })
  const activeBage = ((activeMenu) => {
    if (activeMenu === 'all') return { text: 'Все Задачи', color: '#457b9d' }
    if (activeMenu === 'done') return { text: 'Завершено', color: '#2a9d8f' }
    if (activeMenu === 'work') return { text: 'К Выполнению', color: '#f4a261' }
  })(activeMenu)

  const { visibleList } = useContext(Context);
  return (
    <Box border={'1px'} padding={'.5rem'} borderRadius={'8px'} w={["90%", "70%", '60%']} m={'auto'} mt={'2rem'}>
      <Badge textAlign={'center'} backgroundColor={activeBage.color} color={'white'}>{activeBage.text}</Badge>
      {visibleList.length
        ?
        (visibleList.map((el, ind) => (
          <Task item={el} key={uuidv4()} data={ind}></Task>
        )))
        :
        (
          <InputGroup
            w={'50%'}
            m={'auto'}
            mt={'2rem'}
            border='2px' borderColor='gray.400'
            borderRadius={'8px'}
          >

            <Input
              fontWeight={'500'}
              readOnly={true}
              defaultValue={'Нет Задач'}
              textDecoration={'none'}
              textAlign={'center'} />
          </InputGroup>
        )
      }
    </Box>
  )
}