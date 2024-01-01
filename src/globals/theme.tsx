import { useState, useEffect, createContext, PropsWithChildren } from 'react'

interface ThemeContextType {
  defaultTheme: boolean
  getTheme: string
  theme: string
  setTheme: (newTheme: 'light' | 'dark') => void
  clickHandler: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  defaultTheme: false,
  getTheme: 'light',
  theme: 'light',
  setTheme: (_newTheme: 'light' | 'dark') => null,
  clickHandler: () => {},
})

type Props = PropsWithChildren<{}>

export const ThemeProvider = ({ children }: Props) => {
  const defaultTheme = window.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches

  const getTheme = JSON.parse(localStorage.getItem('theme') || '')

  const [theme, setTheme] = useState(getTheme)

  const clickHandler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  useEffect(() => {
    localStorage.setItem(
      'theme',
      JSON.stringify(defaultTheme ? 'light' : 'dark')
    )
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ defaultTheme, getTheme, theme, setTheme, clickHandler }}>
      {children}
    </ThemeContext.Provider>
  )
}
