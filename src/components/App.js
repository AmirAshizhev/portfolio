import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ProjectPopup from './projectPopup'


function App() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpened, setisPopupOpened] = useState(false);

  function handleCardClick(card) {
    setisPopupOpened(true);
    setSelectedProject(card);
  }

  function handleClosePopup() {
    setisPopupOpened(false);
    setSelectedProject(null);
  }

  return (
    <div className='App'>
      <Header/>
      <Main onCardClick={handleCardClick} />
      <Footer/>
      <ProjectPopup isOpen={isPopupOpened} project={selectedProject} handleClosePopup={handleClosePopup}/>
    </div>
  );
}

export default App;

