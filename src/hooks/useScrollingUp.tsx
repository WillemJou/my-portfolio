import { useEffect, useState } from 'react'

export const useScrollingUp = () => {
  let scroll = window.scrollY
  const [scrollUp, setScrollUp] = useState(false)

  const trackScroll = () => {
    const currScroll = window.scrollY
    const isScrolledUp = scroll > currScroll
    setScrollUp(isScrolledUp)
    scroll = currScroll
  }

  useEffect(() => {
    window.addEventListener('scroll', trackScroll)
    return () => {
      window.removeEventListener('scroll', trackScroll)
    }
  }, [])
  return { scrollUp }
}
