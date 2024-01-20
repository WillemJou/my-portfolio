import { useEffect } from 'react'
import { Gallery } from '../components/gallery'
import { RevealOnScroll } from '../utils/revealOn'
import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'

export function Works() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  return (
    <RevealOnScroll>
      <div className=' stack gap-20'>
        <div className='header stack gap-4 start'>
          <div className='stack gap-2'>
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
        <Gallery />
      </div>
    </RevealOnScroll>
  )
}
