import { useFetcher } from "@remix-run/react";
import { useState, useCallback, useEffect, act } from "react";
import { CiFileOn } from "react-icons/ci";
import {
  MAX_FILE_SIZE,
  LINE_SEGMENT_MODELS,
  CHAR_RECOGNITION_MODELS,
} from "~/lib/constants";
import uploadFile from "~/utils/uploadFile";
import type { AxiosProgressEvent } from "axios";

interface FormData {
  projectName: string;
  lineModel: string;
  charModel: string;
  s3Url: string;
}

export default function OcrUploadForm({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) {
  const fetcher = useFetcher();
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    lineModel: "",
    charModel: "",
    s3Url: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const isSubmitting = fetcher.state === "submitting";
  const isSuccess = fetcher.data?.status === 200;
  const hasErrors = fetcher.data?.status === 400;

  const isFormValid =
    formData.projectName &&
    formData.lineModel &&
    formData.charModel &&
    formData.s3Url &&
    !isSubmitting;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateFile = (file: File): boolean => {
    if (!file) return false;

    if (file.size > MAX_FILE_SIZE) {
      alert("File size must be less than 10MB");
      return false;
    }

    if (file.type !== "application/pdf" && file.type !== "application/zip") {
      alert("Please upload only PDF or ZIP files");
      return false;
    }

    return true;
  };

  const handleFile = async (file: File) => {
    setUploadProgress(0);
    if (validateFile(file)) {
      setSelectedFile(file);
      try {
        const res = await uploadFile(
          file,
          (progressEvent: AxiosProgressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total ?? 100)
            );
            setUploadProgress(progress);
          }
        );

        if (res?.file_url) {
          setFormData((prev) => ({ ...prev, s3Url: res.file_url }));
        }
      } catch (error) {
        console.error("File upload failed:", error);
        alert("Failed to upload file. Please try again.");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess, setOpen]);
  return (
    <div className="bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <fetcher.Form
          method="post"
          action="/api/transcribe"
          className="space-y-4"
        >
          {/* Hidden input for S3 URL */}
          <input type="hidden" name="s3Url" value={formData.s3Url} />
          {hasErrors  && (
            <div className="bg-red-100 text-red-700 p-2 text-xs rounded-md">
              {fetcher.data?.message}
            </div>
          )}
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 text-black bg-gray-50 rounded-md shadow-sm focus:outline-none focus:ring-0"
              placeholder="Enter project name"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload File (PDF or ZIP)
            </label>
            <div
              className="flex items-center justify-center w-full"
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
            >
              <label
                htmlFor="file"
                className={`w-full flex flex-col items-center px-4 py-6 border-2 
                  ${
                    dragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }
                  border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200`}
              >
                {uploadProgress > 0 && uploadProgress < 100 ? (
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                ) : (
                  <div className="space-y-1 text-center">
                    <CiFileOn size={24} className="text-gray-400 mx-auto" />
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Click to upload</span> or
                      drag and drop
                    </div>
                    <p className="text-xs text-gray-500">
                      .PDF or .ZIP up to 10MB
                    </p>
                  </div>
                )}
                <input
                  id="file"
                  type="file"
                  className="hidden"
                  accept=".pdf,.zip"
                  onChange={handleFileChange}
                  required
                />
              </label>
            </div>
            {selectedFile && (
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Selected file:{" "}
                  <span className="text-black">{selectedFile.name}</span>
                </p>
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="lineModel"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Line Segmentation Model
            </label>
            <select
              id="lineModel"
              name="lineModel"
              value={formData.lineModel}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 text-black bg-gray-50 rounded-md shadow-sm focus:outline-none"
            >
              <option value="">Select a model</option>
              {LINE_SEGMENT_MODELS.map((model) => (
                <option key={model.value} value={model.value}>
                  {model.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="charModel"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Character Recognition Model
            </label>
            <select
              id="charModel"
              name="charModel"
              value={formData.charModel}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 text-black bg-gray-50 rounded-md shadow-sm focus:outline-none focus:ring-0"
            >
              <option value="">Select a model</option>
              {CHAR_RECOGNITION_MODELS.map((model) => (
                <option key={model.value} value={model.value}>
                  {model.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                !isFormValid
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </fetcher.Form>
      </div>
    </div>
  );
}
