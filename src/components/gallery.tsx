import { Link } from 'react-router-dom'
import data from '../data.json'
import { Error } from './error'
export function Gallery() {
  if (data) {
    return (
      <ul className='card-layout'>
        {data.selectedWorks.map((project) => (
          <li className='li-card' key={project.id}>
            <Link
              className='relative card'
              to={`/my-portfolio/works/projet/${project.id}`}>
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
  } else {
    return <Error />
  }
}
