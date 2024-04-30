import { useState } from 'react';

import Sidebar from './components/Sidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

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

  function handleDeleteProject(projectId) {
    setProjectsData(prevProjectsData => {
      return {
        selectedProjectId: undefined,
        projects: prevProjectsData.projects.map((project) => project.id !== projectId)
      }
    })
  }

  function handleSelectProject(projectId) {
    setProjectsData(prevProjectsData => {
      return {
        ...prevProjectsData,
        selectedProjectId: projectId
      }
    });
  }

  function getProjectById(id) {
    return projectsData.projects.find((project) => project.id === id);
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
    const project = getProjectById(projectsData.selectedProjectId);
    content = <SelectedProject project={project} onDelete={handleDeleteProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
        savedProjects={projectsData.projects}
        selectedProjectId={projectsData.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
