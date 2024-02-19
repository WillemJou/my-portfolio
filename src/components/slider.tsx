import { useState, useRef, useEffect } from 'react'
import { NavItems } from './navItems'
import { Socials } from './socials'
import { LanguageBtn } from './languageBtn'
import { ThemeBtn } from './themeBtn'
import { Fade } from '../utils/fade'

type SliderProps = {
  openHamburger: boolean
  setOpenHamburger: (openHamburger: boolean) => void
}

export function Slider({ openHamburger, setOpenHamburger }: SliderProps) {
  const [style, setStyle] = useState('slider-position')
  const slider = useRef<HTMLDivElement>(null)

  const closeOpenSlider = (e: MouseEvent) => {
    if (openHamburger && slider.current?.contains(e.target as Node | null)) {
      setOpenHamburger(false)
      setStyle('slider-position')
    }
  }
  document.addEventListener('mousedown', closeOpenSlider)

  useEffect(() => {
    if (openHamburger) {
      setStyle('fixed')
    }
  }, [closeOpenSlider])

  return (
    <div className='back-screen absolute' ref={slider}>
      <Fade
        fadeStyle={`${style} fade-slider`}
        outStyle=' out-slider'
        visible={openHamburger}>
        <div className={`${style} above`}>
          <div className='nav-slider stack flex-center gap-6'>
            <NavItems />
            <Socials />
            <LanguageBtn />
            <div className='theme-language-container'>
              <ThemeBtn />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
