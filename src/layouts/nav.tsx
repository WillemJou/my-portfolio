import { useState } from 'react'
import { LanguageBtn } from '../components/languageBtn'
import { NameNavLink } from '../components/nameNavLink'
import { NavItems } from '../components/navItems'
import { Socials } from '../components/socials'
import { ThemeBtn } from '../components/themeBtn'
import { Hamburger } from '../components/hamburger'
import { Slider } from '../components/slider'

export function Nav() {
  let width = window.screen.width

  const [openHamburger, setOpenHamburger] = useState(false)

  const handleOpen = () => {
    setOpenHamburger(!openHamburger)
  }

  return (
    <nav className='nav-layout gap-4'>
      {width > 1030 && (
        <>
          <div className='flex-align gap-4'>
            <NameNavLink />
            <Socials />
          </div>
          <NavItems />
          <div className='theme-language-container'>
            <LanguageBtn />
            <ThemeBtn />
          </div>
        </>
      )}
      {width <= 1030 && (
        <>
          <div className='flex-align gap-4'>
            <NameNavLink />
          </div>
          <div className='flex-end'>
            <Hamburger handleOpen={handleOpen} openHamburger={openHamburger} />
          </div>
          <Slider openHamburger={openHamburger} handleOpen={handleOpen} />
        </>
      )}
    </nav>
  )
}
