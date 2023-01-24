import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li><Link className='navigation__link' to='/about-me'>Обо мне</Link></li>
        <li><Link className='navigation__link' to='/projects'>Проекты</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;