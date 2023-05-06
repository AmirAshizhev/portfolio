import { projectData } from '../data';
import ProjectCard from './ProjectCard';

function Projects ({handleClosePopup, onCardClick}) {

  const cardlist = projectData.map((card, i) => (
    // console.log(card.name, card.stack, i)
    <ProjectCard 
      card={card}
      key={i}
      name={card.name}
      stack={card.stack} 
      onCardClick={onCardClick}

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