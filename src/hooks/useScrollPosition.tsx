import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleVisibleButton = () => {
    let scrollY = window.scrollY
    setScrollPosition(scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton)
    return () => {
      window.removeEventListener('scroll', handleVisibleButton)
    }
  }, [])
  return { scrollPosition }
}
