import { BoxSkills } from '../layouts/boxSkills'
import { Header } from '../layouts/header'
import { SelectedWorksContainer } from '../layouts/selectedWorks'

export function Home() {
  return (
    <div className='stack wrapper gap-20'>
      <Header />
      <BoxSkills />
      <SelectedWorksContainer />
    </div>
  )
}
