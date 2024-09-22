import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import User from '../pages/User'
import Admin from '../pages/Admin'

const AllRoutes = () => {
  return (
   <Routes>
         <Route path='/' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/user' element={<User/>}/>
         <Route path='/admin' element={<Admin/>}/>

         
   </Routes>
  )
}

export default AllRoutes