import { Link } from 'react-router-dom'

export function NameNavLink() {
  return (
    <>
      <div className='simple-row-layout'>
        <Link to='/about' className='lg-font-size'>
          Willem Jouret
        </Link>
      </div>
    </>
  )
}
