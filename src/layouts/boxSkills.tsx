import { selectedStacks } from '../utils/dataService'
import { RevealOnScroll } from '../utils/revealOn'

export function BoxSkills() {
  const { stacks } = selectedStacks()

  return (
    <div className='skills stack'>
      <h3 className='title sub-title-2'>My Stack</h3>
      <RevealOnScroll>
        <section className='box'>
          {stacks.map(
            (stack: {
              title: string
              topics: string[]
              frameworks: string[]
              icon: string
            }) => (
              <ul className='stack gap-4 stack-element relative '>
                <div className='flex-align gap-2'>
                  <h3 className='title sub-title-4'>{stack.title}</h3>
                </div>
                <p>
                  {stack.topics.map((topic) => (
                    <li>{topic}</li>
                  ))}
                </p>
                <p>
                  {stack.frameworks.map((framework) => (
                    <li>{framework}</li>
                  ))}
                </p>
                <img className='techno-icon' src={stack.icon} />
              </ul>
            )
          )}
        </section>
      </RevealOnScroll>
    </div>
  )
}
