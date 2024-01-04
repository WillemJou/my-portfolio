import { Link, useLocation } from 'react-router-dom'
import { Socials } from '../components/socials'

export function Footer() {
  const location = useLocation()

  const scrolltopIfSameUrl = () => {
    location.pathname === '/about' ? window.scrollTo(0, 0) : null
  }

  return (
    <>
      <footer className='footer'>
        <p>
          Design by <Link to='https://astro.build/'>Astro</Link> in Portland
        </p>
        <p>
          Developed by{' '}
          <Link to='/about' onClick={scrolltopIfSameUrl}>
            Willem Jouret
          </Link>{' '}
          in Paris
        </p>
        <Socials />
      </footer>
    </>
  )
}
