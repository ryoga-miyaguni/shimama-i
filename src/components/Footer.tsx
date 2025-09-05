export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">沖縄タコススタンプラリー</h3>
            <p className="text-muted-foreground text-sm">
              学生主催の楽しいタコス巡りイベント。沖縄の美味しいタコスと地域の魅力を発見しよう！
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">お問い合わせ</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>📧 info@okinawa-tacos-rally.com</p>
              <p>📱 098-XXX-XXXX</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">開催期間</h4>
            <div className="text-sm text-muted-foreground">
              <p>2025年12月1日〜2月28日</p>
              <p>各店舗の営業時間内</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 しままーい. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
