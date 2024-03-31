import { useState, useRef, useLayoutEffect, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{}>

export const RevealOnScroll = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const classes = isVisible ? 'reveal' : 'unreveal'
  const ref = useRef(null)

  useLayoutEffect(() => {
    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting) // Mettre à jour l'état en fonction de l'intersection
      },
      { threshold: 0.2 }
    ) // Observer lorsque l'élément est entièrement visible

    scrollObserver.observe(ref.current!)

    return () => {
      scrollObserver.unobserve(ref.current!)
    }
  }, [ref]) // Ajouter ref à la dépendance pour déclencher l'effet si ref change

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}
