function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__box'>
        <p className='footer__text'>&#169; Амир Ашижев 2023</p>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a className='footer__link' rel="noreferrer noopener" href='https://www.linkedin.com/in/amirashizhev/' target='_blank'>LinkedIn</a>
          </li>
          <li className='footer__item'>
            <a className='footer__link' rel="noreferrer noopener" href='https://t.me/Embraze11' target='_blank'>Telegram</a>
          </li>
          <li className='footer__item'>
            <a className='footer__link' rel="noreferrer noopener" href='mailto:amirashizhev@yandex.ru'>Email</a>
          </li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;