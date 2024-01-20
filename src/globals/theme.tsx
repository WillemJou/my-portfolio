import { useState, useEffect, createContext, PropsWithChildren } from 'react'

interface ThemeContextType {
  checkDefaultTheme: boolean
  favoriteTheme: string
  getTheme: string
  theme: string
  setTheme: (newTheme: 'light' | 'dark') => void
  clickHandler: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  checkDefaultTheme: false,
  favoriteTheme: 'light',
  getTheme: 'light',
  theme: 'light',
  setTheme: (_newTheme: 'light' | 'dark') => null,
  clickHandler: () => {},
})

type Props = PropsWithChildren<{}>

export const ThemeProvider = ({ children }: Props) => {
  const checkDefaultTheme = window.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches

  const favoriteTheme = JSON.parse(
    sessionStorage.getItem('favoriteTheme') || '[]'
  )

  const getTheme =
    favoriteTheme !== JSON.parse(localStorage.getItem('systemTheme') || '[]')
      ? JSON.parse(sessionStorage.getItem('favoriteTheme') || '[]')
      : JSON.parse(localStorage.getItem('systemTheme') || '[]')

  const [theme, setTheme] = useState(getTheme)

  const clickHandler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  useEffect(() => {
    localStorage.setItem(
      'systemTheme',
      JSON.stringify(checkDefaultTheme ? 'light' : 'dark')
    )
    sessionStorage.setItem('favoriteTheme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        checkDefaultTheme,
        favoriteTheme,
        getTheme,
        theme,
        setTheme,
        clickHandler,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}
