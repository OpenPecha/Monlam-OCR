import { useLoaderData, useSearchParams } from "@remix-run/react";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SortSelect } from "./SortSelect";
import { ActionButtons } from "./ActionButtons";
import { ProjectItem } from "./ProjectItem";
import { Pagination } from "./Pagination";
import { ITEM_PER_PAGES } from "~/lib/constants";

export default function Dashboard() {
  
  const { filteredProjects, totalProjects } = useLoaderData();
  const [isSelecting, setisSelecting] = useState(false);
  const [param, setParam] = useSearchParams();

  const [selectedProjects, setSelectedProjects] = useState([]);

  const searchQuery = param.get("search") || "";
  const setSearchQuery = (value: string) => {
    setParam((p) => {
      p.set("search", value);
      return p;
    });
  };
  const currentPage = param.get("page") || 1;
  const setCurrentPage = (value: number) => {
    setParam((p) => {
      p.set("page", value);
      return p;
    });
  };

  const totalPages = Math.ceil(totalProjects / ITEM_PER_PAGES);
  const startIndex = (currentPage - 1) * ITEM_PER_PAGES;
  const displayedProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEM_PER_PAGES
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const toggleProjectSelection = (project) => {
    console.log("Toggling project selection:", project);
    setSelectedProjects((prev) => {
      const existingProject = prev.find((p) => p.id === project.id); 
      if (existingProject) {
        return prev.filter((p) => p.id !== project.id);
      } else {
        return [...prev, project];
      }
    });
  };


  const handleSelectAll = () => {
    if (selectedProjects.length === displayedProjects.length) {
      setSelectedProjects([]);
    } else {
      setSelectedProjects(displayedProjects);
    }
  };

  const handleDelete = () => {
    console.log("Deleting projects:", Array.from(selectedProjects));
    setSelectedProjects([]);
    setisSelecting(false);
  };

  const cancelSelection = () => {
    setSelectedProjects([]);
    setisSelecting(false);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-10 space-y-6">
        <div className="text-xl font-semibold">Projects</div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-start space-x-2">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setCurrentPage={setCurrentPage}
            />
            {/* <SortSelect /> */}
          </div>
          <ActionButtons
            isSelecting={isSelecting}
            setisSelecting={setisSelecting}
            selectedProjects={selectedProjects}
            displayedProjects={displayedProjects}
            handleSelectAll={handleSelectAll}
            handleDelete={handleDelete}
            cancelSelection={cancelSelection}
          />
        </div>

        <div className="space-y-6">
          {filteredProjects.length === 0 && (
            <div className="text-center text-gray-600">No projects found</div>
          )}
          {displayedProjects.map((project: any) => (
            <ProjectItem
              key={project.id}
              project={project}
              isSelecting={isSelecting}
              selectedProjects={selectedProjects}
              toggleProjectSelection={toggleProjectSelection}
            />
          ))}
        </div>

        {filteredProjects.length > 0 && (
          <Pagination
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
