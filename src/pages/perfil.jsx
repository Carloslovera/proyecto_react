import { useParams, useNavigate } from 'react-router-dom'
import  dataIntegrantes  from '../data/dataIntegrantes.json'

export default function Perfil() {

  // Obtengo los parámetros de la URL
  const params = useParams()

  // Función para navegar entre páginas
  const navigate = useNavigate()

  // Obtengo el id del integrante
  const id = params.id

  // Busco el integrante dentro del arreglo estudiantes
  const integrante = dataIntegrantes.find(
    integrante => integrante.id == id
  )

  // Si no encuentro el integrante muestro mensaje de error
  if (!integrante) {
    return (
      <div>
        <h2>Perfil no encontrado</h2>

        <button onClick={() => navigate('/')}>
          Volver
        </button>
      </div>
    )
  }

  // Si el integrante existe se muestra el perfil
  return (
    <div>

      {/* Botón para volver al dashboard */}
      <button onClick={() => navigate('/')}>
        ← Volver
      </button>

      {/* Avatar */}
      <div>
        <h2>{integrante.avatar}</h2>
      </div>

      {/* Nombre y apellido */}
      <h1>
        {integrante.name} {integrante.apellido}
      </h1>

      {/* Rol */}
      <h3>
        {integrante.rol}
      </h3>

      {/* Presentación */}
      <p>
        {integrante.bio}
      </p>

      {/* HABILIDADES */}
      <h2>Habilidades</h2>

      {integrante.skills.map((skill) => (
        <div key={skill.nombre}>

          <p>
            {skill.nombre}
          </p>

          {/* Barra de progreso simple */}
          <progress
            value={skill.nivel}
            max="100"
          />

          <span>
            {skill.nivel}%
          </span>

        </div>
      ))}

      {/* TECH STACK */}
      <h2>Tecnologías</h2>

      {integrante.techStack.map((tech) => (
        <p key={tech}>
          {tech}
        </p>
      ))}

      {/* PROYECTOS */}
      <h2>Proyectos</h2>

      {integrante.proyectos.map((proyecto, index) => (

        <div key={index}>

          <h3>
            {proyecto.nombre}
          </h3>

          <p>
            {proyecto.descripcion}
          </p>

        </div>

      ))}

      {/* REDES SOCIALES */}
      <h2>Redes Sociales</h2>

      <div>

        <a href={integrante.redes.github}>
          GitHub
        </a>

        <br />

        <a href={integrante.redes.linkedin}>
          LinkedIn
        </a>

        <br />

        <a href={integrante.redes.instagram}>
          Instagram
        </a>

      </div>

    </div>
  )
}