import { useState, useEffect } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'

export function GoTop() {
  const [showBtn, setShowBtn] = useState('go-top-btn_hidden')
  const { scrollPosition } = useScrollPosition()

  const handleVisibleButton = () => {
    scrollPosition > 600
      ? setShowBtn('go-top-btn_showed')
      : setShowBtn('go-top-btn_hidden')
  }

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton)
    return () => {
      window.removeEventListener('scroll', handleVisibleButton)
    }
  }, [scrollPosition])

  return (
    <>
      <div className={showBtn} onClick={scrollUp}>
        <button className='go-top-btn text-align above-all'>
          <svg
            width='20'
            height='20'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path
              fill='#ffff'
              fill-rule='evenodd'
              d='m4 15l8-8l8 8l-2 2l-6-6l-6 6z'></path>
          </svg>
        </button>
      </div>
    </>
  )
}
