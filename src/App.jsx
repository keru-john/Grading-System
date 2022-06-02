import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import Home from './components/Home'
import Login from './components/Login'
import React, { createContext } from 'react'
import Register from './components/Register'
import Navbar from './components/Navbar'
import ForgotPassword from './components/ForgotPassword'
import ChangePassword from './components/ChangePassword'

export const Auth = createContext({email: '', password: ''})

function App() {

  const [users, setUsers] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState(null)
  const [changePasswordEmail, setChangePasswordEmail] = React.useState('')

  return (
    <Auth.Provider value={{users, setUsers, currentUser, setCurrentUser, changePasswordEmail, setChangePasswordEmail}}>
      <Box fontFamily={'sans-serif'}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/reset-password' element={<ForgotPassword />} />
            <Route path='/change-password' element={<ChangePassword />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Auth.Provider>
  )
}

export default App
