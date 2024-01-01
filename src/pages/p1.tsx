import { Link, useParams } from 'react-router-dom'
import { useFindProject } from '../hooks/useFindProjects'

export function Project() {
  const { id } = useParams()
  const { project } = useFindProject(id)

  return (
    <>
      {' '}
      <header className='stack gap-2'>
        <Link className='back-link' to='/works'>
          Works
        </Link>
        <div className='start stack gap-4'>
          <div className='stack gap-2'>
            <h1 className='title big-title'>{project?.title}</h1>
          </div>
          <div className='details'>
            <div className='tags'>
              {project?.tags.map((tag, index) => (
                <div key={index} className='pill'>
                  {tag}
                </div>
              ))}
            </div>
            <p className='description'>{project?.subtitle}</p>
          </div>
        </div>
      </header>
      <main className=''>
        <div className='stack gap-10 work-content'>
          {project?.pictures.map((pic, index) => (
            <img className='img-card' key={index} src={pic} alt='' />
          ))}
        </div>
      </main>
    </>
  )
}
