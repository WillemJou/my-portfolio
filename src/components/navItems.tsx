import { NavLink } from 'react-router-dom'
export function NavItems() {
  return (
    <ul className='nav-items gap-2'>
      <li>
        <NavLink className='link' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className='link' to='/works'>
          Works
        </NavLink>
      </li>
      <li>
        <NavLink className='link' to='/about'>
          About Me
        </NavLink>
      </li>
    </ul>
  )
}
