import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';

function App() {
  console.log("-----Render APP");

  const dataTaskList = (() => {
    const dayDataFromLocal = localStorage.getItem('wp_day');
    let dataTaskList = []
    if (dayDataFromLocal) {
      dataTaskList = JSON.parse(dayDataFromLocal)
    } else {
      dataTaskList = [{
        task: 'Это первая тестовая задача',
        status: 'done',
        dataEnd: new Date(),
      }]
    }
    return dataTaskList
  })()

  return (
    <Routes>
      <Route path='/' element={<Home dataTaskList={dataTaskList} />} />
    </Routes>
  );
}

export default App;
