import './Perfil.css'

const perfil = [
  { id: 1, nombre: 'Carlos García', rol: 'Desarrollador', emoji: '👨‍💻' },
  { id: 2, nombre: 'Karina López', rol: 'Diseñadora', emoji: '👩‍🎨' },
  { id: 3, nombre: 'Maxi Pérez', rol: 'Manager', emoji: '👨‍💼' },
  { id: 4, nombre: 'Ivanna Pérez', rol: 'Manager', emoji: '👨‍💼' },
]

function Perfil() {
  return (
    <div className="perfil">
      <h1 className="perfil__titulo">Perfiles</h1>

      <div className="perfil__grid">
        {perfil.map((p) => (
          <div key={p.id} className="perfil-card">
            <span className="perfil-card__emoji">{p.emoji}</span>
            <h2 className="perfil-card__nombre">{p.nombre}</h2>
            <p className="perfil-card__rol">{p.rol}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Perfil