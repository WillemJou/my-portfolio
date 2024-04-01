import { useEffect } from 'react'
import { Gallery } from '../components/gallery'
import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'
import data from '../data.json'
import { scrollToTop } from '../utils/scrollToTop'
import { RevealOnScroll } from '../utils/revealOn'

export function Works() {
  useEffect(() => {
    scrollToTop()
  }, [])
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  return (
    <div className=' stack gap-24'>
      <RevealOnScroll>
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
      </RevealOnScroll>
      <RevealOnScroll>
        <ul className='card-layout'>
          <Gallery works={data.otherWorks} />
          <Gallery works={data.selectedWorks} />
        </ul>
      </RevealOnScroll>
    </div>
  )
}
