import { Image as ImageIcon } from "lucide-react";

export default function ImagePlaceholder() {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center rounded-md bg-muted text-muted-foreground">
      <ImageIcon className="mb-2 h-10 w-10" />
      <p className="text-sm font-semibold">準備中です</p>
    </div>
  );
}