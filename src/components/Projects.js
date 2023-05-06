import { projectData } from '../data';
import ProjectCard from './ProjectCard';

function Projects () {

  const cardlist = projectData.map((card, i) => (
    // console.log(card.name, card.stack, i)
    <ProjectCard 
      key={i}
      name={card.name}
      stack={card.stack} 
    />
  ))

  return (
    <section className='projects'>
      <div>
        
      </div>
      <ul className='projects__list'>
        {cardlist}
      </ul>
    </section>
  )
}

export default Projects;