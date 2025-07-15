import { useContext } from 'react'
import { RevealOnScroll } from '../utils/RevealOn'
import { LanguageContext } from '../globals/languages'
import { selectedStacks } from '../utils/dataService'
import { Stack } from '../components/Stack'
import { AnchorLink } from '../components/AnchorLink'

export function BoxStack() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  const { stacks } = selectedStacks()
  const JS = stacks.find((js) => js.id === 29)
  const REACT = stacks.find((js) => js.id === 11)
  const MOBILE = stacks.find((js) => js.id === 80)

  return (
    <RevealOnScroll>
      <section className="skills stack relative">
        <div id="stackbox" className="section-header stack">
          <a className="stackbox-link" href="#stackBox">
            <h3 className="title sub-title-2 title-home-section">
              {stateLanguage === 'en' ? 'My Stack' : 'Ma Stack'}
            </h3>
          </a>
          <p className="tagline">
            {stateLanguage === 'en'
              ? 'I code in JavaScript and React, as well as React Native for mobile.'
              : "Je code en JavaScript et React, j'utilise React Native pour le mobile."}
          </p>
        </div>

        <div className="box-container relative">
          <ul className="box">
            <>
              <Stack stack={JS} />
              <Stack stack={REACT} />
              <Stack stack={MOBILE} />
            </>
          </ul>
          <AnchorLink
            title={stateLanguage === 'en' ? 'My Projects' : 'Mes Projets'}
            anchor="#projects"
            className="upper-link project-link"
          />
        </div>
      </section>
    </RevealOnScroll>
  )
}
