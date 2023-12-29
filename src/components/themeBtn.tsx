import { useContext } from 'react'
import { ThemeContext } from '../globals/theme'

export function ThemeBtn() {
  const theme = useContext(ThemeContext)
  return (
    <button className='theme-btn' onClick={() => theme.clickHandler()}>
      Dark Mode
    </button>
  )
}
