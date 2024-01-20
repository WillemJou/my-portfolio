import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'
export function NavItems() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language

  return (
    <ul className='nav-items gap-2'>
      <li>
        <NavLink className='link' to='/my-portfolio/' end>
          {stateLanguage === 'en' ? 'Home' : 'Bienvenue'}
        </NavLink>
      </li>
      <li>
        <NavLink className='link' to='/my-portfolio/works'>
          {stateLanguage === 'en' ? 'Works' : 'Projets'}
        </NavLink>
      </li>
      <li>
        <NavLink className='link' to='/my-portfolio/about'>
          {stateLanguage === 'en' ? 'About' : 'À Propos'}
        </NavLink>
      </li>
    </ul>
  )
}
