import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'
import { Link } from 'react-router-dom'
import mainPortrait from '/mainPortrait.jpg'

export function Header() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  return (
    <div className='wrapper stack gap-4'>
      <header className='main-header hero'>
        <div className='stack start gap-2 pad-top-1 w-50%'>
          <h1 className='title big-title'>
            {' '}
            {stateLanguage === 'en'
              ? 'Hello, my name is Willem !'
              : 'Bienvenue, ici Willem !'}
          </h1>
          <p className='tagline'>
            {stateLanguage === 'en'
              ? 'I am a developer who is currently based in Paris 🧑🏻‍💻'
              : 'Je suis un développeur basé à Paris 🧑🏻‍💻'}
          </p>
        </div>
        <Link to='/my-portfolio/about'>
          <img
            src={mainPortrait}
            alt='shoot de Willem dans une entreprise super sympa #LaBelleFolie ^^'
            className='main-img'
          />
        </Link>
      </header>
      <a className='stack-link' href='#box'>
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
  )
}
