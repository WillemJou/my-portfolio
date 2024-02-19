type StateBtn = {
  openHamburger: boolean
}

export function Hamburger({ openHamburger }: StateBtn) {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={
          openHamburger ? 'hamburger-icon_hidden' : 'icon hamburger-icon'
        }
        viewBox='0 0 32 32'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M5 8h22M5 16h22M5 24h22'></path>
      </svg>
    </>
  )
}
