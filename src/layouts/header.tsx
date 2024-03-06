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
      <div className='wrapper stack relative gap-4'>
        <header className='main-header hero'>
          <div className='stack start gap-2 hero-text w-50%'>
            <h1 className='title big-title'>
              {' '}
              {stateLanguage === 'en'
                ? 'Hello, my name is Willem'
                : "Bienvenue, moi c'est Willem"}
            </h1>
            <p className='tagline hero-sub-title'>
              {stateLanguage === 'en'
                ? 'I am a front-end developer who is currently based in Paris 🧑🏻‍💻'
                : 'Je suis développeur front-end, basé à Paris 🧑🏻‍💻'}
            </p>
          </div>
          <Link className='main-img-link' to='/my-portfolio/about'>
            <img
              src={mainPortrait}
              alt='shoot de Willem dans une entreprise super sympa #LaBelleFolie ^^'
              className='main-img'
            />
          </Link>
        </header>
        <a className='upper-link stack-link' href='#stackBox'>
          <h3 className='title sub-title-4'>
            {' '}
            {stateLanguage === 'en' ? 'My Stack' : 'Ma Stack'}
          </h3>
          <svg
            className='arrow-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'>
            <path d='M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10l10-10z'></path>
          </svg>
        </a>
      </div>
    </RevealOnScroll>
  )
}
