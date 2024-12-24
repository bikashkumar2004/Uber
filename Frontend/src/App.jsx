import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptionSignup from './pages/CaptionSignup'
import CaptionLogin from './pages/CaptionLogin'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/caption-signup' element={<CaptionSignup/>}/>
        <Route path='/caption-login' element={<CaptionLogin/>}/>
        

      </Routes>
    </div>
  )
}

export default App
