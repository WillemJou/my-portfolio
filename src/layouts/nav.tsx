import { useState } from 'react'
import { LanguageBtn } from '../components/languageBtn'
import { NameNavLink } from '../components/nameNavLink'
import { NavItems } from '../components/navItems'
import { Socials } from '../components/socials'
import { ThemeBtn } from '../components/themeBtn'
import { Hamburger } from '../components/hamburger'
import { Slider } from '../components/slider'
import { useSizeScreen } from '../hooks/useSizeScreen'

export function Nav() {
  const [openHamburger, setOpenHamburger] = useState(false)
  const { widthSize, heightSize } = useSizeScreen()

  const handleOpen = () => {
    setOpenHamburger(!openHamburger)
  }

  return (
    <>
      {widthSize > 1030 && (
        <nav className="nav-layout above-all gap-4">
          <div className="flex-align gap-4">
            <NameNavLink />
            <Socials />
          </div>
          <NavItems />
          <div className="theme-language-container">
            <LanguageBtn />
            <ThemeBtn />
          </div>
        </nav>
      )}
      {widthSize <= 1030 && heightSize > widthSize && (
        <nav
          className={`nav-layout ${heightSize > widthSize ? ' sticky' : ' '}`}>
          <div className="flex-align gap-4">
            <NameNavLink />
          </div>
          <div className="flex-end hamburger-container">
            <Hamburger handleOpen={handleOpen} openHamburger={openHamburger} />
          </div>
          <Slider openHamburger={openHamburger} handleOpen={handleOpen} />
        </nav>
      )}
      {widthSize <= 1030 && heightSize < widthSize && (
        <nav className="above-all nav-layout gap-4">
          <div className="flex-align flex-center text-align gap-4">
            <NameNavLink />
            <Socials />
          </div>
          <NavItems />
          <div className="theme-language-container">
            <LanguageBtn />
            <ThemeBtn />
          </div>
        </nav>
      )}
    </>
  )
}
