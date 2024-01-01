import { Link } from 'react-router-dom'
import { Gallery } from './gallery'

export function SelectedWorksContainer() {
  return (
    <section className='section stack gap-48'>
      <header className='section-header stack gap-4'>
        <div className='gap-2'>
          <h3 className='title sub-title-2'>Selected Works</h3>
          <p>Take a look below at some of my featured work from my training</p>
        </div>
        <Link to='/works'>View All</Link>
      </header>
      <Gallery />
    </section>
  )
}
