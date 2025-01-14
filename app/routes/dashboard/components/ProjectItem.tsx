import { Link } from "@remix-run/react";
import Exportdocs from "~/routes/dashboard/components/Exportdocs";
import ProjectDetail from "./ProjectDetail";

export const ProjectItem = ({
  project,
  isSelecting,
  selectedProjects,
  toggleProjectSelection,
}) => (
  <div
    className={`grid grid-cols-4 items-center gap-2 relative ${
      selectedProjects.find((p) => p.id === project.id)
        ? "bg-gray-50 rounded-lg"
        : ""
    }`}
  >
    {isSelecting && (
      <div className="absolute -left-6 top-1">
        <input
          type="checkbox"
          checked={selectedProjects.find((p) => p.id === project.id)}
          onChange={() => toggleProjectSelection(project)}
          className="h-4 w-4 appearance-none rounded-sm shadow-inner border border-gray-300 bg-white checked:bg-success-500 checked:border-success-500 focus:outline-none focus:ring-1 focus:ring-success-300 cursor-pointer"
        />
      </div>
    )}
    <div className="col-span-1 space-x-1">
      <span className="w-6 text-xs font-medium">{project.id}.</span>
      <span
        className="w-48 text-xs font-medium"
      >
        {project.name}
      </span>
    </div>

    <div className="col-span-2 bg-gray-200 rounded-full h-2">
      <div
        className="bg-success-500 h-2 rounded-full"
        style={{ width: `${project.progress}` }}
      />
    </div>
    <div className="cols-span-1 flex items-center justify-between space-x-2">
      <ProjectDetail project={project} />
      <Exportdocs />
    </div>
  </div>
);
