import { Route, Routes } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Projects from './Projects';

function Main({onCardClick}) {
  return(
    <main className='main'>
      <div className='main__box'>
        <Routes>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/projects' element={<Projects  onCardClick={onCardClick}/>}/>
          <Route path='/about-me' element={<About/>}/>
        </Routes>
      </div>
    </main>
  )

};

export default Main;