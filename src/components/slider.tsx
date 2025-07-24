import { useState, useEffect, MouseEventHandler } from 'react'
import { NavItems } from './NavItems'
import { Socials } from './Socials'
import { LanguageBtn } from './LanguageBtn'
import { ThemeBtn } from './ThemeBtn'
import { Fade } from '../utils/Fade'

type SliderProps = {
  openHamburger: boolean
  handleOpen: MouseEventHandler
}

export function Slider({ openHamburger, handleOpen }: SliderProps) {
  const [style, setStyle] = useState('slider-position')

  useEffect(() => {
    if (openHamburger) {
      setStyle('fixed')
    }
  }, [openHamburger])

  return (
    <>
      <Fade
        fadeStyle={`${style} fade-slider`}
        outStyle=" out-slider"
        visible={openHamburger}>
        <div className={`${style} above-all`}>
          <div className="nav-slider relative stack flex-center gap-6">
            <div className="cross-btn-container">
              <button style={{ paddingTop: '1rem' }} onClick={handleOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon cross-icon"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"></path>
                </svg>
              </button>
            </div>
            <NavItems />
            <Socials />
            <div className="theme-language-container">
              <LanguageBtn />
              <ThemeBtn />
            </div>
          </div>
        </div>
      </Fade>
    </>
  )
}
