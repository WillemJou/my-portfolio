import { useEffect } from 'react'
import { Gallery } from '../components/gallery'
import { RevealOnScroll } from '../utils/revealOn'

export function Works() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <RevealOnScroll>
      <div className=' stack gap-20'>
        <div className='header stack gap-4 start'>
          <div className='stack gap-2'>
            <h1 className='title big-title'>My Work</h1>
            <p className='tagline'>See some projects below !</p>
          </div>
        </div>
        <Gallery />
      </div>
    </RevealOnScroll>
  )
}
