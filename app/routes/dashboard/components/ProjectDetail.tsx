// import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent } from "~/components/ui/dialog";

const ProjectDetail = ({
    project
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`flex-1 px-2 py-1 ${
          project.status === "Success" ? "bg-success-500" : "bg-failure-500"
        } text-white rounded-lg text-xs font-medium text-center cursor-pointer`}
        onClick={() => setOpen(true)}
      >
        {project.status}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white overflow-y-scroll scrollbar-hide max-h-screen max-w-fit">
          <div className="max-w-lg mx-auto p-6 space-y-4 bg-white shadow-lg">
            <div className="space-y-4">
              <div className="border rounded-lg p-3">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Project Name
                </label>
                <div className="text-gray-900">{project.projectName}</div>
              </div>

              <div className="border rounded-lg p-3">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Line Segmentation Model
                </label>
                <div className="text-gray-900">
                  {project.lineSegmentationModel}
                </div>
              </div>

              <div className="border rounded-lg p-3">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Character Recognition Model
                </label>
                <div className="text-gray-900">
                  {project.characterRecognitionModel}
                </div>
              </div>

              <div className="border rounded-lg p-3">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Start Date
                </label>
                <div className="text-gray-900">{project.startDate}</div>
              </div>

              <div className="border rounded-lg p-3">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Complete Date
                </label>
                <div className="text-gray-900">{project.completDate}</div>
              </div>

              <div className="border rounded-lg p-3">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Error Message
                </label>
                <div className="text-gray-900">{project.errorMsg}</div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectDetail;
