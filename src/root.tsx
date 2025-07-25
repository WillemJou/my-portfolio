import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './globals/Theme'
import { CallToAction } from './layouts/CalltoAction'
import { Footer } from './layouts/Footer'
import { Nav } from './layouts/Nav'
import { GoTopBtn } from './components/GoTopBtn'

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
