import { Link } from 'react-router-dom'
import { Gallery } from '../components/gallery'
import { RevealOnScroll } from '../utils/revealOn'
import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'
import data from '../data.json'
import { Error } from '../components/error'

export function SelectedWorksContainer() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  return (
    <section className='relative stack gap-20'>
      <header className='section-header stack'>
        <div className='gap-4 stack'>
          <h3 className='title sub-title-2'>
            {stateLanguage === 'en'
              ? ' Selected Works'
              : 'Projets sélectionnés'}
          </h3>
          <p>
            {' '}
            {stateLanguage === 'en'
              ? 'Take a look below at some of my featured work from my training'
              : 'Voici quelques projets conçus pendant ma formation'}
          </p>
        </div>
        <div className='content-box'>
          <Link className='view-all-link simple-flex' to='/my-portfolio/works'>
            {stateLanguage === 'en' ? 'View All' : 'Voir tout'}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon_active'
              viewBox='0 0 256 256'>
              <path d='m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48'></path>
            </svg>
          </Link>
        </div>
      </header>
      <RevealOnScroll>
        {data ? <Gallery works={data.selectedWorks} /> : <Error />}
      </RevealOnScroll>
    </section>
  )
}
