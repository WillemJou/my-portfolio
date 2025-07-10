import { useContext } from 'react'
import { ThemeContext } from '../globals/theme'
import daySound from '../daySound.mp3'
import nightSound from '../nightSound.mp3'

export function ThemeBtn() {
  const theme = useContext(ThemeContext)
  const stateTheme = theme.theme
  const playSound = () => {
    const nightSoundClick = new Audio(nightSound)
    const daySoundClick = new Audio(daySound)
    stateTheme === 'light' ? nightSoundClick.play() : daySoundClick.play()
  }

  return (
    <div className="theme-toggle">
      <button
        className={
          stateTheme === 'light' ? 'theme-btn-light' : 'theme-btn-dark'
        }
        onClick={() => {
          theme.clickHandler(), playSound()
        }}>
        <span className="sr-only">Theme</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            stateTheme === 'light' ? 'icon icon_active' : 'icon theme-icon'
          }
          viewBox="0 0 256 256">
          <path d="M122 40V16a6 6 0 0 1 12 0v24a6 6 0 0 1-12 0m68 88a62 62 0 1 1-62-62a62.07 62.07 0 0 1 62 62m-12 0a50 50 0 1 0-50 50a50.06 50.06 0 0 0 50-50M59.76 68.24a6 6 0 1 0 8.48-8.48l-16-16a6 6 0 0 0-8.48 8.48Zm0 119.52l-16 16a6 6 0 1 0 8.48 8.48l16-16a6 6 0 1 0-8.48-8.48M192 70a6 6 0 0 0 4.24-1.76l16-16a6 6 0 0 0-8.48-8.48l-16 16A6 6 0 0 0 192 70m4.24 117.76a6 6 0 0 0-8.48 8.48l16 16a6 6 0 0 0 8.48-8.48ZM46 128a6 6 0 0 0-6-6H16a6 6 0 0 0 0 12h24a6 6 0 0 0 6-6m82 82a6 6 0 0 0-6 6v24a6 6 0 0 0 12 0v-24a6 6 0 0 0-6-6m112-88h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12"></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            stateTheme === 'light' ? 'icon theme-icon' : 'icon icon_active'
          }
          viewBox="0 0 1024 1024">
          <path d="M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512M171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"></path>
          <path d="M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32m128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m160 127.68l224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"></path>
        </svg>
      </button>
    </div>
  )
}
