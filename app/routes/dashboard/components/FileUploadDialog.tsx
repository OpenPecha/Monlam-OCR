import { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import Button from "~/components/Buttons";
import OcrUploadForm from "./OcrUploadForm";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function FileUploadDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" className="" onClick={() => setOpen(true)}>
        Import
        <Plus size={15} />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="bg-white max-w-2xl"
          aria-describedby="upload-description"
        >
          <DialogTitle></DialogTitle>
          <OcrUploadForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
}
