import { useState } from "react";
import { Dialog, DialogContent } from "../../../components/ui/dialog";
import { SplitPageIcon, TargetPageIcon } from "~/icons/DocumentIcons";

const Exportdocs = () => {
  const [open, setOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("separate");

  const formatOptions = [
    {
      id: "docs",
      label: ".docs",
      icon: SplitPageIcon,
    },
    {
      id: "text",
      label: ".txt",
      icon: TargetPageIcon,
    },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`flex-1 px-4 py-1 rounded-lg text-xs bg-success-700 text-white font-medium text-center`}
      >
        Export
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white w-fit">
          <div className="border border-dashed border-primary-600 rounded-lg mx-auto bg-white p-6 m-4">
            <div className="space-y-4">
              {/* Title */}
              <h2 className="text-xl font-medium text-center">
                Choose file format
              </h2>

              {/* Format Selection */}
              <div className="flex justify-center space-x-4">
                {formatOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex flex-col items-center space-y-1 cursor-pointer"
                  >
                    <option.icon height="48" width="48" />

                    {/* Radio Button and Label */}
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="format"
                        value={option.id}
                        checked={selectedFormat === option.id}
                        onChange={(e) => setSelectedFormat(e.target.value)}
                        className="peer hidden"
                      />
                      <div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 transition-colors ${
                            selectedFormat === option.id
                              ? "border-success-500 bg-success-500"
                              : "border-neutral-300"
                          }`}
                        ></div>
                      </div>
                      <span className={`text-sm `}>{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>

              {/* Download Button */}
              <div className="flex justify-center">
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Download
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Exportdocs;
