import { projectData } from '../data';
import ProjectCard from './ProjectCard';

function Projects ({onCardClick}) {

  const cardlist = projectData.map((card, i) => (
    <ProjectCard 
      card={card}
      key={i}
      img={card.image}
      name={card.name}
      stack={card.stack} 
      onCardClick={onCardClick}

    />
  ))

  return (
    <section className='projects'>
      <h1 className='projects__title'>Проекты</h1>
      <div>
        
      </div>
      <ul className='projects__list'>
        {cardlist}
      </ul>
    </section>
  )
}

export default Projects;