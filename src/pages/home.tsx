import { useEffect } from 'react'
import { BoxSkills } from '../layouts/boxSkills'
import { Header } from '../layouts/header'
import { SelectedWorksContainer } from '../layouts/selectedWorks'
import { RevealOnScroll } from '../utils/revealOn'

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <RevealOnScroll>
      <div className='stack wrapper gap-29'>
        <Header />
        <BoxSkills />
        <SelectedWorksContainer />
      </div>
    </RevealOnScroll>
  )
}
