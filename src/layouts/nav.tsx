import { useState, useEffect } from 'react'
import { LanguageBtn } from '../components/LanguageBtn'
import { NameNavLink } from '../components/NameNavLink'
import { NavItems } from '../components/NavItems'
import { Socials } from '../components/Socials'
import { ThemeBtn } from '../components/ThemeBtn'
import { Hamburger } from '../components/Hamburger'
import { Slider } from '../components/Slider'
import { useSizeScreen } from '../hooks/useSizeScreen'

export function Nav() {
  const [openHamburger, setOpenHamburger] = useState(false)

  const { widthSize, heightSize } = useSizeScreen()
  const handleOpen = () => {
    setOpenHamburger(!openHamburger)
  }
  const laptopRes = widthSize > 1030
  const mobileAndTablettRes = widthSize <= 1030
  const portrait = heightSize > widthSize
  const landscape = heightSize < widthSize

  return (
    <>
      {laptopRes && (
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
      {mobileAndTablettRes && portrait && (
        <nav className={`nav-layout ${landscape ? ' sticky' : ' '}`}>
          <div className="flex-align gap-4">
            <NameNavLink />
          </div>
          <div className="flex-end hamburger-container">
            <Hamburger handleOpen={handleOpen} openHamburger={openHamburger} />
          </div>
          {/* Overlay de fond - s'affiche seulement quand le slider est ouvert */}
          {openHamburger && (
            <div className="slider-overlay" onClick={handleOpen} />
          )}
          <Slider openHamburger={openHamburger} handleOpen={handleOpen} />
        </nav>
      )}
      {mobileAndTablettRes && landscape && (
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
