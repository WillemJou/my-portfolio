import { ReactElement, useEffect, useState } from 'react'

interface FadeProps {
  visible: boolean
  children?: ReactElement
}

export function Fade({ visible, children }: FadeProps) {
  console.log(children)

  const [showChildren, isShowChildren] = useState(visible)
  let className = 'fade'
  if (!visible) {
    className += ' out'
  }

  useEffect(() => {
    if (visible) {
      isShowChildren(true)
    } else {
      const timer = setTimeout(() => {
        isShowChildren(false)
      }, 1000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [visible])
  return <div className={className}>{showChildren && children}</div>
}
