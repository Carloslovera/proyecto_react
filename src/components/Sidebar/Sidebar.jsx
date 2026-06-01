import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const navLinks = [
  { to: '/', label: 'Dashboard', icon: '🏠' },
  { to: '/perfil', label: 'Perfil', icon: '👤' },
  { to: '/configuracion', label: 'Configuración', icon: '⚙️' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo del grupo */}
      <div className="sidebar__logo">
        <span className="sidebar__logo-icon"></span>
        <span className="sidebar__logo-text">Proyecto React</span>
      </div>

      {/* Links de navegacion */}
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">
          {navLinks.map(({ to, label, icon }) => (
            <li key={to} className="sidebar__nav-item">
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  `sidebar__nav-link ${isActive ? 'sidebar__nav-link--active' : ''}`
                }
              >
                <span className="sidebar__nav-icon">{icon}</span>
                <span className="sidebar__nav-label">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer del sidebar */}
      <div className="sidebar__footer">
        <p>Grupo ©{new Date().getFullYear()}</p>
      </div>
    </aside>
  )
}

export default Sidebar
