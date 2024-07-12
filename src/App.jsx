import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Records from './components/Records'
import { Route,Routes } from 'react-router-dom'
import Add from './components/Add'

import Navbar from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
     
     
      <h1>WELCOME TO MOVIE DATA</h1>
      
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Records/>}> </Route> 
        <Route path='/add' element={<Add/>}> </Route> 
        
      </Routes>
      
      
      </div>
    </>
  )
}

export default App