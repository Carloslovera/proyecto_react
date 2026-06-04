import { useState } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import dataIntegrantesOriginal from '../data/dataIntegrantes.json'

function Dashboard() {
  // Cargar desde localStorage o usar JSON original
  const [integrantes, setIntegrantes] = useState(() => {
    const guardados = localStorage.getItem('integrantes')
    return guardados ? JSON.parse(guardados) : dataIntegrantesOriginal
  })
  
  const [showModal, setShowModal] = useState(false)
  const [nuevoIntegrante, setNuevoIntegrante] = useState({
    id: 0,
    nombre: '',
    nombreCompleto: '',
    avatar: '',
    rol: '',
    habilidades: [],
    proyectos: [],
    techStack: [],
    social: {}
  })

  const generarAvatar = (nombre) => {
    const seed = nombre.toLowerCase().replace(/\s/g, '')
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`
  }

  const handleChange = (e) => {
    setNuevoIntegrante({
      ...nuevoIntegrante,
      [e.target.name]: e.target.value,
      avatar: generarAvatar(e.target.value)
    })
  }

  const agregarIntegrante = () => {
    if (!nuevoIntegrante.nombre || !nuevoIntegrante.rol) {
      alert('Por favor completa nombre y rol')
      return
    }

    const nuevoId = Math.max(...integrantes.map(i => i.id), 0) + 1
    
    const nuevo = {
      id: nuevoId,
      nombre: nuevoIntegrante.nombre,
      nombreCompleto: nuevoIntegrante.nombreCompleto || nuevoIntegrante.nombre,
      avatar: nuevoIntegrante.avatar || generarAvatar(nuevoIntegrante.nombre),
      rol: nuevoIntegrante.rol,
      habilidades: [
        { nombre: "React", porcentaje: 50 },
        { nombre: "JavaScript", porcentaje: 50 },
        { nombre: "CSS", porcentaje: 50 }
      ],
      proyectos: [
        { titulo: "Proyecto 1", descripcion: "Descripción", imagen: "https://via.placeholder.com/300", link: "#" },
        { titulo: "Proyecto 2", descripcion: "Descripción", imagen: "https://via.placeholder.com/300", link: "#" },
        { titulo: "Proyecto 3", descripcion: "Descripción", imagen: "https://via.placeholder.com/300", link: "#" }
      ],
      techStack: ["react", "js", "html5", "css3", "git"],
      social: {
        github: "https://github.com/nuevo",
        linkedin: "https://linkedin.com/in/nuevo",
        twitter: "https://twitter.com/nuevo"
      }
    }

    const nuevosIntegrantes = [...integrantes, nuevo]
    setIntegrantes(nuevosIntegrantes)
    
    // 🔥 GUARDAR EN LOCALSTORAGE
    localStorage.setItem('integrantes', JSON.stringify(nuevosIntegrantes))
    
    setShowModal(false)
    setNuevoIntegrante({
      id: 0,
      nombre: '',
      nombreCompleto: '',
      avatar: '',
      rol: '',
      habilidades: [],
      proyectos: [],
      techStack: [],
      social: {}
    })
    
    alert(`✅ ${nuevo.nombre} ha sido agregado exitosamente!`)
  }

  const resetearDatos = () => {
    if (confirm('⚠️ ¿Seguro que quieres resetear? Se perderán los integrantes agregados.')) {
      localStorage.removeItem('integrantes')
      setIntegrantes(dataIntegrantesOriginal)
      alert('✅ Datos restaurados a los originales')
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div>
          <h1 className="dashboard__title">Dashboard</h1>
          <p className="dashboard__subtitle">Bienvenido de nuevo 👋</p>
        </div>
        <div className="dashboard__actions">
          <button className="dashboard__btn-reset" onClick={resetearDatos}>
            ⟳ Resetear
          </button>
          <button className="dashboard__btn" onClick={() => setShowModal(true)}>
            + Nuevo Integrante
          </button>
        </div>
      </div>

      <div className="dashboard__grid">
        {integrantes.map((p, index) => (
          <Link
            key={p.id}
            to={`/perfil/${p.id}`}
            className="dashboard__card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={p.avatar}
              alt={p.nombre}
              className="dashboard__card-img"
            />
            <h2 className="dashboard__card-nombre">{p.nombre}</h2>
            <p className="dashboard__card-rol">{p.rol}</p>
          </Link>
        ))}
      </div>

      {/* Modal (igual que antes) */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Agregar Nuevo Integrante</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Nombre *</label>
                <input type="text" name="nombre" placeholder="Ej: Juan Pérez" value={nuevoIntegrante.nombre} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Nombre Completo (opcional)</label>
                <input type="text" name="nombreCompleto" placeholder="Ej: Juan Carlos Pérez Gómez" value={nuevoIntegrante.nombreCompleto} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Rol *</label>
                <input type="text" name="rol" placeholder="Ej: FRONTEND DEVELOPER" value={nuevoIntegrante.rol} onChange={handleChange} />
              </div>
              {nuevoIntegrante.avatar && (
                <div className="avatar-preview">
                  <p>Avatar generado automáticamente:</p>
                  <img src={nuevoIntegrante.avatar} alt="preview" />
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="btn-save" onClick={agregarIntegrante}>Agregar Integrante</button>
            </div>
          </div>
        </div>
      )}

      <section className="dashboard__section">
        <h2 className="dashboard__section-title">Actividad Reciente</h2>
        <div className="dashboard__activity">
          {[1, 2, 3].map((i) => (
            <div key={i} className="activity__item">
              <span className="activity__dot" />
              <div>
                <p className="activity__text">Tarea {i} completada exitosamente</p>
                <p className="activity__time">Hace {i * 10} minutos</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Dashboard