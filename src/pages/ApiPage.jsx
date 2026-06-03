import { useEffect, useState } from "react";
import "./ApiPage.css";

function ApiPage() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [pagina, setPagina] = useState(1);

  const productosPorPagina = 5;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar datos");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="loading">Cargando...</h2>;

  if (error) return <h2 className="error">{error}</h2>;

  const inicio = (pagina - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;

  const productosActuales = productos.slice(inicio, fin);

  return (
    <div className="api-page">
      <h1>API Externa</h1>

      <div className="productos-grid">
        {productosActuales.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img
              src={producto.image}
              alt={producto.title}
              className="producto-imagen"
            />

            <h3 className="producto-titulo">
              {producto.title}
            </h3>

            <p className="producto-precio">
              ${producto.price}
            </p>
          </div>
        ))}
      </div>

      <div className="paginacion">
        <button
          onClick={() => setPagina(pagina - 1)}
          disabled={pagina === 1}
        >
          Anterior
        </button>

        <span>Página {pagina}</span>

        <button
          onClick={() => setPagina(pagina + 1)}
          disabled={fin >= productos.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default ApiPage;
