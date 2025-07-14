import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'
import { BoxStack } from '../layouts/boxStack'
import { Header } from '../layouts/header'
import { SelectedWorksContainer } from '../layouts/selectedWorks'
import { AnchorLink } from '../components/anchorLink'

export function Home() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language

  return (
    <>
      <Header />
      <AnchorLink
        title={stateLanguage === 'en' ? 'My Stack' : 'Ma Stack'}
        className="upper-link"
        anchor="#stackbox"
      />
      <div className="stack wrapper gap-24">
        <BoxStack />

        <SelectedWorksContainer />
      </div>
    </>
  )
}
