import { BoxStack } from '../layouts/boxStack'
import { Header } from '../layouts/header'
import { SelectedWorksContainer } from '../layouts/selectedWorks'
import { AnchorLink } from '../components/anchorLink'

export function Home() {
  return (
    <>
      <Header />
      <AnchorLink
        titleEn="My Stack"
        titleFr="Ma Stack"
        anchor="#stackBoxTitle"
      />
      <div className="stack wrapper gap-24">
        <BoxStack />
        <AnchorLink
          titleEn="My Projects"
          titleFr="Mes Projets"
          anchor="#projects"
        />
        <SelectedWorksContainer />
      </div>
    </>
  )
}
