import { Link } from 'react-router-dom'
import data from '../assets/data.json'
export function Gallery() {
  return (
    <ul className='card-layout'>
      {data.selectedWorks.map((project) => (
        <li key={project.id}>
          <Link className='card' to={`/works/projet/${project.id}`}>
            <span className='title title-card'>{project.title}</span>
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
