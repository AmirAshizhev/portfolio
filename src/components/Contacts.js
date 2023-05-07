function Contacts() {
  return(
    <div className="contacts">
      <div className="contacts__box">
        <h3 className="contacts__title">Написать мне:</h3>
        <ul className="contacts__list">
          <li className="contacts__item contacts__item_contact_email">
            <a className="contacts__link" rel="noreferrer noopener" href='mailto:amirashizhev@yandex.ru'>amirashizhev@yandex.ru</a>
          </li> 
          <li className="contacts__item contacts__item_contact_tg">
            <a className="contacts__link" rel="noreferrer noopener" href='https://t.me/Embraze11' target='_blank'>@Embraze11</a>
          </li>
          <li className="contacts__item contacts__item_contact_phone">
            <a className="contacts__link" rel="noreferrer noopener" href='tel:+79043373392'>+7(904)337-33-92</a>
          </li> 
        </ul> 
      </div>
    </div> 
  )
}

export default Contacts;