import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
