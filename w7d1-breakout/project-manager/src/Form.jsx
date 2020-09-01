import React, { useState } from 'react'

const Form = (props) => {
  const [formData, setFormData] = useState({
    projectName: "",
    studentNames: "",
    techStack: "",
    description: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewProject(formData)
    setFormData({
      projectName: "",
      studentNames: "",
      techStack: "",
      description: ""
    })
  }
  const updateFormField = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="projectName"
        value={formData.projectName}
        onChange={event => setFormData({ ...formData, projectName: event.target.value })}
        placeholder="Project Name"
      />
      <input
        type="text"
        name="studentNames"
        value={formData.studentNames}
        onChange={event => setFormData({ ...formData, studentNames: event.target.value })}
        placeholder="Student Name"
      />
      <input type="text" name="techStack" value={formData.techStack} onChange={updateFormField} placeholder="Tech Stack" />
      <input type="text" name="description" value={formData.description} onChange={updateFormField} placeholder="Description" />
      <button type="submit">ADD NEW PROJECT</button>
    </form>
  )
}

export default Form