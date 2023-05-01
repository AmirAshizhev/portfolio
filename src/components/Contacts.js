function Contacts() {
  return(
    <section className="contacts">
      <div className="contacts__box">
        <div>
          <h3>Написать мне:</h3>
          <ul className="texting__list">
            <li className="texting__item texting__item_contact_email">amirashizhev@yandex.ru</li> 
            <li className="texting__item texting__item_contact_tg">@Embraze11</li>
            <li className="texting__item texting__item_contact_phone">8(904)337-33-92</li> 
          </ul> 
        </div>
        <div>
          <h3>Медиа:</h3> 
          <ul className="media__list">
            <li><a className='media__link media__link_site_github' rel="noreferrer noopener" href='https://github.com/AmirAshizhev' target='_blank'></a></li> 
            <li><a className='media__link media__link_site_linkedin' rel="noreferrer noopener" href='https://www.linkedin.com/in/amirashizhev/' target='_blank'></a></li>
          </ul> 
        </div> 
      </div>
    </section> 
  )
}

export default Contacts;