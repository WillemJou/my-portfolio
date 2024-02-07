import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'

export function LanguageBtn() {
  const language = useContext(LanguageContext)
  console.log(language.language)

  return (
    <button className='language-btn' onClick={() => language.clickHandler()}>
      <span className='text'>{language.language}</span>
    </button>
  )
}
