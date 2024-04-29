import { useEffect } from 'react'

export const useScrollToTop = () => {
  const scrollToTop = () => window.scrollTo(0, 0)
  useEffect(() => {
    scrollToTop
  }, [])
  return { scrollToTop }
}
