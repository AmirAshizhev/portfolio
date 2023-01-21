function ProjectCard({ name, stack }) {
  return (
    <li>
      <h4>{`Название: ${name}`}</h4>
      <p>{`Стек технологий: ${stack}`}</p>
    </li>
  )
}

export default ProjectCard;