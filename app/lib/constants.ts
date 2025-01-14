
export const MAX_FILE_SIZE = 10 * 1024 * 1024;

export const LINE_SEGMENT_MODELS = [
  { value: "basic", label: "Basic Segmentation" },
  { value: "advanced", label: "Advanced Segmentation" },
  { value: "premium", label: "Premium Segmentation" },
] as const;

export const CHAR_RECOGNITION_MODELS = [
  { value: "standard", label: "Standard OCR" },
  { value: "enhanced", label: "Enhanced OCR" },
  { value: "premium", label: "Premium OCR" },
] as const;

export const ITEM_PER_PAGES = 7;
