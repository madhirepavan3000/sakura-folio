import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Download, X } from "lucide-react";

interface ResumeViewerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ResumeViewer = ({ open, onOpenChange }: ResumeViewerProps) => {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 50));
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] p-0 gap-0">
        <DialogHeader className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle>Resume</DialogTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={handleZoomOut} disabled={zoom <= 50}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium min-w-[4rem] text-center">{zoom}%</span>
              <Button variant="outline" size="icon" onClick={handleZoomIn} disabled={zoom >= 200}>
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleDownload}>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-auto bg-muted/20 p-4">
          <div className="flex justify-center">
            <iframe
              src="/resume.pdf"
              className="border bg-white shadow-lg transition-all duration-200"
              style={{
                width: `${zoom}%`,
                height: `${(11 / 8.5) * 100}vh`,
                minHeight: "600px",
              }}
              title="Resume"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
