import { MdDelete } from "react-icons/md";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "../../../components/ui/alert-dialog";
import { BsExclamationLg } from "react-icons/bs";
import Button from "~/components/Buttons";

const DeleteConfirmationModal = ({ selectedProjects, onDelete, onCancel }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    onDelete();
    setOpen(false);
  };

  return (
    <>
      <Button
        color="secondary"
        className="px-6 py-2 text-sm font-medium"
        onClick={() => setOpen(true)}
        disabled={selectedProjects.length === 0}
      >
        Delete <MdDelete />{" "}
        {selectedProjects.length ? `(${selectedProjects.length})` : ""}
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className=" bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-failure-400 flex items-center justify-center border-4 border-failure-300">
              <BsExclamationLg className="w-7 h-7 text-failure-600" />
            </div>

            <AlertDialogTitle className="text-xl font-medium text-center">
              Are you sure you want to Delete Folowing{" "}
              {selectedProjects.length === 1 ? "File" : "Files"}?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-center text-neutral-900">
              {selectedProjects.map((project) => (
                <span key={project.id}>{project.name}, </span>
              ))}
            </AlertDialogDescription>
          </div>

          <AlertDialogFooter className="flex gap-4 justify-center mt-6">
            <AlertDialogAction
              className="bg-failure-500 hover:bg-failure-600 text-white px-6 py-2 rounded-lg border-0"
              onClick={handleDelete}
            >
              Delete
            </AlertDialogAction>
            <AlertDialogCancel
              className="bg-gray-50 hover:bg-gray-100 text-gray-900 px-6 py-2 rounded-lg border-0"
              onClick={onCancel}
            >
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteConfirmationModal;
