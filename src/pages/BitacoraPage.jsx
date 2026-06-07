import Timeline from "../components/Timeline/Timeline";
import "./BitacoraPage.css";

export default function BitacoraPage() {
  return (
    <section className="bitacora-page">
      <header className="bitacora-header">
        <h1>Bitácora del Proyecto</h1>

        <p className="subtitle">
          Seguimiento del desarrollo, organización y evolución técnica del
          proyecto desde HTML/CSS/JS hasta React.
        </p>
      </header>

      <Timeline />

<section className="workflow-section">
  <h2>Roles y Flujo de Trabajo</h2>
  
  <p>
    Durante el desarrollo del proyecto se utilizó <strong>Trello</strong> como herramienta
    principal para organizar las tareas del equipo y realizar un seguimiento del avance de cada funcionalidad.
  </p>

  <p>
    Para el control de versiones se trabajó con <strong>Git y GitHub</strong> siguiendo una
    estructura inspirada en <strong>GitFlow</strong>. Cada integrante contó con su propia
    rama de desarrollo para implementar las funcionalidades asignadas,
    mientras que la rama principal se mantuvo estable y se utilizó para
    integrar los cambios una vez que estaban listos para ser revisados y
    fusionados.
  </p>

  <h3>📋 Distribución de Tareas por Integrante</h3>
  
  <div className="roles-grid">
    <div className="role-card">
      <h4>👨‍💻 Carlos Lovera</h4>
      <ul>
        <li>Configuración inicial del proyecto (Vite + React Router)</li>
        <li>Componente de API externa con paginación</li>
        <li>Lógica de localStorage para nuevos integrantes</li>
        <li>Sidebar y estructura de Layout</li>
      </ul>
    </div>

    <div className="role-card">
      <h4>👩‍💻 Karina Ajhuacho</h4>
      <ul>
        <li>Dashboard con grilla de integrantes y animaciones</li>
        <li>Galería de imágenes con Lightbox</li>
        <li>Estilos CSS y diseño responsive</li>
        <li>Componente de actividad reciente</li>
      </ul>
    </div>

    <div className="role-card">
      <h4>👨‍💻 Maxi Ratti</h4>
      <ul>
        <li>Perfil individual (barras de progreso, carrusel, tech stack)</li>
        <li>Explorador JSON con buscador y filtros (20 objetos)</li>
        <li>Datos de integrantes y habilidades</li>
        <li>Integración de React Icons</li>
      </ul>
    </div>

    <div className="role-card">
      <h4>👩‍💻 Ivanna Vrodt</h4>
      <ul>
        <li>Bitácora de proyecto (timeline y documentación)</li>
        <li>Árbol de renderizado de componentes</li>
        <li>README.md completo y documentación de IA</li>
        <li>Testing y revisión de código</li>
      </ul>
    </div>
  </div>

  <h3>📌 Metodología de Trabajo</h3>
  <ul>
    <li><strong>Daily meetings:</strong> Reuniones breves al inicio de cada sesión para coordinar tareas.</li>
    <li><strong>Ramas por funcionalidad:</strong> Cada tarea importante tenía su propia rama (ej: `feature/json-explorer`).</li>
    <li><strong>Pull requests:</strong> Cada integración requería revisión de al menos un compañero.</li>
    <li><strong>Trello:</strong> Tablero con columnas: "Pendiente", "En curso", "En revisión", "Completado".</li>
  </ul>
</section>

      <section className="migration-section">
        <h2>Justificación de la Migración a React</h2>
        <p>
          Al adoptar React fue posible dividir la aplicación en componentes
          reutilizables, permitiendo que elementos como tarjetas, galerías,
          perfiles y secciones de contenido se construyeran una sola vez y luego
          pudieran reutilizarse en distintas partes del sitio. Esto redujo la
          duplicación de código y facilitó las futuras modificaciones, ya que
          los cambios realizados en un componente se reflejan automáticamente en
          todos los lugares donde se utiliza.
        </p>

        <p>
          Otro aspecto importante fue la incorporación de un manejo de estado
          más claro para las funcionalidades interactivas. Características como
          la galería con Lightbox, la navegación entre imágenes y otros
          elementos dinámicos pudieron implementarse mediante estados
          controlados por React, evitando la manipulación directa del DOM que
          era necesaria en la versión desarrollada únicamente con JavaScript.
        </p>

        <p>
          Además, la arquitectura basada en componentes favorece la
          escalabilidad del proyecto. La incorporación de nuevas páginas o
          funcionalidades puede realizarse de forma más ordenada, manteniendo
          una separación clara entre lógica, presentación y datos. Esto
          convierte a React en una solución más adecuada para proyectos que
          continúan creciendo y requieren un mantenimiento más sencillo a largo
          plazo.
        </p>
      </section>
    </section>
  );
}
