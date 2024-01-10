import mainPortrait from '../assets/portraits/mainPortrait.jpg'

export function Header() {
  return (
    <>
      <header className='header hero'>
        <div className='stack start gap-2 pad-top-1 w-50%'>
          <h1 className='title big-title'>Hello, my name is Willem</h1>
          <p className='tagline'>
            I am a developer who is currently based in Paris 🧑🏻‍💻
          </p>
        </div>
        <img
          src={mainPortrait}
          alt='portrait de Willem dans une entreprise super sympa #LaBelleFolie ^^'
          className='main-img'
        />
      </header>
    </>
  )
}
