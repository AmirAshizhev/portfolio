import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
  return(
    <header className='header'>
      <div className='header__box'>
        <Link className='header__link' to="/portfolio">Амир Ашижев</Link>
        <NavBar/>
      </div>

    </header>
  )
}

export default Header;