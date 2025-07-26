import { MouseEventHandler } from 'react'

type StateBtn = {
  openHamburger: boolean
  handleOpen: MouseEventHandler
}

export function Hamburger({ openHamburger, handleOpen }: StateBtn) {
  return (
    <button
      style={
        openHamburger ? { zIndex: 99, height: '32px' } : { height: '32px' }
      }
      onClick={handleOpen}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={
          openHamburger ? 'hamburger-icon_hidden' : 'icon hamburger-icon'
        }
        viewBox="0 0 32 32">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h22M5 16h22M5 24h22"></path>
      </svg>
    </button>
  )
}
