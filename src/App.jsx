import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask() {}

  function handleDeleteTask() {}
  function handleSelectProject(id) {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: id,
    }));
  }

  function handleStartAddProject() {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(projectData) {
    setProjectState((prev) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
    }));
  }

  function handleDeleteProject() {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: prev.projects.filter(
        (project) => project.id !== prev.selectedProjectId
      ),
    }));
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onSelectNewProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onSelectProject={handleSelectProject}
        onSelectNewProject={handleStartAddProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
