import { useState, useEffect } from 'react'

export const useSizeScreen = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth)
  const [heightSize, setHeightSize] = useState(window.innerHeight)

  useEffect(() => {
    const windowWidthHandler = () => {
      setWidthSize(window.innerWidth)
    }
    const windowHeightHandler = () => {
      setHeightSize(window.innerHeight)
    }
    window.addEventListener('resize', windowWidthHandler)
    window.addEventListener('resize', windowHeightHandler)

    return () => {
      window.removeEventListener('resize', windowWidthHandler)
      window.removeEventListener('resize', windowHeightHandler)
    }
  }, [])

  return { widthSize, heightSize }
}
