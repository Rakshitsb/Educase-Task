import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import Login from './Pages/Login'
import SignupPage from './Pages/SignupPage'
import HomePage from './Pages/HomePage'
import { useAuthStore } from '../store/authStore';

import { useEffect } from 'react';
import {Loader} from 'lucide-react';
import {Toaster} from "react-hot-toast";
const App = () => {
  const{authUser,checkAuth, isCheckingAuth}=useAuthStore();
  //this automatically calls check auth on reload
useEffect(() => {
  checkAuth()
  }, [checkAuth]);
  
  if( isCheckingAuth && !authUser){
    return(
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin'></Loader>
      </div>
    )
  }
  
  return (
    <>App
    <Routes>
      <Route path="/"  element={<Landingpage/>}></Route>
      <Route path="/Login" element={!authUser?<Login></Login>:<Navigate to='/Home'/>}></Route>
      <Route path="/Signup" element={!authUser?<SignupPage></SignupPage>:<Navigate to='/Login'/>}></Route>
      <Route path="/Home" element={authUser?<HomePage></HomePage>:<Navigate to='/Login'/>}></Route>
      </Routes>
    
    
    </>
    
  )
}

export default App