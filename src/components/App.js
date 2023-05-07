import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ProjectPopup from './projectPopup'


function App() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpened, setisPopupOpened] = useState(false);

  useEffect(()=>{
    function closeByEscape(event) {
      if(event.key === 'Escape') {
        onClosePopup()
      }
    }
    if(isPopupOpened) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  },[isPopupOpened])

  function handleCardClick(card) {
    document.body.style.overflow =  'hidden';
    setisPopupOpened(true);
    setSelectedProject(card);
  }

  function onClosePopup(){
    setisPopupOpened(false);
    setSelectedProject(null);
    document.body.style.overflow =  'visible';
  }

  function handleClosePopup(event) {
    if(event.target.className === 'popup popup_opened' || event.target.className === 'popup__btn'){
      onClosePopup()
    }
  }

  return (
    <div className='App'>
      <div className={`page ${selectedProject && 'page_blocked'}`}>
        <Header/>
        <Main onCardClick={handleCardClick} />
        <Footer/>
      </div>
      <ProjectPopup isOpen={isPopupOpened} project={selectedProject} handleClosePopup={handleClosePopup}/>
    </div>
  );
}

export default App;

