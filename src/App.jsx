import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Dashboard from './pages/Dashboard'
import Perfil from './pages/Perfil'
import PerfilIntegrante from './pages/Perfil_Integrantes'
import './App.css'

function App() {

   return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="perfil/:id" element={<PerfilIntegrante />} />
      </Route>
    </Routes>
  )
}

export default App