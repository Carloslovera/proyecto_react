import './Dashboard.css'

const cards = [
  { id: 1, title: 'Usuarios', value: '1,284', icon: '👥', trend: '+12%', color: 'card--blue' },
  { id: 2, title: 'Proyectos', value: '48', icon: '📁', trend: '+5%', color: 'card--green' },
  { id: 3, title: 'Tareas', value: '320', icon: '✅', trend: '+8%', color: 'card--purple' },
  { id: 4, title: 'Ingresos', value: '$9,200', icon: '💰', trend: '+20%', color: 'card--orange' },
]

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard__header">
        <div>
          <h1 className="dashboard__title">Dashboard</h1>
          <p className="dashboard__subtitle">Bienvenido de nuevo 👋</p>
        </div>
        <button className="dashboard__btn">+ Nuevo</button>
      </header>

      {/* Grid de tarjetas */}
      <section className="dashboard__grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`dashboard__card ${card.color}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card__top">
              <span className="card__icon">{card.icon}</span>
              <span className="card__trend">{card.trend}</span>
            </div>
            <h2 className="card__value">{card.value}</h2>
            <p className="card__title">{card.title}</p>
          </div>
        ))}
      </section>

      {/* Sección extra */}
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
