import { Link, useParams } from 'react-router-dom'
import { otherProjects, selectedProjects } from '../utils/DataService'
import { Carousel } from '../components/Carrousel'
import { useContext } from 'react'
import { LanguageContext } from '../globals/Languages'

export function Project() {
  const { id } = useParams()
  const { selectedProject } = selectedProjects(id)
  const { otherProject } = otherProjects(id)

  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language

  return (
    <div className="stack gap-24">
      <header className="header stack gap-2">
        <div className="backlink-container">
          {' '}
          <Link className="back-link" to="works">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon arrow-icon"
              viewBox="0 0 24 24">
              <path
                d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0"
                clipRule="evenodd"></path>
            </svg>
            {stateLanguage === 'en' ? 'Works' : 'Projets'}
          </Link>
        </div>
        <div className="start stack gap-4">
          <div className="stack gap-2">
            <h1 className="title big-title">
              {selectedProject?.title || otherProject?.title}
            </h1>
          </div>
          <div className="details">
            <div className="tags">
              {selectedProject?.tags.map((tag, index) => (
                <div key={index} className="pill">
                  {tag}
                </div>
              )) ||
                otherProject?.tags.map((tag, index) => (
                  <div key={index} className="pill">
                    {tag}
                  </div>
                ))}
            </div>
            <p className="tagline">
              {' '}
              {stateLanguage === 'en'
                ? selectedProject?.descriptionEn
                : selectedProject?.descriptionFr}
              {stateLanguage === 'en'
                ? otherProject?.descriptionEn
                : otherProject?.descriptionFr}
            </p>
          </div>
        </div>
      </header>
      <section className="">
        <div className="stack gap-10 work-content">
          {otherProject === undefined ? (
            <Carousel projects={selectedProjects} project={selectedProject} />
          ) : (
            <Carousel projects={otherProjects} project={otherProject} />
          )}
          <h4 className="sub-title-2 review-title">
            {' '}
            {stateLanguage === 'en'
              ? 'Evaluation reviews'
              : "Critique d'évaluation"}
          </h4>
          <article className="article">
            "
            {stateLanguage === 'en'
              ? selectedProject?.mentionEn
              : selectedProject?.mentionFr}
            {stateLanguage === 'en'
              ? otherProject?.mentionEn
              : otherProject?.mentionFr}
            "
          </article>
        </div>
      </section>
    </div>
  )
}
