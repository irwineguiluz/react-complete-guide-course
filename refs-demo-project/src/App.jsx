import { useState } from 'react';

import Sidebar from './components/Sidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';

function App() {
  const [ projectsData, setProjectsData ] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleAddProject() {
    setProjectsData(prevProjectsData => {
      return {
        ...prevProjectsData,
        selectedProjectId: null
      }
    });
  }

  function handleSaveNewProject(project) {
    setProjectsData(prevProjectsData => {
      return {
        projects: [project, ...prevProjectsData.projects],
        selectedProjectId: undefined
      }
    });
  }

  function handleCancelNewProject() {
    setProjectsData(prevProjectsData => {
      return {
        ...prevProjectsData,
        selectedProjectId: undefined
      }
    });
  }

  let content;

  if (projectsData.selectedProjectId === null) {
    content = (
      <NewProject
        onSubmit={handleSaveNewProject}
        onCancel={handleCancelNewProject}
      />
    );
  } else if (projectsData.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />
  } else {

  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject} savedProjects={projectsData.projects} />
      {content}
    </main>
  );
}

export default App;
