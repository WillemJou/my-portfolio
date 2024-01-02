import { NameNavLink } from '../components/nameNavLink'
import { NavItems } from '../components/navItems'
import { Socials } from '../components/socials'
import { ThemeBtn } from '../components/themeBtn'

export function Nav() {
  return (
    <nav className='nav-layout gap-4'>
      <div className='simple-flex gap-4'>
        <NameNavLink />
        <Socials />
      </div>
      <NavItems />
      <ThemeBtn />
    </nav>
  )
}
