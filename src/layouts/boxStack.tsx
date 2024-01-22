import { useState } from 'react'
import { selectedStacks } from '../utils/dataService'
import { RevealOnScroll } from '../utils/revealOn'

interface Stack {
  title: string
  id: number
  topics: string[]
  frameworks: string[]
  icon: string
}
export function BoxStack() {
  const { stacks } = selectedStacks()
  const [isOpen, setIsOpen] = useState(-1)

  const handleBtn = (currIndex: number) => {
    currIndex === isOpen ? setIsOpen(-1) : setIsOpen(currIndex)
  }

  return (
    <div id='box' className='skills stack'>
      <RevealOnScroll>
        <section className='box'>
          {stacks.map((stack: Stack, listIndex) => (
            <ul
              key={stack.id}
              className={
                isOpen === listIndex
                  ? 'gap-4 stack-element_opened relative'
                  : 'gap-4 stack-element_closed relative'
              }
              onClick={() => handleBtn(listIndex)}>
              <div className='stack pointer gap-2'>
                <h3 className='title sub-title-4'>{stack.title}</h3>
                {isOpen === listIndex ? (
                  <>
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
                  </>
                ) : null}
                <img className='techno-icon' src={stack.icon} />
              </div>
              <svg
                className={
                  isOpen === listIndex
                    ? 'icon pointer menu-btn_opened'
                    : 'icon pointer menu-btn_closed'
                }
                onClick={() => handleBtn(listIndex)}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1024 1024'>
                <path d='m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0'></path>
              </svg>
            </ul>
          ))}
        </section>
      </RevealOnScroll>
    </div>
  )
}
