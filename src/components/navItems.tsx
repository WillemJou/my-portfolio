import { NavLink } from 'react-router-dom'
export function NavItems() {
  return (
    <ul className='nav-items gap-2'>
      <li>
        <NavLink className='link' to='/my-portfolio/' end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className='link' to='/my-portfolio/works'>
          Works
        </NavLink>
      </li>
      <li>
        <NavLink className='link' to='/my-portfolio/about'>
          About Me
        </NavLink>
      </li>
    </ul>
  )
}
