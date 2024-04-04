import { useState, useEffect } from 'react'
import { LanguageBtn } from '../components/languageBtn'
import { NameNavLink } from '../components/nameNavLink'
import { NavItems } from '../components/navItems'
import { Socials } from '../components/socials'
import { ThemeBtn } from '../components/themeBtn'
import { Hamburger } from '../components/hamburger'
import { Slider } from '../components/slider'
import { useWidthScreen } from '../hooks/useWidthScreen'
import { useScrollingUp } from '../hooks/useScrollingUp'

export function Nav() {
  const [openHamburger, setOpenHamburger] = useState(false)
  const { scrollUp } = useScrollingUp()
  const widthSize = useWidthScreen()
  const handleOpen = () => {
    setOpenHamburger(!openHamburger)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <>
      {widthSize > 1030 && (
        <nav className='nav-layout gap-4'>
          <div className='flex-align gap-4'>
            <NameNavLink />
            <Socials />
          </div>
          <NavItems />
          <div className='theme-language-container'>
            <LanguageBtn />
            <ThemeBtn />
          </div>
        </nav>
      )}
      {widthSize <= 1030 && (
        <nav className={`nav-layout ${scrollUp ? 'sticky' : 'nav_hide'}`}>
          <div className='flex-align gap-4'>
            <NameNavLink />
          </div>
          <div className='flex-end hamburger-container'>
            <Hamburger handleOpen={handleOpen} openHamburger={openHamburger} />
          </div>
          <Slider openHamburger={openHamburger} handleOpen={handleOpen} />
        </nav>
      )}
    </>
  )
}
