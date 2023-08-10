import React, { useEffect } from "react"
import { useState, useReducer, useRef } from 'react';

import Context from '../../context/todoContext'

import Navbar from "../Navbar/Navbar"
import Menu from "../Menu/Menu"
import TaslList from "../TaskList/TaslList"
import AddInput from "../AddInput/AddInput";
import reducer from '../../reducers/reducer'
import filterReducer from '../../reducers/filterReducer'
import { Center } from "@chakra-ui/react";


export default function Home({ dataTaskList }) {

  const [addInputVisible, setAddInputVisible] = useState(false)

  const [stateList, dispatch] = useReducer(reducer, dataTaskList)
  // const [filterNameState, dispatchFilter] = useReducer(filterReducer, [])
  const [filterNameState, setFilterNameState] = useState('none')

  const [activeMenu, setActiveMenu] = useState('all')

  let isPosibleSpaceDown = useRef(true)

  const showInputHandler = () => {
    setAddInputVisible((current) => !current)
    isPosibleSpaceDown = !isPosibleSpaceDown
  }

  const visibleList = ((filterNameState) => {
    console.log("▶ ⇛ filterNameState:", filterNameState);
    if (filterNameState === 'none') return stateList
    if (filterNameState === 'done') return stateList.filter((el) => el.status === 'done')
    if (filterNameState === 'work') return stateList.filter((el) => el.status === 'work')
  })(filterNameState)

  useEffect(() => {

    console.log("----Render Home");

  })

  useEffect(() => {

    const handleKeyPress = (event) => {
      // event.preventDefault()
      if (event.key === ' ' && event.target.tagName !== 'textarea') {
        console.log("▶ ⇛ isPosibleSpaceDown:", isPosibleSpaceDown);
        if (addInputVisible) return
        // Выполните вашу функцию здесь
        console.log('Пробел нажат');
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (

    <Context.Provider value={{ visibleList, dispatch, setFilterNameState, isPosibleSpaceDown }}>
      <Navbar />
      <Menu showInputHandler={showInputHandler} setActiveMenu={setActiveMenu} />
      {addInputVisible &&
        <AddInput showInputHandler={showInputHandler} />
      }
      <TaslList activeMenu={activeMenu} />
    </Context.Provider>

  )
}