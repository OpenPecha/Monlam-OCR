import { ActionFunctionArgs, json } from "@remix-run/node";
import { z } from "zod";

// Validation schema for the form data
const FormSchema = z.object({
  projectName: z.string().min(4, "Project name should be atlest 4 characters long"),
  lineModel: z.enum(["basic", "advanced", "premium"], {
    errorMap: () => ({ message: "Invalid line segmentation model" }),
  }),
  charModel: z.enum(["standard", "enhanced", "premium"], {
    errorMap: () => ({ message: "Invalid character recognition model" }),
  }),
  s3Url: z.string().url("Invalid file URL"),
});

export type ActionErrors = {
  projectName?: string;
  lineModel?: string;
  charModel?: string;
  s3Url?: string;
  _form?: string;
};

export async function action({ request }: ActionFunctionArgs) {
  try {
    // Parse form data
    const formData = Object.fromEntries(await request.formData());

    // Validate form data
    const validatedData = FormSchema.safeParse(formData);
    if (!validatedData.success) {
      const errors: ActionErrors = {};
      validatedData.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ActionErrors;
        errors[path] = issue.message;
      });
      console.log("Validation errors:", errors);
      return { status: 400, message: Object.values(errors)[0] || "invalid form data", errors };
    }

    const { projectName, lineModel, charModel, s3Url } = validatedData.data;
    console.log("Form data:", projectName, lineModel, charModel, s3Url);
    return { message: "OCR processing started successfully", status: 200 };
    } catch (error) {
      return error;
    }
}
