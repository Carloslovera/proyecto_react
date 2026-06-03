import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Perfil from "./pages/Perfil";
import GalleryPage from "./pages/GalleryPage";
import BitacoraPage from "./pages/BitacoraPage";
import RenderTreePage from "./pages/RenderTreePage";
import PerfilIntegrante from "./pages/Perfil_Integrantes";
import JsonExplorerPage from "./pages/JsonExplorerPage";
import ApiPage from "./pages/ApiPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="perfil/:id" element={<PerfilIntegrante />} />
        <Route path="galeria" element={<GalleryPage />} />
        <Route path="bitacora" element={<BitacoraPage />} />
        <Route path="arbol-componentes" element={<RenderTreePage />} />

        {/* Mis páginas */}
        <Route path="json-explorer" element={<JsonExplorerPage />} />
        <Route path="api-externa" element={<ApiPage />} />
      </Route>
    </Routes>
  );
}

export default App;