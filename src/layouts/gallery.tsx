import { Link } from 'react-router-dom'
import data from '../../public/data.json'

export function Gallery() {
  return (
    <ul className='card-layout'>
      {data.map((project) => (
        <li key={project.id}>
          <Link className='card' to={`/works/projet/${project.id}`}>
            <span className='title-card'>{project.title}</span>
            <img
              className='img-card'
              src={project.cover}
              alt={project.subtitle}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
