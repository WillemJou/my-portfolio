import { Gallery } from '../components/gallery'

export function Works() {
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
