import { useState, useRef, useEffect } from 'react'
import { LanguageBtn } from '../components/languageBtn'
import { NameNavLink } from '../components/nameNavLink'
import { NavItems } from '../components/navItems'
import { Socials } from '../components/socials'
import { ThemeBtn } from '../components/themeBtn'
import { Hamburger } from '../components/hamburger'
import { Slider } from '../components/slider'
import { Fade } from '../utils/fade'

export function Nav() {
  let width = window.innerWidth
  const slider = useRef(null)
  const [openHamburger, setOpenHamburger] = useState(false)
  const [style, setStyle] = useState('absolute')

  const closeOpenSlider = (e: MouseEvent) => {
    if (openHamburger && !slider.current?.contains(e.target)) {
      setOpenHamburger(false)
    }
  }
  document.addEventListener('mousedown', closeOpenSlider)

  const handleOpen = () => {
    setOpenHamburger(!openHamburger)
  }

  useEffect(() => {
    if (openHamburger) {
      setTimeout(function () {
        setStyle(' fixed')
      }, 1200)
    }
  }, [closeOpenSlider])

  return (
    <nav className='nav-layout gap-4'>
      {width > 1030 ? (
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
      ) : (
        <>
          <div className='flex-align gap-4'>
            <NameNavLink />
          </div>
          <div className='flex-end'>
            <button onClick={handleOpen}>
              <Hamburger buttonOpen={openHamburger} />
            </button>
          </div>

          <div className={style} ref={slider}>
            <Fade
              fadeStyle='fade-slider'
              outStyle=' out-slider'
              visible={openHamburger}>
              <Slider />
            </Fade>
          </div>
        </>
      )}
    </nav>
  )
}
