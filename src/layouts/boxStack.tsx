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
    <div className='skills stack relative'>
      <RevealOnScroll>
        <section className='box'>
          <>
            <Stack stack={JS} />
            <Stack stack={REACT} />
            <Stack stack={MOBILE} />
          </>
        </section>
        <a className='upper-link end' href='#projects'>
          <h3 className='title sub-title-4'>
            {' '}
            {stateLanguage === 'en' ? 'My Projects' : 'Mes Projets'}
          </h3>
          <svg
            className='arrow-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'>
            <path d='M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10l10-10z'></path>
          </svg>
        </a>
      </RevealOnScroll>
    </div>
  )
}
