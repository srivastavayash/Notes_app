import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Signup,ProtectedRoute } from "./Componenets/index"
import { UserAuthContextProvider } from './Context/UserAuthContext'
function App() {
  return (

    <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
      </Routes>
    </UserAuthContextProvider>

  )
}

export default App