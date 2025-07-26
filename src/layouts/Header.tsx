import { useContext } from 'react'
import { LanguageContext } from '../globals/Languages'
import { Link } from 'react-router-dom'
import mainPortrait from '/mainPortrait.jpg'
import { RevealOnScroll } from '../utils/RevealOn'

export function Header() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  return (
    <RevealOnScroll>
      <div className="wrapper stack relative gap-4">
        <header className="main-header hero">
          <div className="stack start gap-2 hero-text w-50%">
            <h1 className="title big-title">
              {' '}
              {stateLanguage === 'en' ? (
                <>
                  Hello, I'm{' '}
                  <Link className="main-name-link" to="/my-portfolio/about">
                    Willem
                  </Link>
                </>
              ) : (
                <>
                  Bienvenue, je suis{' '}
                  <Link className="main-name-link" to="/my-portfolio/about">
                    Willem
                  </Link>
                </>
              )}
            </h1>
            <p className="tagline hero-sub-title">
              {stateLanguage === 'en'
                ? 'front-end developer currently based in Brittany 🧑🏻‍💻'
                : 'Développeur front-end basé en Bretagne 🧑🏻‍💻'}
            </p>
          </div>
          <Link className="main-img-link" to="/my-portfolio/about">
            <img
              src={mainPortrait}
              alt="shoot de Willem dans une entreprise super sympa #LaBelleFolie ^^"
              className="main-img"
            />
          </Link>
        </header>
      </div>
    </RevealOnScroll>
  )
}
