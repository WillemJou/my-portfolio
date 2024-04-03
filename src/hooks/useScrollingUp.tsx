import { useEffect, useState } from 'react'

export const useScrollingUp = () => {
  let prevScroll = window.scrollY
  const [scrollingUp, setScrollingUp] = useState(false)

  const handleScroll = () => {
    const currScroll = window.scrollY
    const isScrolled = prevScroll > currScroll
    setScrollingUp(isScrolled)
    prevScroll = currScroll
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return scrollingUp
}
