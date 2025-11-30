export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>
      <div className="prose prose-sm max-w-none text-foreground">
        <p>
          沖縄タコススタンプラリー（以下、「当サービス」といいます。）は、ユーザーの個人情報保護の重要性について認識し、個人情報の保護に関する法律（以下、「個人情報保護法」といいます。）を遵守すると共に、以下のプライバシーポリシー（以下、「本ポリシー」といいます。）に従い、適切な取扱い及び保護に努めます。
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. 取得する情報と利用目的</h2>
        <p>
          当サービスでは、サービスの提供にあたり、以下の情報を取得し、それぞれの目的のために利用します。
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-1">Googleアカウントから取得する情報</h3>
        <ul>
          <li><strong>取得する情報:</strong> 氏名、メールアドレス、プロフィール画像</li>
          <li>
            <strong>利用目的:</strong>
            <ul className="list-disc pl-5">
              <li>ユーザー認証および本人確認のため</li>
              <li>スタンプカードページでユーザー名を表示するため</li>
              <li>お問い合わせへの対応や、重要なお知らせを連絡するため</li>
            </ul>
          </li>
        </ul>
        <h3 className="text-lg font-semibold mt-4 mb-1">サービスの利用に伴い取得する情報</h3>
        <ul>
          <li><strong>取得する情報:</strong> スタンプ獲得履歴（店舗ID、訪問日時）、獲得バッジ、レベル情報</li>
          <li>
            <strong>利用目的:</strong>
            <ul className="list-disc pl-5">
              <li>スタンプラリー機能を提供し、ユーザーの進捗を管理するため</li>
              <li>サービスの利用状況を分析し、サービス改善に役立てるため（個人を特定しない統計情報として利用します）</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. 個人情報の第三者提供について</h2>
        <p>
          当サービスは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. 個人情報の安全管理</h2>
        <p>
          当サービスは、取り扱う個人情報の漏えい、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookieの使用について</h2>
        <p>
          当サービスでは、ユーザーのログイン状態を維持するためにCookieを使用しています。これは認証機能を正常に提供するために必要なものです。
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. プライバシーポリシーの変更</h2>
        <p>
          当サービスは、必要に応じて本ポリシーを変更します。変更後のプライバシーポリシーは、当サイトでの掲示をもって効力を生じるものとします。
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. お問い合わせ窓口</h2>
        <p>
          本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。<br />
          メールアドレス: tacosta.okinawa@gmail.com
        </p>
      </div>
    </div>
  );
}

