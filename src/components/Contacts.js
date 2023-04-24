function Contacts() {
  return(
    <section class="contacts">
      <div>
        <h3>Написать мне:</h3>
        <ul class="texting__list">
          <li class="texting__item texting__item_contact_email">amirashizhev@yandex.ru</li> 
          <li class="texting__item texting__item_contact_tg">@Embraze11</li>
          <li class="texting__item texting__item_contact_phone">8(904)337-33-92</li> 
        </ul> 
      </div>
      <div>
        <h3>Медиа:</h3> 
        <ul class="media__list">
          <li><a className='media__link media__link_site_github' rel="noreferrer noopener" href='https://github.com/AmirAshizhev' target='_blank'></a></li> 
          <li><a className='media__link media__link_site_linkedin' rel="noreferrer noopener" href='https://www.linkedin.com/in/amirashizhev/' target='_blank'></a></li>
        </ul> 
      </div> 
    </section> 
  )
}

export default Contacts;