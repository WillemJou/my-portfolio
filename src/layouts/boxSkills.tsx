import { useState } from 'react'
import { selectedStacks } from '../utils/dataService'

export function BoxSkills() {
  const [toggle, setToggle] = useState(false)
  const { stacks } = selectedStacks()

  const menuToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='skills stack'>
      <h3 className='title sub-title-2'>My Stack</h3>

      <section className='box'>
        {stacks.map(
          (stack: {
            title: string
            topics: string[]
            frameworks: string[]
            icon: string
          }) => (
            <ul className='stack gap-4 relative '>
              <div className='flex-align gap-2' onClick={menuToggle}>
                <h3 className='title pointer sub-title-4'>{stack.title}</h3>
              </div>
              <p>
                {stack.frameworks.map((framework) => (
                  <li>{framework}</li>
                ))}
              </p>
              <p>
                {stack.topics.map((topic) => (
                  <li>{topic}</li>
                ))}
              </p>
              <img className='techno-icon' src={stack.icon} />
            </ul>
          )
        )}
      </section>
    </div>
  )
}
