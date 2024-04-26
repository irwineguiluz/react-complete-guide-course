import noProjectsImage from '../assets/no-projects.png';

import Button from './Button.jsx';

export default function NoProjectSelected({onAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        alt="An empty task list"
        src={noProjectsImage}
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button label="Create new project" onClick={onAddProject} />
      </p>
    </div>
  );
}