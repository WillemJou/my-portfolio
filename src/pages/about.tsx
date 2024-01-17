import { useEffect } from 'react'
import face from '/face.jpg'
import { RevealOnScroll } from '../utils/revealOn'

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <RevealOnScroll>
      <section className='about wrapper'>
        <div className='header stack gap-4'>
          <div className='stack gap-2'>
            <h1 className='title big-title'>About</h1>
            <p className='tagline'>
              Thanks for stopping by. Read below to learn more about myself and
              my background.
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
              I have always had a computer. I started coding in 2011 with a
              static HTML/CSS page during computer science classes. Then I
              continued to be self-taught with an interest in web pages and I
              created some more successful pages in 2018. 
            <p></p>
          </div>
        </section>
        <section className='about-section'>
          <h2 className='title sub-title-5'>Education</h2>
          <div className='content'>
            <p>
              Coming from a literary background, I studied art history at the
              EAC and at the university. I worked in the world of catering
              and maritime. I'm interested in programming for several years now,
              but it is in 2022 that I invest 100% in web development thanks to
              the training “ application developer” from OpenClassRooms, where I
              learn JavaScript then React for 14 months, and I haven't stopped
              since more !
            </p>
            <p></p>
          </div>
        </section>
        <section className='about-section'>
          <h2 className='title sub-title-5'>Soft Skills</h2>
          <div className='content'>
            <p>
              Listening to others, sociable and discreet, I like a job well done
              and pays attention to details. I am jovial and I like to please to
              my colleagues by bringing them croissants in the morning!
            </p>
          </div>
        </section>
      </section>
    </RevealOnScroll>
  )
}
