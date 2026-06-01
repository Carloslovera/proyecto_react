import { Link } from 'react-router-dom';
export default function IntegrantesCard({ integrante }) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/perfil/${integrante.id}`)}>
      <h3>
        {integrante.nombre} {integrante.apellido}
      </h3>

      <p>{integrante.rol}</p>

      {integrante.techStack.slice(0, 3).map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>
  )
}