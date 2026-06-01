import RenderTree from "../components/RenderTree/RenderTree";
import "./RenderTreePage.css";

export default function RenderTreePage() {
  return (
    <section className="tree-page">
      <header className="tree-header">
        <h1>Árbol de Renderizado</h1>

        <p>
          Representación de la arquitectura de componentes utilizada en el
          proyecto.
        </p>

        <p>
          La estructura muestra cómo las páginas, componentes y fuentes de datos
          se relacionan entre sí dentro de la aplicación.
        </p>
      </header>

      <RenderTree />
    </section>
  );
}
