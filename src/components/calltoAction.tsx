import { Link } from 'react-router-dom'

export function CallToAction() {
  const email = 'willem.jouret9@gmail.com'
  return (
    <aside className='aside-layout'>
      <h3 className='sub-title-3'>Interested in working together ?</h3>
      <Link to={`mailto:${email}`}>Send me a message </Link>
    </aside>
  )
}
