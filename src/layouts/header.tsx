import mainPortrait from '/mainPortrait.jpg'

export function Header() {
  return (
    <div className='stack gap-4'>
      <header className='main-header hero'>
        <div className='stack start gap-2 pad-top-1 w-50%'>
          <h1 className='title big-title'>Hello, my name is Willem !</h1>
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
      <a className='title sub-title-2 simple-flex gap-4' href='#box'>
        <h3>My Stack</h3>
        <svg
          className='icon'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 32 32'>
          <path d='M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10l10-10z'></path>
        </svg>
      </a>
    </div>
  )
}
