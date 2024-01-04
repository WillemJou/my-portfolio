import { Link } from 'react-router-dom'
import { Gallery } from '../components/gallery'

export function SelectedWorksContainer() {
  return (
    <section className='section stack gap-48'>
      <header className='section-header stack'>
        <div className='gap-4 stack'>
          <h3 className='title sub-title-2'>Selected Works</h3>
          <p>Take a look below at some of my featured work from my training</p>
        </div>
        <Link className='link view-all-link simple-flex' to='/works'>
          View All
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon_active'
            viewBox='0 0 256 256'>
            <path d='m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48'></path>
          </svg>
        </Link>
      </header>
      <Gallery />
    </section>
  )
}
