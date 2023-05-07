import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ProjectPopup from './projectPopup'


function App() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpened, setisPopupOpened] = useState(false);

  function handleCardClick(card) {
    document.body.style.overflow =  'hidden';
    setisPopupOpened(true);
    setSelectedProject(card);
  }

  function handleClosePopup() {
    setisPopupOpened(false);
    setSelectedProject(null);
    document.body.style.overflow =  'visible';
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

