import { useState } from 'react';

import Sidebar from './components/Sidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

import { randomString } from './helpers/randomString.jsx';

function App() {
  const [ projectsData, setProjectsData ] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
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
        ...prevProjectsData,
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

  function handleDeleteProject() {
    setProjectsData(prevProjectsData => {
      return {
        ...prevProjectsData,
        selectedProjectId: undefined,
        projects: prevProjectsData.projects.filter(
          (project) => project.id !== prevProjectsData.selectedProjectId
        )
      }
    });
  }

  function handleSelectProject(projectId) {
    setProjectsData(prevProjectsData => {
      return {
        ...prevProjectsData,
        selectedProjectId: projectId
      }
    });
  }

  function handleAddProjectTask(text) {
    setProjectsData(prevProjectsData => {
      const taskId = randomString();
      const newTask = {
        id: taskId,
        projectId: prevProjectsData.selectedProjectId,
        text: text
      };

      return {
        ...prevProjectsData,
        tasks: [newTask, ...prevProjectsData.tasks]
      }
    });
  }

  function handleDeleteProjectTask(taskId) {
    setProjectsData(prevProjectsData => {
      return {
        ...prevProjectsData,
        tasks: prevProjectsData.tasks.filter(task => task.id !== taskId)
      }
    });
  }

  const selectedProject = projectsData.projects.find(project => project.id === projectsData.selectedProjectId);
  const selectedProjectTasks = projectsData.tasks.filter(task => task.projectId === projectsData.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={selectedProjectTasks}
      onDelete={handleDeleteProject}
      onAddTask={handleAddProjectTask}
      onDeleteTask={handleDeleteProjectTask}
    />
  );

  if (projectsData.selectedProjectId === null) {
    content = (
      <NewProject
        onSubmit={handleSaveNewProject}
        onCancel={handleCancelNewProject}
      />
    );
  } else if (projectsData.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />
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
