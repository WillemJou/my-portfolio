import { useEffect } from 'react'
import { BoxStack } from '../layouts/boxStack'
import { Header } from '../layouts/header'
import { SelectedWorksContainer } from '../layouts/selectedWorks'
import { RevealOnScroll } from '../utils/revealOn'

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <RevealOnScroll>
      <Header />
      <div className='stack wrapper gap-20'>
        <BoxStack />
        <SelectedWorksContainer />
      </div>
    </RevealOnScroll>
  )
}
