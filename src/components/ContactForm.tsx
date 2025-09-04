import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ContactForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">協賛について問い合わせる</Button>
      </DialogTrigger>
      {/* flex flex-col を追加 */}
      <DialogContent className="max-w-2xl h-[80vh] p-0 flex flex-col">
        <DialogHeader className="p-4">
          <DialogTitle>協賛についてのお問い合わせ</DialogTitle>
        </DialogHeader>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd5FNxw4GvsgIqds4ao6eufnsJ9vIDo7m6URp6z_JrMjcqVIw/viewform?embedded=true"
          className="w-full flex-1 border-0"
        >
          読み込んでいます…
        </iframe>
      </DialogContent>
    </Dialog>
  )
}
