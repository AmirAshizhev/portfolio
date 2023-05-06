function ProjectPopup ({isOpen, project, handleClosePopup}){
  return(
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__btn" type="button" area-label="Закрыть" onClick={handleClosePopup}></button>
        <img src="" alt="" className="popup__img"/>
        <div className="popup__about">
          <p className="popup__title">Название:{project?.name}</p>
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