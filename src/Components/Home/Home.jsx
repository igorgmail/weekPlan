import React, { useEffect } from "react"
import { useState, useReducer, useRef } from 'react';

import Context from '../../context/todoContext'

import Navbar from "../Navbar/Navbar"
import Menu from "../Menu/Menu"
import TaslList from "../TaskList/TaslList"
import reducer from '../../reducers/reducer'


export default function Home({ dataTaskList }) {
  console.log("▶ ⇛ dataTaskList:", dataTaskList);

  const [addInputVisible, setAddInputVisible] = useState(false)

  const [stateList, dispatch] = useReducer(reducer, dataTaskList)
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
    console.log("----stateList Home", stateList);
    localStorage.setItem('wp_day', JSON.stringify(stateList));

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
      {/* {addInputVisible &&
        <AddInput showInputHandler={showInputHandler} />
      } */}
      <TaslList activeMenu={activeMenu} />
    </Context.Provider>

  )
}