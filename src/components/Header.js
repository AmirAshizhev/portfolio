import { Link } from 'react-router-dom';

function Header() {
  return(
    <header className='header'>
      <div className='header__box'>
        <Link className='header__link' to="/">Амир Ашижев</Link>
        <nav>
          <ul>
            <li>Обо мне</li>
            <li>Проекты</li>
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header;