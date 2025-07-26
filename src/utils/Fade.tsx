import { ReactElement, useEffect, useState } from 'react'

interface FadeProps {
  visible: boolean
  fadeStyle: string
  outStyle: string
  children?: ReactElement
}

/**
 * Handles fading in and out of children based on the visibility
 * prop.
 * @returns A `<div>` element with the `className` set based on the `fadeStyle` and `outStyle` props,
 * and the `children` rendered conditionally based on the `showChildren` state.
 */
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
