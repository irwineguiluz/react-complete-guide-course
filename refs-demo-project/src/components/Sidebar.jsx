import Button from './Button.jsx';

export default function Sidebar({onAddProject, savedProjects, onSelectProject, selectedProjectId}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div className="">
        <Button label="+ Add a project" onClick={onAddProject} />
      </div>
      <ul className="mt-8">
        {savedProjects.map(project => {
          let buttonClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            buttonClasses += " bg-stone-800 text-stone-200";
          } else {
            buttonClasses += " text-stone-400";
          }

          return (
            <li key={project.id} className="">
              <button
                className={buttonClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}