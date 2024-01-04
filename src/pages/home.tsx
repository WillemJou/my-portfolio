import { useEffect } from 'react'
import { BoxSkills } from '../layouts/boxSkills'
import { Header } from '../layouts/header'
import { SelectedWorksContainer } from '../layouts/selectedWorks'

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='stack wrapper gap-20'>
      <Header />
      <BoxSkills />
      <SelectedWorksContainer />
    </div>
  )
}
