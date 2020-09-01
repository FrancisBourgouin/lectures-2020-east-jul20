import React from 'react'
import Project from './Project'

// function Projects(props)
// const Projects = function(props)
const Projects = (props) => {
  const parsedProjects = props.projects.map(project =>
    <Project
      key={project.projectName} // Supposed to be unique
      projectName={project.projectName}
      studentNames={project.studentNames}
      techStack={project.techStack}
      description={project.description}
    />
  )
  const betterParsedProjects = props.projects.map(project =>
    <Project
      {...project}
    />
  )
  return (
    <section>
      {parsedProjects}
    </section>
  )
}

export default Projects