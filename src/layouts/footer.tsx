import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../globals/Languages'
import { Socials } from '../components/Socials'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { RevealOnScroll } from '../utils/RevealOn'

export function Footer() {
  const languages = useContext(LanguageContext)
  const { scrollToTop } = useScrollToTop()
  const stateLanguage = languages.language

  return (
    <RevealOnScroll>
      <footer className="footer">
        <p className="footer-text">
          {stateLanguage === 'en' ? 'Template by' : 'Base de portfolio par'}{' '}
          <Link to="https://astro.build/" className="footer-link">
            Astro,
          </Link>{' '}
          Portland
        </p>
        <p className="footer-text">
          {stateLanguage === 'en'
            ? 'Hand Made and Stylized by'
            : 'Fait Main et Designé par'}{' '}
          <Link
            to="/my-portfolio/about"
            className="footer-link"
            onClick={scrollToTop}>
            Willem Jouret,
          </Link>{' '}
          {'Paris'}
        </p>
        <Socials />
      </footer>
    </RevealOnScroll>
  )
}
