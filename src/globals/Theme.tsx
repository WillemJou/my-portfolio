import { useState, useEffect, createContext, PropsWithChildren } from 'react'

interface ThemeContextType {
  checkDefaultTheme: boolean
  favoriteTheme: string
  theme: string
  setTheme: (_newTheme: 'light' | 'dark') => void
  clickHandler: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  checkDefaultTheme: false,
  favoriteTheme: 'light',
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

  const [theme, setTheme] = useState(
    favoriteTheme.length == 0
      ? checkDefaultTheme
        ? 'light'
        : 'dark'
      : favoriteTheme
  )

  const clickHandler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    sessionStorage.setItem('favoriteTheme', JSON.stringify(newTheme))
  }

  useEffect(() => {
    localStorage.setItem(
      'systemTheme',
      JSON.stringify(checkDefaultTheme ? 'light' : 'dark')
    )
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        checkDefaultTheme,
        favoriteTheme,
        theme,
        setTheme,
        clickHandler,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}
