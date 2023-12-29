import { Gallery } from '../layouts/gallery'

export function Works() {
  return (
    <>
      <div className='hero stack gap-4 start'>
        <div className='stack gap-2'>
          <h1 className='big-title'>My Work</h1>
          <p className='tagline'>
            See my most recent projects below to get an idea of my past
            experience.
          </p>
        </div>
      </div>
      <Gallery />
    </>
  )
}
