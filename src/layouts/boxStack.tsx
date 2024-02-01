import { useState, useContext } from 'react'
import { selectedStacks } from '../utils/dataService'
import { RevealOnScroll } from '../utils/revealOn'
import { LanguageContext } from '../globals/languages'

interface Stack {
  title: string
  id: number
  topics: string[]
  frameworks: string[]
  icon: string
}
export function BoxStack() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language

  const { stacks } = selectedStacks()
  const [isMounted, setisMounted] = useState(-1)

  const handleOpen = (currIndex: number) => {
    currIndex === isMounted ? setisMounted(-1) : setisMounted(currIndex)
  }

  return (
    <div id='stackBox' className='skills stack'>
      <RevealOnScroll>
        <section className='box'>
          {stacks.map((stack: Stack, listIndex) => (
            <ul
              key={stack.id}
              className='stack stack-element pointer relative gap-2'
              onClick={() => handleOpen(listIndex)}>
              <h3 className='title sub-title-4'>{stack.title}</h3>

              {isMounted === listIndex ? (
                <div className='stack-lists-container'>
                  <p className='stack-list'>
                    {stack.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </p>
                  <p className='stack-list'>
                    {stack.frameworks.map((framework, index) => (
                      <li key={index}>{framework}</li>
                    ))}
                  </p>
                </div>
              ) : null}

              <img className='techno-icon' src={stack.icon} />
              <svg
                className={
                  isMounted === listIndex
                    ? 'icon pointer menu-btn_opened'
                    : 'icon pointer menu-btn_closed'
                }
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1024 1024'>
                <path d='m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0'></path>
              </svg>
            </ul>
          ))}
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
