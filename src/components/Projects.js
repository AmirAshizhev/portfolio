import ProjectCard from './ProjectCard';

function Projects () {

  const projectData = [
    {name: 'Место', stack: 'основной стек'},
    {name: 'Руссиан травел', stack: 'основной стек'},
    {name: 'Мувиес эксплорер', stack: 'основной стек'},
    {name: 'Руссиан травел', stack: 'основной стек'},
    {name: 'Мувиес эксплорер', stack: 'основной стек'}
  ];

  const cardlist = projectData.map((card) => (
    // console.log(card.name, card.stack)
    <ProjectCard 
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