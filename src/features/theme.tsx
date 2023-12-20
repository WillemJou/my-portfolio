import { useState, useEffect } from 'react'

export function Theme() {
  const defaultTheme = window.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches

  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme') || '[]')
  )

  const clickHandler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'

    setTheme(newTheme)
  }

  useEffect(() => {
    localStorage.setItem(
      'theme',
      JSON.stringify(defaultTheme ? 'light' : 'dark')
    )
  }, [])
  return (
    <>
      {' '}
      <button onClick={() => clickHandler()}>Dark Mode</button>
    </>
  )
}
