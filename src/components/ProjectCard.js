import noneImage from '../images/noneImage.svg'

function ProjectCard({ name, stack }) {
  return (
    <li className='progect-card'>
      <img src={noneImage} alt='' className='progect-card__img'/>
      <div className='progect-card__info'>
        <h4 className='progect-card__title'>{name}</h4>
        <p className='progect-card__about'>{`Стек технологий: ${stack}`}</p>   
      </div>

    </li>
  )
}

export default ProjectCard;