import Button from './Button.jsx';

export default function Sidebar({onAddProject, savedProjects, onSelectProject}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div className="">
        <Button label="+ Add a project" onClick={onAddProject} />
      </div>
      <ul className="mt-8">
        {savedProjects.map(project => (
          <li key={project.id} className="">
            <button
              className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
              onClick={() => onSelectProject(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}