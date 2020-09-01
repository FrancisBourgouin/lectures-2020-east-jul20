import React from 'react'

const Project = (props) => {
  const { projectName, studentNames, techStack, description } = props

  return (
    <article>
      <h1>Project name: {projectName}</h1>
      <h2>Student names: {studentNames}</h2>
      <p>Stack: {techStack}</p>
      <p>Description: {description}</p>
    </article>
  )
}

export default Project