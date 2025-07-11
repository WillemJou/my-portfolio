import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const showPosition = () => {
    const scrollY = window.scrollY
    setScrollPosition(scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', showPosition)
    return () => {
      window.removeEventListener('scroll', showPosition)
    }
  }, [])
  return { scrollPosition }
}
