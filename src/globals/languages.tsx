import { useState, useEffect, createContext, PropsWithChildren } from 'react'

interface LanguageContextType {
  getFavoriteLanguage: string
  language: string
  setLanguage: (_newLanguage: 'en' | 'fr') => void
  clickHandler: () => void
}

export const LanguageContext = createContext<LanguageContextType>({
  getFavoriteLanguage: 'en',
  language: 'en',
  setLanguage: (_newLanguage: 'en' | 'fr') => null,
  clickHandler: () => {},
})

type Props = PropsWithChildren<{}>

export const LanguageProvider = ({ children }: Props) => {
  const getFavoriteLanguage = JSON.parse(
    sessionStorage.getItem('favoriteLanguage') || '[]'
  )

  const [language, setLanguage] = useState(
    getFavoriteLanguage.length == 0 ? 'fr' : getFavoriteLanguage
  )
  console.log(getFavoriteLanguage)

  const clickHandler = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en'
    setLanguage(newLanguage)
    sessionStorage.setItem('favoriteLanguage', JSON.stringify(newLanguage))
  }

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify('fr'))
  }, [language])

  return (
    <LanguageContext.Provider
      value={{ getFavoriteLanguage, language, setLanguage, clickHandler }}>
      {children}
    </LanguageContext.Provider>
  )
}
