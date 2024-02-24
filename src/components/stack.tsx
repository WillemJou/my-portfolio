import { useState } from 'react'
import { Fade } from '../utils/fade'

interface Stacks {
  title: string
  id: number
  topics: string[]
  frameworks: string[]
  icon: string
}
type StackProps = {
  stack: Stacks | undefined
}

export function Stack({ stack }: StackProps) {
  const [isMounted, setisMounted] = useState(false)
  const handleOpen = () => {
    setisMounted(!isMounted)
  }

  //const listStyle = (el: string) => (el === '' ?  : 'list-style-type: disc')

  return (
    <ul
      key={stack?.id}
      className='stack stack-element pointer relative gap-2'
      onClick={() => handleOpen()}>
      <h3 className='title sub-title-4'>{stack?.title}</h3>
      <Fade fadeStyle='fade-stack' outStyle=' out-stack' visible={isMounted}>
        <div className='stack-lists-container'>
          <p className='stack-list'>
            {stack?.topics.map((topic, index) => (
              <li
                className={topic === '' ? 'no-style-list' : 'style-list'}
                key={index}>
                {topic}
              </li>
            ))}
          </p>
          <p className='stack-list'>
            {stack?.frameworks.map((framework, index) => (
              <li className='style-list' key={index}>
                {framework}
              </li>
            ))}
          </p>
        </div>
      </Fade>
      <img
        className={`${isMounted ? 'techno-icon_opened' : 'techno-icon_closed'}`}
        src={stack?.icon}
      />
      <svg
        className={
          isMounted
            ? 'icon pointer menu-btn_opened'
            : 'icon pointer menu-btn_closed'
        }
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1024 1024'>
        <path d='m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0'></path>
      </svg>
    </ul>
  )
}
