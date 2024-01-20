import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'

export function CallToAction() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  const email = 'willem.jouret9@gmail.com'
  return (
    <aside className='aside-layout'>
      <h3 className='title sub-title-3'>
        {stateLanguage === 'en'
          ? 'Interested in working together ?'
          : 'Gardons contact ! '}
      </h3>
      <Link to={`mailto:${email}`} className='send-link simple-flex'>
        {stateLanguage === 'en'
          ? 'Send me a message ?'
          : 'Envoyez-moi un message'}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon send-icon'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1'
            d='M22.153 3.553L11.176 21.004l-1.67-8.596L2 7.898zM9.456 12.444l12.696-8.89'></path>
        </svg>
      </Link>
    </aside>
  )
}
