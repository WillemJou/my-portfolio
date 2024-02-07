import { useState, useEffect, createContext, PropsWithChildren } from 'react'

interface LanguageContextType {
  getLanguage: string
  language: string
  setLanguage: (newLanguage: 'en' | 'fr') => void
  clickHandler: () => void
}

export const LanguageContext = createContext<LanguageContextType>({
  getLanguage: 'en',
  language: 'en',
  setLanguage: (_newLanguage: 'en' | 'fr') => null,
  clickHandler: () => {},
})

type Props = PropsWithChildren<{}>

export const LanguageProvider = ({ children }: Props) => {
  const getLanguage = JSON.parse(localStorage.getItem('language') || '[]')

  const [language, setLanguage] = useState(getLanguage)
  console.log(language)

  const clickHandler = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en'
    setLanguage(newLanguage)
  }

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify(language))
  }, [language])

  return (
    <LanguageContext.Provider
      value={{ getLanguage, language, setLanguage, clickHandler }}>
      {children}
    </LanguageContext.Provider>
  )
}
