import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export function NameNavLink() {
  const urlLocation = useLocation()
  const dynamicRedirect = urlLocation.pathname.includes('about')
    ? '/my-portfolio/'
    : '/about'

  return (
    <>
      <div className="simple-row-layout">
        <Link to={dynamicRedirect} className="me-link lg-font-size">
          Willem Jouret
        </Link>
      </div>
    </>
  )
}
