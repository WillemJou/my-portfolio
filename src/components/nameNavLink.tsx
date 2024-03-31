import { Link } from 'react-router-dom'
import { scrollToTop } from '../utils/scrollToTop'

export function NameNavLink() {
  return (
    <>
      <div className='simple-row-layout'>
        <Link
          onClick={scrollToTop}
          to='/my-portfolio/about'
          className='me-link lg-font-size'>
          Willem Jouret
        </Link>
      </div>
    </>
  )
}
