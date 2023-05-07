import Contacts from './Contacts';

function About(){
  return (
    <section className='about'>
      <h1 className='about__title'>Обо мне</h1>
      <p className='about__subtitle'>Начинающий Веб-разработчик, 26 лет</p>
      <p className='about__info'>Я родился и живу в Санкт-Петербурге, окончил факультет радиотехники СПбГЭТУ "ЛЭТИ". После периода работы по специальности решил попробовать себя в чем-то смежном, и мой взор упал на программирование. Рассмотрев разные направления, решил попробовать веб-разработку. Недавно окончил курс по веб-разработке от Янедекс.Практикума. В данный момент нахожусь в поиске предложений.</p>
      <div>
        <p className='about__resume'>Резюме: </p>
        <a className='about__link' href='https://disk.yandex.ru/i/2zTktHFDcHeNaQ' target='_blank' rel="noreferrer" >Резюме</a>
      </div>
      <Contacts/>
    </section>

  )
}

export default About;