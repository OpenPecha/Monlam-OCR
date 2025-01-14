import Button from "~/components/Buttons";
import DeleteConfirmationModal from "./DeleteModal";
import FileUploadDialog from "./FileUploadDialog";
export const ActionButtons = ({
  isSelecting,
  setisSelecting,
  selectedProjects,
  displayedProjects,
  handleSelectAll,
  handleDelete,
  cancelSelection,
}) => (
  <div className="flex items-center justify-center space-x-2">
    {!isSelecting ? (
      <Button
          color="secondary"
          className=""
          onClick={() => setisSelecting(true)}
        >
          Select
        </Button>
    ) : (
      <div className="flex items-center gap-2">
        <Button
          color="secondary"
          className=""
          onClick={cancelSelection}
        >
          Cancel
        </Button>
        <DeleteConfirmationModal
          selectedProjects={selectedProjects}
          onDelete={handleDelete}
          onCancel={cancelSelection}
        />
        <Button
          color="secondary"
          className=""
          onClick={handleSelectAll}
        >
          {selectedProjects.length === displayedProjects.length
            ? "Deselect All"
            : "Select All"}
        </Button>
      </div>
    )}
    <FileUploadDialog />
  </div>
);
