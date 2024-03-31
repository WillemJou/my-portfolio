import { useEffect } from 'react'
import { BoxStack } from '../layouts/boxStack'
import { Header } from '../layouts/header'
import { SelectedWorksContainer } from '../layouts/selectedWorks'
import { scrollToTop } from '../utils/scrollToTop'

export function Home() {
  useEffect(() => {
    scrollToTop()
  }, [])
  return (
    <>
      <Header />
      <div className='stack wrapper gap-24'>
        <BoxStack />
        <SelectedWorksContainer />
      </div>
    </>
  )
}
