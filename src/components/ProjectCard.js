// import noneImage from '../images/noneImage.svg's

function ProjectCard({ name, stack, img }) {

  return (
    <li className='progect-card'>
      {img
        ? 
          <img src={img} alt=''  className='progect-card__img'/> 
        : 
          <div className='progect-card__img progect-card__img_false'/>
      }
      <div className='progect-card__info'>
        <h4 className='progect-card__title'>{name}</h4>
        <p className='progect-card__about'>{`Стек технологий: ${stack}`}</p>   
      </div>

    </li>
  )
}

export default ProjectCard;