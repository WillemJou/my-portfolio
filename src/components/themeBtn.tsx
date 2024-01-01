import { useContext } from 'react'
import { ThemeContext } from '../globals/theme'
import light from '../assets/icon/light.svg'
import dark from '../assets/icon/dark.svg'

export function ThemeBtn() {
  const theme = useContext(ThemeContext)
  return (
    <div className='theme-toggle'>
      <button className='theme-btn' onClick={() => theme.clickHandler()}>
        <span className='icon-light'>
          <img src={light} className='icon theme-icon' alt='light theme' />
        </span>
        <span className='icon-dark'>
          <img src={dark} className='icon theme-icon' alt='dark theme' />
        </span>
      </button>
    </div>
  )
}
