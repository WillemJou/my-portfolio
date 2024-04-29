import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'
import { Socials } from '../components/socials'
import { useScrollToTop } from '../hooks/useScrollToTop'

export function Footer() {
  const languages = useContext(LanguageContext)
  const { scrollToTop } = useScrollToTop()
  const stateLanguage = languages.language
  return (
    <>
      <footer className='footer'>
        <p className='footer-text'>
          {stateLanguage === 'en' ? 'Template by' : 'Base de portfolio par'}{' '}
          <Link to='https://astro.build/' className='footer-link'>
            Astro,
          </Link>{' '}
          Portland
        </p>
        <p className='footer-text'>
          {stateLanguage === 'en'
            ? 'Hand Made and Stylized by'
            : 'Fait Main et Designé par'}{' '}
          <Link
            to='/my-portfolio/about'
            className='footer-link'
            onClick={scrollToTop}>
            Willem Jouret,
          </Link>{' '}
          {stateLanguage === 'en' ? 'Paris' : 'Paris '}
        </p>
        <Socials />
      </footer>
    </>
  )
}
