import { useState } from 'react'
import { Signup } from './pages/signup'
import { SignIn } from './pages/signin'
import { SendMoney } from './pages/Sendmoney'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import HomePage from './pages/main'
import './App.css';



function App() {
  

  return <div>
    <BrowserRouter>
       <Routes>
         <Route  path='/SignUp' element={<Signup></Signup>}></Route>
         <Route path='/signIn' element={<SignIn/>}/>
         <Route path='/Dashboard' element={<Dashboard/>}/>
         <Route path="/SendMoney" element={<SendMoney/>}/>
         <Route path="/" element={<HomePage/>}/>
       </Routes>
    </BrowserRouter>
    
    
  </div>
   
  
}

export default App
