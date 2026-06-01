import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
