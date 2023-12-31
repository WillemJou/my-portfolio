import { Link, useParams } from 'react-router-dom'
import { useFindProject } from '../hooks/useFindProjects'

export function Project() {
  const { id } = useParams()
  const { project } = useFindProject(id)
  return (
    <header className='stack gap-2'>
      <Link className='back-link' to='/works'>
        Works
      </Link>
      <div className='start stack gap-4'>
        <div className='stack gap-2'>
          <h1 className='big-title'>{project.id}</h1>
        </div>
        <div className='details'>
          <div className='tags'>Design</div>
        </div>
      </div>
    </header>
  )
}
