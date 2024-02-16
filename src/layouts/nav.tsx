import { useState } from 'react'
import { LanguageBtn } from '../components/languageBtn'
import { NameNavLink } from '../components/nameNavLink'
import { NavItems } from '../components/navItems'
import { Socials } from '../components/socials'
import { ThemeBtn } from '../components/themeBtn'
import { Hamburger } from '../components/hamburger'

export function Nav() {
  const [openHamburger, setOpenHamburger] = useState(false)
  let width = window.innerWidth
  console.log(width)

  const handleOpen = () => {
    setOpenHamburger(!openHamburger)
  }

  return (
    <nav className='nav-layout gap-4'>
      <div className='flex-align gap-4'>
        <NameNavLink />
        <Socials />
      </div>
      <NavItems />
      <div className='theme-language-container'>
        <LanguageBtn />
        <ThemeBtn />
        <div onClick={handleOpen}>
          <Hamburger />
          {openHamburger && (
            <>
              <NavItems />
              <Socials />
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
