import { useState, useRef, useEffect, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{}>

export const RevealOnScroll = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const classes = isVisible ? 'reveal' : 'unreveal'
  const ref = useRef(null)

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        scrollObserver.unobserve(entry.target)
      }
    })
    scrollObserver.observe(ref.current!)
    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}
