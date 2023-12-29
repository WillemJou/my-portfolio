import { Link, useParams } from 'react-router-dom'
import { useFindProject } from '../hooks/useFindProjects'
import data from '../assets/data.json'

export function Gallery() {
  const { id } = useParams()
  const projects: any = useFindProject(id)
  console.log(projects)
  console.log(data)

  return (
    <ul className='card-layout'>
      {data.map((project: { id: string; title: string }) => (
        <li>
          <Link className='card' to={`/works/projet/${project.id}`}>
            <span className='title-card'>{project.title}</span>
            <img
              className='img-card'
              src='https://source.unsplash.com/random/?ciel,étoile'
              alt=''
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
