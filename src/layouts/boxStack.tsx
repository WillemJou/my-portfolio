import { useContext } from 'react'
import { RevealOnScroll } from '../utils/revealOn'
import { LanguageContext } from '../globals/languages'
import { selectedStacks } from '../utils/dataService'
import { Stack } from '../components/stack'

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
        <div id="stackbox" className="section-header gap-4 stack">
          <a className="stackbox-link" href="#stackBox">
            <h3 className="title sub-title-2">
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
        </div>
      </section>
    </RevealOnScroll>
  )
}
