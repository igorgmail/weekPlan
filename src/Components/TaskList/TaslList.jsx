import React from "react"
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useContext } from "react"
import Context from '../../context/todoContext'
import { Box, Input, InputGroup } from "@chakra-ui/react";
import Task from "../Task/Task"

export default function TaslList() {

  const { dispatch } = useContext(Context)
  useEffect(() => {
    console.log("----Render TaskList");

  })


  const { visibleList } = useContext(Context);
  return (
    <Box>
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