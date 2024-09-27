import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar></NavBar>
      <Routes>

<Route path="/" element={<Home></Home>} ></Route>

      </Routes>
    </div>
  )
}

export default App
