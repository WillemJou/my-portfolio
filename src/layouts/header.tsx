import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'
import { Link } from 'react-router-dom'
import mainPortrait from '/mainPortrait.jpg'
import { RevealOnScroll } from '../utils/revealOn'

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
              {stateLanguage === 'en'
                ? 'Hello, my name is Willem'
                : 'Bienvenue, je suis Willem'}
            </h1>
            <p className="tagline hero-sub-title">
              {stateLanguage === 'en'
                ? 'I am a front-end developer who is currently based in Paris 🧑🏻‍💻'
                : 'Développeur front-end basé à Paris 🧑🏻‍💻'}
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
