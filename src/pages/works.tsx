import { useEffect } from 'react'
import { Gallery } from '../components/gallery'

export function Works() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className='header stack gap-4 start'>
        <div className='stack gap-2'>
          <h1 className='title big-title'>My Work</h1>
          <p className='tagline'>See some recent projects below !</p>
        </div>
      </div>
      <Gallery />
    </>
  )
}
