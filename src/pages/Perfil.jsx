import './Perfil.css'
import carlos from '../assets/carlos.png'
import karina from '../assets/karina.jpeg'
import maxi from '../assets/maxi.png'
import ivanna from '../assets/ivanna.png'

const perfil = [
  { id: 1, nombre: 'Carlos García', rol: 'Desarrollador', img: carlos },
  { id: 2, nombre: 'Karina López', rol: 'Desarrollador', img: karina },
  { id: 3, nombre: 'Maxi Pérez', rol: 'Desarrollador', img: maxi},
  { id: 4, nombre: 'Ivanna Pérez', rol: 'Desarrollador', img: ivanna },
]

function Perfil() {
  return (
    <div className="perfil">
      <h1 className="perfil__titulo">Perfiles</h1>
      <div className="perfil__grid">
        {perfil.map((p) => (
          <div key={p.id} className="perfil-card">
            {p.img ? (
              <img
                src={p.img}
                alt={p.nombre}
                className="perfil-card__img"
              />
            ) : (
              <span className="perfil-card__emoji">
                {p.emoji}
              </span>
            )}
            <h2 className="perfil-card__nombre">{p.nombre}</h2>
            <p className="perfil-card__rol">{p.rol}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Perfil