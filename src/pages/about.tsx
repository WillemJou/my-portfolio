import { useEffect } from 'react'
import face from '../assets/portraits/face.jpg'

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className='about wrapper'>
      <div className='header stack gap-4'>
        <div className='stack gap-2'>
          <h1 className='title big-title'>About</h1>
          <p className='tagline'>
            Thanks for stopping by. Read below to learn more about myself and my
            background.
          </p>
        </div>
        <img
          className='img-about'
          src={face}
          alt='tête de Willem quand il était breton'
        />
      </div>
      <section className='about-section'>
        <h2 className='title sub-title-5'>Background</h2>
        <div className='content'>
          <p>
            makes people happy. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Proin nibh nisl condimentum id venenatis a
            condimentum vitae. Dapibus ultrices in iaculis nunc. Arcu odio ut
            sem nulla pharetra diam sit amet. Diam quis enim lobortis
            scelerisque fermentum dui faucibus in ornare.
          </p>
          <p>
            makes people happy. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Proin nibh nisl condimentum id venenatis a
            condimentum vitae. Dapibus ultrices in iaculis nunc. Arcu odio ut
            sem nulla pharetra diam sit amet. Diam quis enim lobortis
            scelerisque fermentum dui faucibus in ornare.
          </p>
        </div>
      </section>
      <section className='about-section'>
        <h2 className='title sub-title-5'>Education</h2>
        <div className='content'>
          <p>
            makes people happy. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Proin nibh nisl condimentum id venenatis a
            condimentum vitae. Dapibus ultrices in iaculis nunc. Arcu odio ut
            sem nulla pharetra diam sit amet. Diam quis enim lobortis
            scelerisque fermentum dui faucibus in ornare.
          </p>
          <p>
            makes people happy. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Proin nibh nisl condimentum id venenatis a
            condimentum vitae. Dapibus ultrices in iaculis nunc. Arcu odio ut
            sem nulla pharetra diam sit amet. Diam quis enim lobortis
            scelerisque fermentum dui faucibus in ornare.
          </p>
        </div>
      </section>
      <section className='about-section'>
        <h2 className='title sub-title-5'>Skills</h2>
        <div className='content'>
          <p>
            makes people happy. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </section>
    </section>
  )
}
