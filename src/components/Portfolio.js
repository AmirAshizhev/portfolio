import Photo from '../images/photo.jpg'

function Portfolio () {
  return(
    <section className='portfolio'>
      <h2 className='portfolio__name'>Амир Ашижев</h2>
      <p className='portfolio__about'>Начинающий Веб-разработчик, 25 лет</p>
      <p className='portfolio__info'>Я родился и живу в Санкт-Петербурге, окончил факультет радиотехники СПбГЭТУ "ЛЭТИ". После периода работы по специальности решил попробовать себя в чем-то смежном, и мой взор упал на программирование. Рассмотрев разные направления, решил попробовать веб-разработку. Недавно окончил курс по веб-разработке от Янедекс.Практикума. В данный момент нахожусь в поиске предложений.</p>
      <a className='portfolio__link' href='https://github.com/AmirAshizhev' target='_blank' rel="noreferrer">GitHub</a>
      <img className='portfolio__photo' src={Photo} alt='Мое фото'/>
    </section>
    
  )
}

export default Portfolio;