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
          Durante el desarrollo del proyecto se utilizó Trello como herramienta
          principal para organizar las tareas del equipo y realizar un
          seguimiento del avance de cada funcionalidad.
        </p>

        <p>
          Para el control de versiones se trabajó con Git y GitHub siguiendo una
          estructura inspirada en GitFlow. Cada integrante contó con su propia
          rama de desarrollo para implementar las funcionalidades asignadas,
          mientras que la rama principal se mantuvo estable y se utilizó para
          integrar los cambios una vez que estaban listos para ser revisados y
          fusionados.
        </p>

        <p>
          Se asignaron tareas específicas a cada miembro del equipo, donde cada
          uno tenía que realizar un número de tareas definidas entre todos. Esta
          división de responsabilidades permitió un enfoque más organizado y
          eficiente en el desarrollo. Al mismo tiempo, aseguró que cada
          integrante tuviera un rol claro y contribuyera de manera significativa
          al proyecto, fomentando la colaboración y el aprendizaje mutuo a lo
          largo del proceso.
        </p>
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
