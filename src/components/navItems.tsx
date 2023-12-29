import { Link } from 'react-router-dom'
export function NavItems() {
  return (
    <ul className='simple-row-layout gap-2'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/works'>Works</Link>
      </li>
      <li>
        <Link to='/about'>About Me</Link>
      </li>
    </ul>
  )
}
