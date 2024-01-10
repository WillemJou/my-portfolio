import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SelectedProjects } from '../utils/dataService'

export function Project() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams()
  const { project } = SelectedProjects(id)

  return (
    <>
      {' '}
      <header className='header stack gap-2'>
        <Link className='back-link' to='/works'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon back-icon'
            viewBox='0 0 24 24'>
            <path
              d='M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0'
              clipRule='evenodd'></path>
          </svg>
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
