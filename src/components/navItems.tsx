import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'
import { scrollToTop } from '../utils/scrollToTop'

export function NavItems() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  return (
    <ul className='nav-items gap-2'>
      <li onClick={scrollToTop} className='nav-link-li'>
        <NavLink className='link' to='/my-portfolio/' end>
          {stateLanguage === 'en' ? 'Home' : 'Bienvenue'}
        </NavLink>
      </li>
      <li onClick={scrollToTop} className='nav-link-li'>
        <NavLink className='link' to='/my-portfolio/works'>
          {stateLanguage === 'en' ? 'Works' : 'Projets'}
        </NavLink>
      </li>
      <li onClick={scrollToTop} className='nav-link-li'>
        <NavLink className='link' to='/my-portfolio/about'>
          {stateLanguage === 'en' ? 'About' : 'À Propos'}
        </NavLink>
      </li>
    </ul>
  )
}
