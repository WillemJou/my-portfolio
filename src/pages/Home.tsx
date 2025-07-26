import { useContext } from 'react'
import { LanguageContext } from '../globals/Languages'
import { BoxStack } from '../layouts/BoxStack'
import { Header } from '../layouts/Header'
import { SelectedWorksContainer } from '../layouts/SelectedWorks'
import { AnchorLink } from '../components/AnchorLink'

export function Home() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language

  return (
    <>
      <div className="all-screen">
        <Header />
        <AnchorLink
          title={stateLanguage === 'en' ? 'My Stack' : 'Ma Stack'}
          className="upper-link"
          anchor="#stackbox"
        />
      </div>
      <div className="stack wrapper gap-24">
        <BoxStack />

        <SelectedWorksContainer />
      </div>
    </>
  )
}
