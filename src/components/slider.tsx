import { NavItems } from './navItems'
import { Socials } from './socials'
import { LanguageBtn } from './languageBtn'
import { ThemeBtn } from './themeBtn'

export function Slider() {
  return (
    <div className='above absolute'>
      <div className='nav-slider stack flex-center gap-6'>
        <NavItems />
        <Socials />
        <LanguageBtn />
        <div className='theme-language-container'>
          <ThemeBtn />
        </div>
      </div>
    </div>
  )
}
