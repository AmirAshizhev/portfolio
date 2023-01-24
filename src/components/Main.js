import { Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import Projects from './Projects';

function Main() {
  return(
    <main className='main'>
      <Routes>
        <Route path='/' element={<Portfolio/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      
      
    </main>
  )

};

export default Main;