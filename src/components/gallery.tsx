import { Link } from 'react-router-dom'
export function Gallery({ works }) {
  return (
    <ul className='card-layout'>
      {works.map((project) => (
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
}
