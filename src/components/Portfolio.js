import Photo from '../images/photo.jpg';
import { Link } from 'react-router-dom';
import Contacts from './Contacts';

function Portfolio () {
  return(
    <>
      <section className='portfolio'>
        <h2 className='portfolio__name'>Амир Ашижев</h2>
        <p className='portfolio__about'>Начинающий Веб-разработчик, 26 лет</p>
        <p className='portfolio__info'>Я родился и живу в Санкт-Петербурге, окончил факультет радиотехники СПбГЭТУ "ЛЭТИ". После периода работы по специальности решил попробовать себя в чем-то смежном, и мой взор упал на программирование. Рассмотрев разные направления, решил попробовать веб-разработку. Недавно окончил курс по веб-разработке от Янедекс.Практикума. В данный момент нахожусь в поиске предложений.</p>
        <Link className='portfolio__link' to='/projects'>Проекты</Link>
        <img className='portfolio__photo' src={Photo} alt='Мое фото'/>
      </section>
      <Contacts/>
    </>
    
  )
}

export default Portfolio;