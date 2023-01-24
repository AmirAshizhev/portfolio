import { Route, Routes } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Projects from './Projects';

function Main() {
  return(
    <main className='main'>
      <Routes>
        <Route path='/' element={<Portfolio/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about-me' element={<About/>}/>
      </Routes>
      
      
    </main>
  )

};

export default Main;