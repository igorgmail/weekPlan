import React, { useEffect } from "react"
import { useState, useReducer, useCallback } from 'react';

import Context from '../../context/todoContext'

import Navbar from "../Navbar/Navbar"
import Menu from "../Menu/Menu"
import TaslList from "../TaskList/TaslList"
import reducer from '../../reducers/reducer'


export default function Home({ dataTaskList }) {

  // const [addInputVisible, setAddInputVisible] = useState(false)

  const [stateList, dispatch] = useReducer(reducer, dataTaskList)

  const [filterNameState, setFilterNameState] = useState('none')
  const [activeMenu, setActiveMenu] = useState('all')

  // let isPosibleSpaceDown = useRef(true) // Для Отслеживаения нажатия пробел

  // const showInputHandler = () => {
  //   setAddInputVisible((current) => !current)
  //   isPosibleSpaceDown = !isPosibleSpaceDown
  // }
  const setActiveMenuHandler = useCallback((value) => {
    if (value === 'all') {
      setFilterNameState('none'); setActiveMenu('all')
    }
    if (value === 'done') {
      setFilterNameState('done'); setActiveMenu('done')
    }
    if (value === 'work') {
      setFilterNameState('work'); setActiveMenu('work')
    }

  }, [])

  const visibleList = ((filterNameState) => {
    if (filterNameState === 'none') return stateList
    if (filterNameState === 'done') return stateList.filter((el) => el.status === 'done')
    if (filterNameState === 'work') return stateList.filter((el) => el.status === 'work')
  })(filterNameState)
  console.log("▶ ⇛ visibleList:", visibleList);


  useEffect(() => {

    console.log("----Render Home");
    localStorage.setItem('wp_day', JSON.stringify(stateList));

  })

  // // Слушатель нажатия пробела
  // useEffect(() => {

  //   const handleKeyPress = (event) => {
  //     if (event.key === ' ' && event.ctrlKey && event.target.tagName !== 'textarea') {
  //       console.log("▶ ⇛ isPosibleSpaceDown:", isPosibleSpaceDown);
  //       if (addInputVisible) return
  //       // Выполните вашу функцию здесь
  //       console.log('Пробел нажат');
  //     }
  //   };

  //   document.addEventListener('keydown', handleKeyPress);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyPress);
  //   };
  // }, []);

  return (

    <Context.Provider value={{ visibleList, dispatch }}>
      <Navbar />
      <Menu setActiveMenuHandler={setActiveMenuHandler} />
      <TaslList activeMenu={activeMenu} />
    </Context.Provider>

  )
}