type StateBtn = {
  buttonOpen: boolean
}

export function Hamburger({ buttonOpen }: StateBtn) {
  return (
    <>
      {buttonOpen == false ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon hamburger-icon'
          viewBox='0 0 32 32'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M5 8h22M5 16h22M5 24h22'></path>
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon hamburger-icon'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeWidth='2'
            d='M20 20L4 4m16 0L4 20'></path>
        </svg>
      )}
    </>
  )
}
