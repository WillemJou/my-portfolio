import { useContext } from 'react'
import { LanguageContext } from '../globals/Languages'

export function LanguageBtn() {
  const language = useContext(LanguageContext)

  return (
    <button className="language-btn" onClick={() => language.clickHandler()}>
      <span className="text">{language.language}</span>
    </button>
  )
}
