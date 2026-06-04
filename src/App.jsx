import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
// import Perfil from "./pages/Perfil";  ← ELIMINADO (ya está en Dashboard)
import GalleryPage from "./pages/GalleryPage";
import BitacoraPage from "./pages/BitacoraPage";
import RenderTreePage from "./pages/RenderTreePage";
import PerfilIntegrante from "./pages/Perfil_integrantes";
import JsonExplorerPage from "./pages/JsonExplorerPage";
import ApiPage from "./pages/ApiPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Dashboard ahora muestra la grilla de integrantes */}
        <Route index element={<Dashboard />} />
        
        {/* Perfil individual de cada integrante */}
        <Route path="perfil/:id" element={<PerfilIntegrante />} />
        
        {/* Resto de las páginas */}
        <Route path="galeria" element={<GalleryPage />} />
        <Route path="bitacora" element={<BitacoraPage />} />
        <Route path="arbol-componentes" element={<RenderTreePage />} />
        <Route path="json-explorer" element={<JsonExplorerPage />} />
        <Route path="api-externa" element={<ApiPage />} />
      </Route>
    </Routes>
  );
}

export default App;