import React from 'react'
import {Route, Router, Routes} from "react-router-dom"
import Home from './Componets/Home'
import SignUp from './Componets/SignUp'
function Main_Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  )
}

export default Main_Router
