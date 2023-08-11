import React from "react"
import { useState, useEffect, useContext } from "react"
import { Button, Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { CheckIcon } from '@chakra-ui/icons'

import TaskMenuModal from "../TaskMenuModal/TaskMenuModal"
import Context from "../../context/todoContext"
// import TestModul from "../TestModul/TestModul"

export default function Task({ itemData }) {
  const { dispatch } = useContext(Context)
  const item = itemData[0]
  const index = itemData[1]

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemDataForModal, setItemDataForModal] = useState({ text: null, index: null })

  const openModal = (e) => {
    const itemIndex = e.target.dataset.itemIndex;
    const itemStatus = e.target.dataset.itemStatus;
    const itemText = e.target.value
    const newData = { text: itemText, index: itemIndex, status: itemStatus };
    setItemDataForModal(newData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    console.log("----Render Task");
  })

  const toogleStatusButton = (e) => {
    const dataItem = e.target.closest('.task-input').dataset.itemIndex
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
      data-item-index={index}
      flexDirection={['column', 'column', 'row']} justifyContent={'center'} alignItems={'center'} w={'100%'} gap={'8px'} mb={'10px'}
    >

      {/* {isModalOpen && <TestModul myData={itemData} />} */}
      <InputGroup
          w={'100%'}
          m={'auto'}
          border='2px' borderColor='gray.400'
          borderRadius={'8px'}
        >

        <Input
          data-item-index={index}
          data-item-status={item.status}
          onClick={openModal}
          readOnly
          defaultValue={item.task}
          cursor={'pointer'}
          fontWeight={'500'}
          textDecoration={item.status === 'done' ? 'line-through' : 'none'}
          backgroundColor={item.status === 'done' ? '#baf3d8' : 'none'}
        />
        {isModalOpen &&
          <TaskMenuModal itemDataForModal={itemDataForModal} isModalOpen={isModalOpen} closeModal={closeModal} />}

        <InputRightElement>
          <Button onClick={toogleStatusButton} variant={'outline'} borderColor={'rgb(160, 174, 192)'}>
            <CheckIcon fontSize={'1.2rem'} color={item.status === 'done' ? 'green.500' : ''} />
          </Button>
        </InputRightElement>
      </InputGroup>


      <Flex w={['100%', '100%', 'auto']} gap={'8px'}>

      </Flex>

    </Flex >
  )
}