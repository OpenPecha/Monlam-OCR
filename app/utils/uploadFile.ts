import axios from "axios";

import { AxiosProgressEvent } from "axios";

export default async function uploadFile(
  file: File,
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void
): Promise<{ status: string; message?: string; file_url?: string }> {
  try {
    let filename = file.name || "text_file";
    let uniqueFilename = `${Date.now()}-${filename}`;
    let formData = new FormData();
    formData.append("filename", uniqueFilename);
    formData.append("filetype", file.type);
    formData.append("bucket", "/MonlamOCR/");
    const response = await axios.post("/api/get_presigned_url", formData);


    // 3️⃣ Upload the file directly to S3 using the presigned URL
    const { url } = response.data;
    await axios.put(url, file, {
      headers: {
        "Content-Type": file.type,
      },
      onUploadProgress,
    });

    // 4️⃣ Return the S3 file URL
    const uploadedFilePath = url.split("?")[0];
    return { status: "success", file_url: uploadedFilePath };
  } catch (error) {
    console.error(`Error uploading file ${file.name}:`, error);
    return { status: "error", message: `Error uploading file: ${error}` };
  }
}
