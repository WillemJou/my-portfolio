import { ReactElement, useEffect, useState } from 'react'

interface FadeProps {
  visible: boolean
  fadeStyle: string
  outStyle: string
  children?: ReactElement
}

export function Fade({ visible, children, fadeStyle, outStyle }: FadeProps) {
  const [showChildren, isShowChildren] = useState(visible)
  let className = fadeStyle
  if (!visible) {
    className += outStyle
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
