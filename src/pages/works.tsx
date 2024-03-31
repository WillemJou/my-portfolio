import { useEffect } from 'react'
import { Gallery } from '../components/gallery'
import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'
import data from '../data.json'

export function Works() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  return (
    <div className=' stack gap-24'>
      <div className='header stack gap-4 start'>
        <div className='stack gap-2 flex-center'>
          <h1 className='title big-title'>
            {stateLanguage === 'en' ? 'My Work' : 'Mes projets'}
          </h1>
          <p className='tagline'>
            {stateLanguage === 'en'
              ? 'See some projects below !'
              : 'Voici quelques projets qui  me tiennent à coeur !'}
          </p>
        </div>
      </div>
      <ul className='card-layout'>
        <Gallery works={data.otherWorks} />
        <Gallery works={data.selectedWorks} />
      </ul>
    </div>
  )
}
