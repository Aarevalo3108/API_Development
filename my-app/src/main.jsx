import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav/Nav'
import Base from './components/Base'
import Home from './components/Home'
import Employees from './components/Employees'
import Department from './components/Department'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/departments" element={<Base title="Departamentos" content="Aqui puedes hacer distintas operaciones con los departamentos. Incluyendo: Buscar, Crear, Modificar y Eliminar."></Base>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
