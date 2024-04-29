import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'
import { useScrollToTop } from '../hooks/useScrollToTop'

export function NavItems() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  const { scrollToTop } = useScrollToTop()
  return (
    <ul className='nav-items gap-2'>
      <li className='nav-link-li'>
        <NavLink onClick={scrollToTop} className='link' to='/my-portfolio/' end>
          {stateLanguage === 'en' ? 'Home' : 'Bienvenue'}
        </NavLink>
      </li>
      <li className='nav-link-li'>
        <NavLink
          onClick={scrollToTop}
          className='link'
          to='/my-portfolio/works'>
          {stateLanguage === 'en' ? 'Works' : 'Projets'}
        </NavLink>
      </li>
      <li className='nav-link-li'>
        <NavLink
          onClick={scrollToTop}
          className='link'
          to='/my-portfolio/about'>
          {stateLanguage === 'en' ? 'About' : 'À Propos'}
        </NavLink>
      </li>
    </ul>
  )
}
