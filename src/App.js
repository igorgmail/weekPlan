import React from 'react';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Context from '../src/context/todoContext'
import './App.css';

import Home from './Components/Home/Home';



function App() {
  console.log("-----Render APP");
  const dataTask = {
    task: 'First task',
    status: 'done',
    dataEnd: new Date(),
  }

  let dataTaskList = []

  dataTaskList.push(dataTask);


  return (

    <Routes>
      <Route path='/' element={<Home dataTaskList={dataTaskList} />} />
    </Routes>


  );
}

export default App;
