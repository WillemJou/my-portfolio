import { useContext } from 'react'
import { ThemeContext } from './features/theme'
import { CallToAction } from './layouts/calltoAction'
import { Header } from './layouts/header'
import { Footer } from './layouts/footer'
import { Nav } from './layouts/nav'

export function Root() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div data-theme={theme}>
        <Nav />
        <Header />
        <CallToAction />
        <Footer />
      </div>
    </>
  )
}
