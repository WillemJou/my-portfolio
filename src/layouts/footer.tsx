import { Socials } from '../components/socials'

export function Footer() {
  return (
    <>
      <footer className='footer'>
        <p>Design by Astro in Portland</p>
        <p>Developed by Willem Jouret in Paris</p>
        <Socials />
      </footer>
    </>
  )
}
