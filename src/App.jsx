import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Aleatorios from './componentes/aleatorios'
import Capturados from './componentes/capturados'
import Favoritos from './componentes/favoritos'
import Lista from './componentes/lista'
import Pokemon from './componentes/pokemon'
import Usuarios from './componentes/usuarios'
import Menu from './componentes/menu';

function App() {


  return (
    <Router>
      <Menu />
      <Routes>
      <Route path="/" element={<Lista />} />

      <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </Router>
  )
}



export default App
