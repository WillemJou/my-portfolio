import { useState, useEffect } from 'react'

export const useWidthScreen = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth)

  useEffect(() => {
    const windowWidthHandler = () => {
      setWidthSize(window.innerWidth)
    }
    window.addEventListener('resize', windowWidthHandler)

    return () => {
      window.removeEventListener('resize', windowWidthHandler)
    }
  }, [])

  return widthSize
}
