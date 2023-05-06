function ProjectPopup ({isOpen, project, handleClosePopup}){
  return(
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__btn" type="button" area-label="Закрыть" onClick={handleClosePopup}></button>
        <img src={project?.image} alt={project?.name} className="popup__img"/>
        <div className="popup__about">
          <p className="popup__title">Название: <span className="popup__span">{project?.name}</span></p>
          <p className="popup__title">Стек технологий: <span className="popup__span">{project?.stack}</span></p>
          <p className="popup__title">Ссылка на гитхаб: <span className="popup__span">{project?.ghLink}</span></p>
          <p className="popup__title">Ссылка на саму работу: <span className="popup__span">{project?.link}</span></p>
          <p className="popup__title">Описание: <span className="popup__span">{project?.about}</span></p>
        </div>
      </div>
    </div>
  )
}

export default ProjectPopup;