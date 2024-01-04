import { Link } from 'react-router-dom'

export function CallToAction() {
  const email = 'willem.jouret9@gmail.com'
  return (
    <aside className='aside-layout'>
      <h3 className='title sub-title-3'>Interested in working together ?</h3>
      <Link to={`mailto:${email}`} className='link send-link simple-flex'>
        Send me a message
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon send-icon'
          viewBox='0 0 24 24'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='1'
            d='M22.153 3.553L11.176 21.004l-1.67-8.596L2 7.898zM9.456 12.444l12.696-8.89'></path>
        </svg>
      </Link>
    </aside>
  )
}
