import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SelectedProjects } from '../utils/dataService'
import { Error } from '../components/error'

export function Carousel() {
  const { id } = useParams()
  const { project } = SelectedProjects(id)
  console.log(project)

  if (project) {
    const [currentImg, setCurrentImg] = useState(0)
    const [length, setLength] = useState<number>(
      project.pictures.length > 2 ? 1 : 0
    )
    useEffect(() => {
      setLength(project.pictures.length)
    }, [project?.pictures])
    const next = () => {
      const index = currentImg < length - 1 ? currentImg + 1 : 0
      return setCurrentImg(index)
    }
    const prev = () => {
      const index = currentImg > 0 ? currentImg - 1 : length - 1
      return setCurrentImg(index)
    }

    const findIndex = () => {
      if (length > 1) {
        return (
          <p className='index'>
            {currentImg + 1}/{length}{' '}
          </p>
        )
      }
    }

    return (
      <div className='carousel-container'>
        <div className='carousel-wrapper'>
          <svg
            onClick={prev}
            className='left-arrow'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1024 1024'>
            <path d='M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496'></path>
          </svg>
          <svg
            onClick={next}
            className='right-arrow'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1024 1024'>
            <path d='M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496'></path>
          </svg>
          {findIndex()}
          <div className='carousel-content-wrapper'>
            <div
              className='carousel-content'
              style={{
                transform: `translateX(-${currentImg * 100}%)`,
                MozTransform: `translateX(-${currentImg * 100}%)`,
              }}>
              {project?.pictures.map((pic, index) => (
                <img key={index} src={pic} alt='photos des projets' />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <Error />
  }
}
