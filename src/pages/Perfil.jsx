import './Perfil.css'
import { Link } from 'react-router-dom'
import dataIntegrantes from '../data/dataIntegrantes.json'

function Perfil() {
  return (
    <div className="perfil">
      <h1 className="perfil__titulo">
        Perfiles
      </h1>

      <div className="perfil__grid">

        {dataIntegrantes.map((p) => (

          <Link
            key={p.id}
            to={`/perfil/${p.id}`}
            className="perfil-card"
          >

            <img
              src={p.avatar}
              alt={p.nombre}
              className="perfil-card__img"
            />

            <h2 className="perfil-card__nombre">
              {p.nombre}
            </h2>

            <p className="perfil-card__rol">
              {p.rol}
            </p>

          </Link>

        ))}

      </div>
    </div>
  )
}

export default Perfil