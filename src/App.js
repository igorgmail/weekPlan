import React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Context from '../src/context/todoContext'
import './App.css';

import Home from './Components/Home/Home';



function App() {
  console.log("-----Render APP");
  // const dataTask = {
  //   task: 'Это первая тестовая задача',
  //   status: 'done',
  //   dataEnd: new Date(),
  // }

  // let dataTaskList = [{
  //   task: 'Это первая тестовая задача',
  //   status: 'done',
  //   dataEnd: new Date(),
  // }]
  const dayDataFromLocal = localStorage.getItem('wp_day');

  let dataTaskList = []
  console.log("▶ ⇛ dayDataFromLocal:", dayDataFromLocal);
  if (dayDataFromLocal) {
    dataTaskList = JSON.parse(dayDataFromLocal)
  } else {
    dataTaskList = [{
      task: 'Это первая тестовая задача',
      status: 'done',
      dataEnd: new Date(),
    }]
  }
  useEffect(() => {

  }, [])

  return (

    <Routes>
      <Route path='/' element={<Home dataTaskList={dataTaskList} />} />
    </Routes>


  );
}

export default App;
