import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './globals/theme'
import { CallToAction } from './layouts/calltoAction'
import { Footer } from './layouts/footer'
import { Nav } from './layouts/nav'

export function Root() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='stack background' data-theme={theme}>
      <Nav />
      <main className='stack gap-24'>
        <Outlet />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
