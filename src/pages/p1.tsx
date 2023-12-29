import { Link, useParams } from 'react-router-dom'
import { useFindProject } from '../hooks/useFindProjects'

export function Project() {
  const { id } = useParams()
  const { projects } = useFindProject(id)
  console.log(projects)
  console.log(id)
  return (
    <header className='stack gap-2'>
      <Link className='back-link' to='/works'>
        Wooki
      </Link>
      <div className='start stack gap-4'>
        <div className='stack gap-2'>
          <h1 className='big-title'>{id}</h1>
        </div>
        <div className='details'>
          <div className='tags'>Design</div>
        </div>
      </div>
    </header>
  )
}
