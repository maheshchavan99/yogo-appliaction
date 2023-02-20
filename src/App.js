import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

import { Routes, Route } from "react-router-dom";
import BookingYoga from './components/bookingclass/BookingYoga';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/booking' element={<BookingYoga/>} />
      </Routes>
    </div>
  )
}

export default App
