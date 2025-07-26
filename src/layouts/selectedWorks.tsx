import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Gallery } from '../components/Gallery'
import { RevealOnScroll } from '../utils/RevealOn'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { LanguageContext } from '../globals/Languages'
import data from '../data.json'
import { Error } from '../components/Error'

export function SelectedWorksContainer() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  const { scrollToTop } = useScrollToTop()

  return (
    <RevealOnScroll>
      <section id="projects" className="relative stack gap-24">
        <header className="section-header stack gap-4">
          <div className="flex-start gap-24">
            <h3 className="title sub-title-2 title-home-section">
              {stateLanguage === 'en'
                ? ' Selected Works'
                : 'Projets sélectionnés'}
            </h3>
            <Link
              className="view-all-link simple-flex"
              to="/works"
              onClick={scrollToTop}>
              {stateLanguage === 'en' ? 'View All' : 'Voir tout'}
            </Link>
          </div>
          <p className="tagline">
            {' '}
            {stateLanguage === 'en'
              ? 'Take a look below at some of my featured work from my training'
              : 'Voici quelques projets conçus pendant ma formation'}
          </p>
        </header>
        {data ? (
          <ul className="card-layout">
            <Gallery works={data.selectedWorks} />
          </ul>
        ) : (
          <Error />
        )}
      </section>
    </RevealOnScroll>
  )
}
