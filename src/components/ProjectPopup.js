function ProjectPopup (){
  return(
    <div className="popup popup_opened">
      <div className="popup__container">
        <button className="popup__btn" type="button" area-label="Закрыть"></button>
        <img src="" alt="" className="popup__img"/>
        <div className="popup__about">
          <p className="popup__title">Название:</p>
          <p className="popup__title">Стек технологий:</p>
          <p className="popup__title">Ссылка на гитхаб:</p>
          <p className="popup__title">Ссылка на саму работу:</p>
          <p className="popup__title">Описание:</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectPopup;