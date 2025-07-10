import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './globals/theme'
import { CallToAction } from './layouts/calltoAction'
import { Footer } from './layouts/footer'
import { Nav } from './layouts/nav'
import { GoTop } from './components/goTopBtn'
import { useSizeScreen } from './hooks/useSizeScreen'

export function Root() {
  const { theme } = useContext(ThemeContext)
  const { widthSize, heightSize } = useSizeScreen()
  return (
    <div className="stack background" data-theme={theme}>
      {widthSize > heightSize ? <GoTop /> : null}
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
