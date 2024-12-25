import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptionSignup from './pages/CaptionSignup'
import CaptionLogin from './pages/CaptionLogin'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptionHome from './pages/CaptionHome'
import CaptionProtectedWrapper from './pages/CaptionProtectedWrapped'
import CaptionLogout from './pages/CaptionLogout'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/caption-signup' element={<CaptionSignup />} />
        <Route path='/caption-login' element={<CaptionLogin />} />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path='/user/logout' element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />
        <Route path='/caption-home' element={
          <CaptionProtectedWrapper>
            <CaptionHome />
          </CaptionProtectedWrapper>
        } />
        <Route path='/caption-logout' element={
          <CaptionProtectedWrapper>
            <CaptionLogout />
          </CaptionProtectedWrapper>
        } />


      </Routes>
    </div>
  )
}

export default App
