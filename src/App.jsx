import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perfil from './pages/perfil';

import './App.css'

function App() {

 return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="perfil/:id" element={<perfil />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
