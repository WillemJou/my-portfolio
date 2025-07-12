import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './globals/theme'
import { CallToAction } from './layouts/calltoAction'
import { Footer } from './layouts/footer'
import { Nav } from './layouts/nav'
import { GoTopBtn } from './components/goTopBtn'

export function Root() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="stack background" data-theme={theme}>
      <GoTopBtn />
      <ScrollRestoration />
      <Nav />
      <main className="stack">
        <Outlet />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
