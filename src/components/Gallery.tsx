import { Link } from 'react-router-dom'
import { Project } from '../utils/DataService'

interface WorksProps {
  works: Project[]
}

export function Gallery({ works }: WorksProps) {
  return (
    <>
      {works.map((project: Project) => (
        <li className="li-card" key={project.id}>
          <Link
            className="relative card"
            to={`/my-portfolio/works/projet/${project.id}`}>
            <span className="title title-card">{project.title}</span>
            <img
              className="img-card"
              src={project.cover}
              alt={project.subtitle}
            />
          </Link>
        </li>
      ))}
    </>
  )
}
