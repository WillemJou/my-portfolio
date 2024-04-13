import { useContext, useEffect } from 'react'
import face from '/face.jpg'
import { LanguageContext } from '../globals/languages'
import { scrollToTop } from '../utils/scrollToTop'
import { RevealOnScroll } from '../utils/revealOn'

export function About() {
  useEffect(() => {
    scrollToTop()
  }, [])
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  return (
    <RevealOnScroll>
      <section className='about wrapper'>
        <div className='header stack gap-4'>
          <div className='stack gap-4'>
            <h1 className='title page-title'>
              {stateLanguage === 'en' ? 'About' : 'À Propos'}
            </h1>
            <p className='tagline'>
              {stateLanguage === 'en'
                ? 'Thanks for stopping by. Read below to learn more about myself and my background.'
                : "Merci d'être passé. Un peu de lecture ci-dessous pour en savoir plus sur moi et mon parcours ?"}
            </p>
          </div>
          <img
            className='img-about'
            src={face}
            alt='tête de Willem quand il était breton et amoureux'
          />
        </div>
        <section className='about-section'>
          <h2 className='title sub-title-5'>
            {' '}
            {stateLanguage === 'en' ? 'Background' : 'Mon passé'}
          </h2>
          <div className='content'>
            <p className='description'>
              {stateLanguage === 'en'
                ? 'I have always had a computer. I started coding in 2011 with astatic HTML/CSS page during computer science classes. Then Icontinued to be self-taught with an interest in web pages and Icreated some more successful pages in 2018.'
                : "J'ai toujours eu un ordinateur. Je commence à coder en 2011 avec une page HTML/CSS statique lors de cours informatique dans une école de marché de l'art. J'ai continué à être autodidacte avec un intérêt pour les pages web et j'ai créé des pages plus réussies en 2018. "}
            </p>
          </div>
        </section>
        <section className='about-section'>
          <h2 className='title sub-title-5'>
            {stateLanguage === 'en' ? 'Education' : 'Études'}
          </h2>
          <div className='content'>
            <p className='description'>
              {stateLanguage === 'en'
                ? "Coming from a literary background, I studied art history at the EAC school and at the university. I worked in the world of catering and maritime. I'm interested in programming for several years now, but it is in 2022 that I invest 100% in web development, thanks to the training « application developer » from OpenClassRooms, where I learn JavaScript then React for 14 months, and I haven't stopped since more !"
                : "Issu d'une formation littéraire, j'ai étudié l'histoire de l'art à l'EAC et à l’université. J'ai travaillé dans le monde de la restauration et du maritime. Je m'intéresse à la programmation depuis plusieurs années maintenant et c'est en 2022 que je m'investis à 100% dans le développement avec la formation « développeur d'applications » d'OpenClassRooms où j'ai appris JavaScript puis React pendant 14 mois, et depuis je ne m'arrête plus !"}
            </p>
          </div>
        </section>
        <section className='about-section'>
          <h2 className='title sub-title-5'>Soft Skills</h2>
          <div className='content'>
            <p className='description'>
              {stateLanguage === 'en'
                ? 'Listening to others, sociable and discreet, I like a job well done and pays attention to details. I am jovial and I like to please to my colleagues by bringing them croissants in the morning! ^^'
                : "À l'écoute des autres, sociable et discret, j'aime le travail bien fait et fais attention aux détails. Je suis joviale, persévérant et j'aime faire plaisir à mes collègues en leur apportant des croissants le matin."}
            </p>
          </div>
        </section>
      </section>
    </RevealOnScroll>
  )
}
