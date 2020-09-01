import React, { useState } from 'react';
import Projects from './Projects';
import Form from './Form'
import './App.css';

function App() {
  const [projects, setProject] = useState([])


  const addNewProject = (projectObj) => {
    setProject([...projects, projectObj])
  }

  return (
    <div className="App">
      <h1>SUPER STUDENT PROJECT MANAGER</h1>
      <Projects projects={projects} />
      <Form addNewProject={addNewProject} />
    </div>
  );
}

export default App;
