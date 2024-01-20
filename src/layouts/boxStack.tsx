import { useState } from 'react'
import { selectedStacks } from '../utils/dataService'
import { RevealOnScroll } from '../utils/revealOn'

export function BoxStack() {
  const { stacks } = selectedStacks()
  const [openClose, setOpenClose] = useState(false)
  const handleBtn = () => {
    setOpenClose(!openClose)
  }

  return (
    <div id='box' className='skills stack'>
      <RevealOnScroll>
        <section className='box'>
          {stacks.map(
            (stack: {
              title: string
              topics: string[]
              frameworks: string[]
              icon: string
            }) => (
              <ul
                className={
                  openClose
                    ? 'gap-4 stack-element_opened relative'
                    : 'gap-4 stack-element_closed relative'
                }
                onClick={() => handleBtn()}>
                <div className='stack pointer gap-2'>
                  <h3 className='title sub-title-4'>{stack.title}</h3>
                  {openClose && (
                    <>
                      <p className='stack-list'>
                        {stack.topics.map((topic) => (
                          <li>{topic}</li>
                        ))}
                      </p>
                      <p className='stack-list'>
                        {stack.frameworks.map((framework) => (
                          <li>{framework}</li>
                        ))}
                      </p>
                    </>
                  )}
                  <img className='techno-icon' src={stack.icon} />
                </div>
                <svg
                  className={
                    openClose
                      ? 'icon pointer menu-btn_opened'
                      : 'icon pointer menu-btn_closed'
                  }
                  onClick={() => handleBtn()}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 1024 1024'>
                  <path d='m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0'></path>
                </svg>
              </ul>
            )
          )}
        </section>
      </RevealOnScroll>
    </div>
  )
}
