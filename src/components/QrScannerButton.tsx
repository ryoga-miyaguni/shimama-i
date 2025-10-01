 "use client"
 
 import { useEffect, useState } from "react"
 import { QrCodeIcon } from "lucide-react"
 import BarcodeScannerComponent from "react-qr-barcode-scanner"
 import { Button } from "@/components/ui/button"
 import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
 } from "@/components/ui/dialog"
 
 interface QrScannerButtonProps {
   onScanSuccess: (qrCode: string) => void
 }
 
 export function QrScannerButton({ onScanSuccess }: QrScannerButtonProps) {
   const [open, setOpen] = useState(false)
   const [stopStream, setStopStream] = useState(false)
 
   const handleUpdate = (err: unknown, result: unknown) => {
     if (result) {
       const qrCode = (result as { text?: string }).text?.trim().toUpperCase()
       if (!qrCode) return
 
       setStopStream(true) // スキャンを停止
       setOpen(false) // ダイアログを閉じる
 
       onScanSuccess(qrCode)
     } else if (err) {
       // NotFoundExceptionはQRコードが単に見つからなかっただけなので、コンソールには出力しない
       // それ以外の予期せぬエラーの場合のみログに出力する
       if (!(err as Error).message.includes("No MultiFormat Readers were able to detect the code")) {
         console.error("QR Scanner Error:", err)
       }
     }
   }
 
   useEffect(() => {
     // ダイアログが開いたらスキャンを開始し、閉じたらスキャンを停止して結果をリセット
     if (open) {
       setStopStream(false)
     } else {
       setStopStream(true)
     }
   }, [open])
 
   return (
     <Dialog open={open} onOpenChange={setOpen}>
       <DialogTrigger asChild>
        <Button
          size="icon"
          className="rounded-full bg-orange-400 text-white shadow-lg hover:bg-orange-600"
        >
          <QrCodeIcon className="size-6" />
           <span className="sr-only">QRコードをスキャン</span>
         </Button>
       </DialogTrigger>
       <DialogContent className="sm:max-w-[425px] p-0">
         <DialogHeader className="p-6 pb-4">
           <DialogTitle>店舗のQRコードをスキャン</DialogTitle>
         </DialogHeader>
         <div className="overflow-hidden rounded-b-lg aspect-square">
           {open && <BarcodeScannerComponent onUpdate={handleUpdate} stopStream={stopStream} />}
         </div>
       </DialogContent>
     </Dialog>
   )
 }