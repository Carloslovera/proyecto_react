import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import dataIntegrantes from '../data/dataIntegrantes.json'
import './Perfil_integrantes.css'

import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaJs
} from 'react-icons/fa'


import {
  SiAstro,
  SiPostgresql,
  SiArduino
} from 'react-icons/si'

const techIcons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  Angular: <FaAngular />,
  React: <FaReact />,
  Astro: <SiAstro />,
  Java: <FaJava />,
  PostgreSQL: <SiPostgresql />,
  Git: <FaGitAlt />,
  Arduino: <SiArduino />,
}

export default function PerfilIntegrante() {

  const { id } = useParams()
  const navigate = useNavigate()

  const integrante = dataIntegrantes.find(
    integrante => integrante.id === Number(id)
  )

  const [currentProject, setCurrentProject] = useState(0)

  if (!integrante) {
    return (
      <div>
        <h2>Perfil no encontrado</h2>

        <button onClick={() => navigate('/perfil')}>
          Volver
        </button>
      </div>
    )
  }

  const nextProject = () => {
    setCurrentProject((prev) =>
      prev === integrante.projects.length - 1
        ? 0
        : prev + 1
    )
  }

  const prevProject = () => {
    setCurrentProject((prev) =>
      prev === 0
        ? integrante.projects.length - 1
        : prev - 1
    )
  }

  return (
    <div className="perfil-detalle">

      {/* BOTÓN VOLVER */}
      <button
        className="btn-volver"
        onClick={() => navigate('/perfil')}
      >
        ← Volver
      </button>

      {/* HEADER */}
      <div className="perfil-header">

        <img
          src={integrante.avatar}
          alt={integrante.nombre}
          className="perfil-avatar"
        />

        <div className="perfil-info">

          <h1>
            {integrante.nombre}
          </h1>

          <h3>
            {integrante.rol}
          </h3>

          <p>
            {integrante.description}
          </p>

        </div>

      </div>

      {/* HABILIDADES */}
      <h2 className="seccion-titulo">
        Habilidades
      </h2>

      {integrante.skills?.map((skill) => (

        <div
          key={skill.name}
          className="skill"
        >

          <div className="skill-header">

            <span className="skill-name">
              {skill.name}
            </span>

            <span className="skill-level">
              {skill.level}
            </span>

          </div>

          <progress
            value={parseInt(skill.level)}
            max="100"
          />

        </div>

      ))}

      {/* STACK TECNOLÓGICO */}
        <h2 className="seccion-titulo">
        Stack Tecnológico
        </h2>

        <div className="tech-stack">

       <div className="tech-stack">

        {integrante.techStack?.map((tech) => (

            <div
            key={tech}
            className="tech-badge"
            >
            <span className="tech-icon">
                {techIcons[tech]}
            </span>

            {tech}
            </div>

        ))}

        </div>

        </div>

      {/* PROYECTOS */}
      <h2 className="seccion-titulo">
        Proyectos
      </h2>

      {integrante.projects?.length > 0 && (

        <div className="carousel">

          <button
            className="carousel-btn"
            onClick={prevProject}
          >
            ◀
          </button>

          <div className="carousel-card">

            <h3>
              {integrante.projects[currentProject].title}
            </h3>

            <p>
              {integrante.projects[currentProject].desc}
            </p>

            <p>
              Proyecto {currentProject + 1} de{' '}
              {integrante.projects.length}
            </p>

          </div>

          <button
            className="carousel-btn"
            onClick={nextProject}
          >
            ▶
          </button>

        </div>

      )}

      {/* REDES */}
      <h2 className="seccion-titulo">
        Redes Sociales
      </h2>

      <div className="redes">

        {integrante.github && (
          <a
            href={integrante.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}

        {integrante.linkedin && (
          <a
            href={integrante.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        )}

      </div>

    </div>
  )
}
