import { BoxStack } from '../layouts/boxStack'
import { Header } from '../layouts/header'
import { SelectedWorksContainer } from '../layouts/selectedWorks'

export function Home() {
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
