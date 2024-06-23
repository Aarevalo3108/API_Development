import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav/Nav'
import Home from './components/Home'
import Employees from './components/Employees/Employees'
import Departments from './components/Departments/Departments'
import Github from './svg/github.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/departments" element={<Departments/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    <div className='flex justify-center items-center'>
      <a href="https://github.com/Aarevalo3108/API_Development" target="_blank"><img className='w-8' src={Github} alt="profile" /></a>
    </div>
  </React.StrictMode>
)
