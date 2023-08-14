import React, { useEffect, useContext, useState } from "react"

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Button, Flex } from "@chakra-ui/react"
import { SettingsIcon } from '@chakra-ui/icons'

import Context from '../../context/todoContext'
// Button
import CloseButton from "./Button/CloseButton" 

// actions
import actions from "../../reducers/actionsGenerate"


const AllTaskSettingModal = React.memo(({ isModalOpen, openModal, closeModal }) => {
  const { dispatch, visibleList } = useContext(Context)
  const [statusAll, setStatusAll] = useState()
  console.log("▶ ⇛ statusAll:", statusAll);
  // const { isOpen, onOpen, onClose } = useDisclosure()

  const checkAllHandler = (statusCheckAll) => {
    console.log("▶ ⇛ statusCheckAll:", statusCheckAll);
    // Отмечаем все
    if (statusCheckAll === 'not_all_done') {
      dispatch(actions.checkAllDone(true))
      closeModal()
    }
    // Снимаем метки со всех
    if (statusCheckAll === 'all_done') {
      dispatch(actions.checkAllDone(false))
      closeModal()
    }


  }
  const deleteAllHandler = () => {
    console.log("DELETE ALl Handler");
    closeModal()
  }

  useEffect(() => {
    console.log("Modal All Task Setting REnder");
  })

  useEffect(() => {
    const statusAllDoneForModal = !visibleList.some((el) => el.status === 'work')
    console.log("▶ ⇛ statusAllDoneForModal:", statusAllDoneForModal);
    setStatusAll((statusAll) => {
      if (statusAllDoneForModal) return 'all_done'
      return 'not_all_done'
    })
  })


  return (
    <>
      <SettingsIcon onClick={openModal} cursor={'pointer'} fontSize={'1.3rem'}></SettingsIcon>

      <Modal onClose={closeModal} isOpen={isModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent m={'auto 1rem'}>
          <ModalHeader>Все Задачи</ModalHeader>
          <ModalCloseButton />
          <ModalBody m={3}>

            <Flex w={'100%'} justifyContent={'space-between'} flexDirection={'column'} gap={4}>
              <Button onClick={() => checkAllHandler(statusAll)} color={'white'} backgroundColor={'#2a9d8f'}>
                {statusAll === 'all_done' ? ('Отменить Все') : ('Выделить Все')
                }
              </Button>
              <Button onClick={() => deleteAllHandler()} color={'white'} backgroundColor={'#f4a261'}>Удалить все</Button>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <CloseButton closeModal={closeModal}></CloseButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
})

export default AllTaskSettingModal