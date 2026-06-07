import { useState } from "react";
import empleados from "../data/empleadosData";
import "./JsonExplorerPage.css";

function JsonExplorerPage() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [estado, setEstado] = useState("Todos");

  const empleadosFiltrados = empleados.filter((empleado) => {
    const coincideNombre = empleado.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todos" || empleado.categoria === categoria;

    const coincideEstado =
      estado === "Todos" || empleado.estado === estado;

    return coincideNombre && coincideCategoria && coincideEstado;
  });

  return (
    <div className="json-explorer-container">
      <h1>Explorador JSON</h1>

      <input
        type="text"
        placeholder="Buscar empleado..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="Todos">Todas</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="DevOps">DevOps</option>
      </select>

      <select
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
      >
        <option value="Todos">Todos</option>
        <option value="Activo">Activo</option>
        <option value="Inactivo">Inactivo</option>
      </select>

      <div className="empleados-grid">
        {empleadosFiltrados.map((empleado) => (
          <div key={empleado.id} className="empleado-card">
            <h3>{empleado.nombre}</h3>
            <p>{empleado.categoria}</p>
            <p>{empleado.estado}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JsonExplorerPage;
