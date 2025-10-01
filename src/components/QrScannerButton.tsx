 "use client"
 
 import { useState, useEffect } from "react"
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
 
 export function QrScannerButton() {
   const [open, setOpen] = useState(false)
   // Removed unused 'data' state
   const [stopStream, setStopStream] = useState(false)
 
   const handleUpdate = (err: unknown, result: unknown) => {
     if (result) {
       const resultText = (result as { text?: string }).text
       setStopStream(true) // スキャンを停止
       setOpen(false) // ダイアログを閉じる
       // ここでスキャン成功時の処理（スタンプ追加など）を実装します
       alert(`QRコードをスキャンしました: ${resultText}`)
     } else if (err) {
       console.error(err)
     }
   }
 
   useEffect(() => {
     // ダイアログが開いたらスキャンを開始し、閉じたらスキャンを停止して結果をリセット
     if (!open) {
       setStopStream(false)
     } else {
       setStopStream(true)
     }
   }, [open])

   return (
     <Dialog open={open} onOpenChange={setOpen}>
       <DialogTrigger asChild>
         <Button variant="outline" size="icon">
           <QrCodeIcon className="size-5" />
           <span className="sr-only">QRコードをスキャン</span>
         </Button>
       </DialogTrigger>
       <DialogContent className="sm:max-w-[425px] p-0">
         <DialogHeader className="p-6 pb-4">
           <DialogTitle>店舗のQRコードをスキャン</DialogTitle>
         </DialogHeader>
         <div className="overflow-hidden rounded-b-lg aspect-square">
           {open && (
             <BarcodeScannerComponent onUpdate={handleUpdate} stopStream={stopStream} />
           )}
         </div>
       </DialogContent>
     </Dialog>
   )
 }