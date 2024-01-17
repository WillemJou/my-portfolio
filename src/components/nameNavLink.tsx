import { Link } from 'react-router-dom'

export function NameNavLink() {
  return (
    <>
      <div className='simple-row-layout'>
        <Link to='/my-portfolio/about' className='me-link lg-font-size'>
          Willem Jouret
        </Link>
      </div>
    </>
  )
}
