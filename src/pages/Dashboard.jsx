import { useState, useEffect } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import dataIntegrantesOriginal from '../data/dataIntegrantes.json'

function Dashboard() {
  // Cargar desde localStorage o usar JSON original
  const [integrantes, setIntegrantes] = useState(() => {
    const guardados = localStorage.getItem('integrantes')
    return guardados ? JSON.parse(guardados) : dataIntegrantesOriginal
  })
  
  const [actividades, setActividades] = useState(() => {
    const actividadesGuardadas = localStorage.getItem('actividades')
    return actividadesGuardadas ? JSON.parse(actividadesGuardadas) : []
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

  // Guardar actividades en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('actividades', JSON.stringify(actividades))
  }, [actividades])

  const generarAvatar = (nombre) => {
    const seed = nombre.toLowerCase().replace(/\s/g, '')
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`
  }

  // Función para agregar una nueva actividad
  const agregarActividad = (texto, tipo = 'creacion') => {
    const nuevaActividad = {
      id: Date.now(),
      texto: texto,
      timestamp: new Date(),
      tipo: tipo // 'creacion', 'eliminacion', 'edicion'
    }
    setActividades(prev => [nuevaActividad, ...prev].slice(0, 20)) // Máximo 20 actividades
  }

  // Función para calcular tiempo relativo
  const tiempoRelativo = (fecha) => {
    const ahora = new Date()
    const diferenciaMs = ahora - new Date(fecha)
    const minutos = Math.floor(diferenciaMs / 60000)
    const horas = Math.floor(diferenciaMs / 3600000)
    const dias = Math.floor(diferenciaMs / 86400000)
    
    if (minutos < 1) return 'Hace unos segundos'
    if (minutos < 60) return `Hace ${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`
    if (horas < 24) return `Hace ${horas} ${horas === 1 ? 'hora' : 'horas'}`
    return `Hace ${dias} ${dias === 1 ? 'día' : 'días'}`
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
    
    // GUARDAR EN LOCALSTORAGE
    localStorage.setItem('integrantes', JSON.stringify(nuevosIntegrantes))
    
    // AGREGAR ACTIVIDAD
    agregarActividad(`${nuevo.nombre} se unió al equipo como ${nuevo.rol}`)
    
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
      localStorage.removeItem('actividades')
      setIntegrantes(dataIntegrantesOriginal)
      setActividades([])
      agregarActividad('Datos restaurados a la configuración original', 'sistema')
      alert('✅ Datos restaurados a los originales')
    }
  }

  // Icono según tipo de actividad
  const getActividadIcono = (tipo) => {
    switch(tipo) {
      case 'creacion': return '➕'
      case 'eliminacion': return '🗑️'
      case 'edicion': return '✏️'
      case 'sistema': return '🔄'
      default: return '●'
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div>
          <h1 className="dashboard__title">Dashboard</h1>
          <p className="dashboard__subtitle">Bienvenido</p>
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

      {/* SECCIÓN DE ACTIVIDAD RECIENTE MEJORADA */}
      <section className="dashboard__section">
        <h2 className="dashboard__section-title">
          📋 Actividad Reciente
          {actividades.length > 0 && (
            <span className="activity__count">{actividades.length}</span>
          )}
        </h2>
        <div className="dashboard__activity">
          {actividades.length === 0 ? (
            <div className="activity__empty">
              <span>📭</span>
              <p>Aún no hay actividad reciente</p>
              <small>Agrega un nuevo integrante para ver actividad</small>
            </div>
          ) : (
            actividades.map((act) => (
              <div key={act.id} className="activity__item">
                <span className={`activity__dot activity__dot--${act.tipo}`}>
                  {getActividadIcono(act.tipo)}
                </span>
                <div>
                  <p className="activity__text">{act.texto}</p>
                  <p className="activity__time">{tiempoRelativo(act.timestamp)}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Modal */}
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
    </div>
  )
}

export default Dashboard