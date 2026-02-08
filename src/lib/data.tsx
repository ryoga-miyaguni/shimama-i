import type { Shop, RegionAttraction, Sponsor, MapPoint } from "../../types"

export const shops: Shop[] = [
  {
    id: "1",
    name: "カフェ パルパロ 古宇利島",
    description: "アグー豚を使ったこだわりの三色タコスは、パリパリもちもちの独特食感が楽しめます。",
    detail:(
        <>
            🌮タコスは皮がもちもちで、黒、ピンク、青の3色というこだわりがあります！
            <br />
            🐷具材は県産アグー豚を使用しています！
            <br />
            🌶辛くないので食べやすくなっています！
            <br />
            <br />
            タコススタンドは、お店の裏にある工房で作った
            <br />
            シーサーのやちむんです♪
            <br />
            <br />
            自家焙煎コーヒーが美味しくておすすめです☕️
        </>
    ),
    region: "north",
    image: "/parparo-v.jpg",
    location: { address: "国頭郡今帰仁村古宇利268" },
    position: { x: 58, y: 20 },
    hours: "10:30〜18:00（火曜定休）",
    phone: "0980-380554",
    snsUrl: "https://www.instagram.com/cafe_paruparo/",
  },
  {
    id: "2",
    name: "Famille",
    description: "フレンチシェフが作るオシャレなタコスが自慢で、辛スープにディップして食べるのがおすすめです。",
    detail:(
        <>
            フレンチシェフのご夫婦が手がけるタコスは上品な味わいです✨
            <br />
            辛スープが旨辛で、辛いものが好きな人にはおすすめです🌶
            <br />
            <br />
            テイクアウト専門店ですが、⁡お店の前で食べることもできます♪
            <br />
            タコスの特徴的な看板があります🌮
            <br />
            建物も水色と白で涼しい雰囲気で可愛いです🩵
            <br />
            <br />
            お店の近くにビーチがあり、そこでサンセットを見ながらタコスを食べるのがおすすめです‼️
        </>
    ),
    region: "north",
    image: "/famille.jpg",
    location: { address: "名護市屋部35番地" },
    position: { x: 50, y: 35 },
    hours: "平日:11:00 ~ 17:00 休日:10:00 ~ 17:00 (SNSをご確認ください)",
    phone: "080-4001-4528",
    snsUrl: "https://www.instagram.com/famille.okinawa88/",
  },
  {
    id: "3",
    name: "カーサタコス",
    description: "創業40年以上、地元に根ざしたカーサ（家）のような温かい雰囲気のお店でタコスを楽しめます。",
    detail:(
        <>
            「カーサ」はスペイン語で「家」という意味です創業40年以上、
            <br />
            地元に根ざしたカーサ(家)のような温かいお店です✨✨
            <br />
            名前の通り温かい家のような雰囲気で地元から愛されています💖
            <br />
            壁には当時のお客さんの写真が飾られています📸
            <br />
            <br />
            サクモチの王道タコスです！
            <br />
            珍しい『豆タコス』があるのでぜひ食べてみてください！
        </>
    ),
    region: "central",
    image: "/ka-satacos.jpg",
    location: { address: "うるま市天願１３８７−５" },
    position: { x: 38, y: 60 },
    hours: "11:00〜20:00（水・木定休）",
    phone: "098-9726-022",
    snsUrl: "https://www.instagram.com/casa_tacos_tengan/",
  },
  {
    id: "4",
    name: "TACOBOX OKINAWA",
    description: "ジューシーなチキンタコスが自慢の、唯一無二のオリジナルタコスを味わうことができます。",
    detail:(
        <>
            道の駅にあるお店です！
            <br />
            外にテーブルとイスが沢山あるので、そこで食べることができます！
            <br />
            天気のいい日はおすすめです☀️
            <br />
            <br />
            タコスは、チキンタコスがおすすめです🌮
            <br />
            お肉がごろごろ大きくて、食べ応えがあります‼️
            <br />
            タコスは大きくてボリューム満点です✨
            <br />
            生地はふわふわです！⁡
            <br />
            袋も付いているので、食べやすいです！
        </>
    ),
    region: "central",
    image: "/tacobox.jpg",
    location: { address: "嘉手納町屋良１０２６−３" },
    position: { x: 25, y: 59 },
    hours: "11:00 ~ 18:00",
    phone: "090-9781-6059",
    snsUrl: "https://www.instagram.com/tacobox_okinawa/",
  },
  {
    id: "5",
    name: "タコスカフェ タコロコ",
    description: "本場メキシコの味を再現した、スープに浸して楽しむビリアタコスなどが味わえます。",
    detail:(
        <>
            メキシコを感じ、楽しむことができるお店です！
            <br />
            🌮1番人気のビリアタコスは、ソースからこだわって作っています！！
            <br /> 
            お肉はほろほろになるまで長時間煮込んでいます！
            <br />
            <br />
            アメリカンビレッジの中にあります！
            <br />
            お店の外観もおしゃれでお店に入る前から気分が上がります✨
            <br />
            テラス席もあります！
            <br />
            <br />
            ホームページもあるのでぜひ見て見てくださいね‼️
            <a href={"https://tacoloco.jp/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
            <span>ホームページを見る</span>
            </a>
        </>
    ),
    region: "central",
    image: "/tacoloco.jpg",
    location: { address: "北谷町美浜９−２ アメリカンビレッジ B棟 2F" },
    position: { x: 21, y: 66 }, 
    hours: "11:00 ~ 16:00, 17:00 ~ 22:00",
    phone: "098-923-2320",
    snsUrl: "https://www.instagram.com/tacoloco.mihama/",
  },
  {
    id: "6",
    name: "TANK/DINER",
    description: "コザの街で、ハンバーガーから沖縄そばまで揃うメニュー豊富な中で、手作りにこだわったタコスが楽しめます。",
    detail:(
        <>
            タコスは生地が厚めでパリパリです！
            <br />
            スパイスが効いています！！
            <br />
            とっても美味しくて、手ごろな価格です！
            <br />
            <br />
            個人的にスープもセットで一緒に食べることをおすすめします‼️
            <br />
            心も身体も温まります💖
            <br />
            <br />
            メニューの種類も豊富で、タコス以外にもタコライスや沖縄そば、ハンバーガーなどもあります🍔
        </>
    ),
    region: "central",
    image: "/tankdiner.jpg",
    location: { address: "沖縄市中央２丁目６−５"},
    position: { x: 30, y: 65 }, 
    hours: "11:00 ~ 16:00（ラストオーダー 15:30） 定休日: 水",
    phone: "090-6866-5654",
    snsUrl: "https://www.instagram.com/tankdiner",
  },
  {
    id: "7",
    name: "Udo Tacos+",
    description: "手作りのもっちもち生地でいただくカルニタスと、サクサクのフィッシュタコスが絶品です。",
    detail:(
        <>
            2025年の6月に沖縄市にオープンしたメキシカンタコスのお店です！
            <br />
            家族一丸となってお店を営んでいます✨
            <br />
            <br />
            生地とソースは奥さんの手作りで、
            <br />
            もっちもちの生地で食べるカルニタスと
            <br />
            サクサクのフィッシュタコスがおすすめです‼️
            <br />
            <br />
            おしゃれで居心地のいい店内は旦那さんのDIYです🪚
            <br />
            席数も多く、グループでも楽しめるのが魅力です✨
        </>
    ),
    region: "central",
    image: "/udotacos.jpg",
    location: { address: "沖縄市高原4-1-16" },
    position: { x: 32, y: 72 }, 
    hours: "（日・月定休日) 火・水：11:00 ～ 19:00、木：11:00 ～ 14:00、 土・金：11:00 ～ 20:00 (SNSをご確認ください) ",
    phone: "098-923-1611",
    snsUrl: "https://www.instagram.com/udotacosplus/",
  },
  {
    id: "8",
    name: "Cafe Mermaid",
    description: "パイ生地のようなパリサク食感の皮が特徴的な、名物「まぎータコス」が味わえます。",
    detail:(
        <>
            中城モールの中にあるお店です。
            <br />
            ビーチテラスもあり、海と人魚を眺めながら食べることができます！
            <br />
            わんちゃんも連れて行けます🐶
            <br />
            店内もテラスも席が沢山あります✨
            <br />
            <br />
            タコスは大きくてボリュームがあります🌮
            <br />
            アルゼンチン出身のおばぁちゃんが全て手作りで作っています👵
            <br />
            スパイスはアルゼンチン秘伝のスパイスだそうです✨
            <br />
            生地はパリパリしていて美味しいです！
        </>
    ),
    region: "central",
    image: "/mermaid.png",
    location: { address: "中城村字久場1963 中城モール一階" },
    position: { x: 27, y: 78 }, 
    hours: "11:00 ～ 20:00（ラストオーダー 19:00）",
    phone: "098-895-6188",
    snsUrl: "https://www.instagram.com/mermaid_in_nakagusuku/",
  },
  {
    id: "9",
    name: "TeaRoom・SORA",
    description: "マンガ喫茶のような雰囲気で、ポーたまやゴーヤーが入ったユニークな「うちなータコス」が楽しめます。",
    detail:(
        <>
            皮は厚くてパリッパリです！🌮
            <br />
            うちなータコスはゴーヤーが入った唯一無二のタコスです✨
            <br />
            ゴーヤーとポークが相性抜群‼️
            <br />
            ゴーヤーは玉子焼きで包んであります🥚
            <br />
            <br />
            タコス以外も定食などメニューが豊富です！！
            <br />
            島唐辛子で作ったホットソースもあります🌶
            <br />
            <br />
            店内は漫画喫茶のようです✨
            <br />
            窓には雲が貼ってあり、可愛いです︎︎💙 ̖́-
        </>
    ),
    region: "central",
    image: "/sora.jpg",
    location: { address: "浦添市経塚５１８ テナントビル 1-A てぃーだ" },
    position: { x: 19, y: 80 }, 
    hours: "8:00 ～ 24:00",
    phone: "098-874-2081",
    snsUrl: "https://www.instagram.com/sora.tacos/",
  },
  {
    id: "10",
    name: "タコスプーン",
    description: "那覇市で味わえる王道のパリモチ沖縄タコスは、沖縄タコス好きにはたまらない一品です。",
    detail:(
        <>
            王道沖縄タコスのパリパリモチモチの生地です🌮
            <br />
            沖縄タコス好きには刺さるタコスです！
            <br />
            ソースは甘口と辛口があり、お好みでかけることができます🌶
            <br />
            <br />
            タコス以外にもメニュー豊富です！！
            <br />
            オードブルの注文やテイクアウトもできます‼️
            <br />
            <br />
            店内は大きなテーブルが多く、
            <br />
            家族連れでも安心して入れます！👨‍👩‍👦‍👦
            <br />
            畳のスペースもあります！
            <br />
            アットホームな雰囲気で居心地のいい店内です✨
        </>
    ),
    region: "south",
    image: "/tacospoon.jpg",
    location: { address: "那覇市曙３丁目２０−１" },
    position: { x: 10, y: 80 }, 
    hours: "11:00～21：30、(15時〜17時までは準備中)",
    phone: "098-800-1149",
    snsUrl: "https://www.instagram.com/taco.spoon/",
  },
  {
    id: "11",
    name: "ローレル",
    description: "オシャレな雰囲気の店内で、クリスピー感が際立つ本格的なハードシェルタコスやビリアタコスを味わえます。",
    detail:(
        <>
            本格ビリアタコスです🌮
            <br />
            コンソメスープはタコスを付けても良し、飲んで良し✨
            <br />
            牛肉とチーズが絡まって美味しいです！
            <br />
            <br />
            ボリュームたっぷりのタコスで、
            <br />
            食べやすいように手袋が用意されており、
            <br />
            お客さまへの配慮があります‼️
            <br />
            <br />
            ハードシェルタコスは超クリスピーな生地が
            <br />
            一般的な沖縄タコスとは違い食感も楽しいタコスです🌮
            <br />
            <br />
            ドーナツも売っています🍩
            <br />
            店内もとてもこだわっていて、おしゃれです
        </>
    ),
    region: "south",
    image: "/ro-reru.jpg",
    location: { address: "南城市つきしろ１６７８−２１９" },
    position: { x: 27, y: 86 }, 
    hours: "11:00 ～ 20:00 (定休日 月・第2第4木曜)",
    phone: "098-917-6084",
    snsUrl: "https://www.instagram.com/laurel_by_kmc/",
  },
  {
    id: "12",
    name: "GRINGO",
    description: "ボリュームたっぷりのタコスはもちろん、ロゴ入りのコップなど細部へのこだわりも光るお店です。",
    detail:(
        <>
          糸満市にある、メキシカンな雰囲気のお店です🇲🇽
          <br />
          店内は内装も凝っていて、入るだけでワクワクします✨
          <br />
          <br />
          タコスは皮がパリパリ・ザクザク食感で、
          <br />
          具材もたっぷりでボリューム満点です🌮‼️
          <br />
          お肉もジューシーで濃厚な味わいが楽しめます🍖
          <br />
          <br />
          ハンバーガーも肉肉しくて大人気です🍔
          <br />
          お店のロゴが入ったコップなど、細部までこだわりが詰まっています🥤
          <br />
          ピンクレモネードと一緒に食べるのがおすすめですよ🍋
        </>
    ),
    region: "south",
    image: "/gringo.jpg",
    location: { address: "糸満市西崎6-4-5 マルキヨ開発ビル F1" },
    position: { x: 7, y: 88 }, 
    hours: "11:00 ～ 20:30",
    phone: "098-996-1197",
    snsUrl: "https://www.instagram.com/gringo.tacos/",
  },      
]

export const attractions: RegionAttraction[] = [
  {
    id: "a1",
    shopId: "1", // カフェ パルパロ 古宇利島
    title: "古宇利島",
    description: "エメラルドグリーンの海に囲まれた絶景の島。古宇利大橋からの眺めは圧巻です。",
    detail:(
      <>
        沖縄本島から屋我地島を経て、海の上を滑るように伸びる全長1,960mの「古宇利大橋」。
        <br />その先に待っているのが、周囲約8kmの小さな離島、古宇利島（こうりじま）です。
        <br />古宇利大橋の上から見渡す海は、息をのむほど美しいエメラルドグリーン。
        <br />「古宇利ブルー」とも称されるその絶景は、訪れるすべての人を魅了します。
        <br />
        <br /><h2 className="font-bold">■ 恋の島でパワースポット巡り</h2>
        <br />古宇利島は、古くから「くいじま（恋島）」と呼ばれ、沖縄版「アダムとイヴ」の伝説が残る神聖な島です。
        <br />特に有名なのが、ティーヌ浜にある「ハートロック」。
        <br />これは、波の浸食によってできた2つの岩が重なりハート型に見えることから、恋愛成就の聖地として多くの人々が訪れます。
        <br />
        <br /><h2 className="font-bold">■ 島全体が絶景の宝庫</h2>
        <br />古宇利島は、海抜82mからの大パノラマが楽しめる「古宇利オーシャンタワー」や、手つかずの自然が残る「トケイ浜」など、島内には見どころが満載。
        <br />昼間の鮮やかな海はもちろん、夕暮れ時のロマンチックなサンセットや、夜に広がる満天の星空も格別です。
        <br />
        <br />タコス巡りのドライブコースとして、心地よい海風を感じながら「恋の島」の魅力を存分に満喫してください。
        <br />
        <br />参考リンク
        <br />
        <a href={"https://kourijima.info/about/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>古宇利島について</span>
        </a>
        <a href={"https://ranrantour.jp/topic/5986/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>沖縄旅行では古宇利島へ行こう！古宇利島のおすすめスポット3選</span>
        </a>
      </>
    ),
    image: "/kourizima.jpg",
    position: { x: 58, y: 18 },
    category: "nature",
  },
  {
    id: "a2",
    shopId: "2", // ファミーユ
    title: "名護博物館",
    description: "名護の自然・歴史・文化を学べる新しい博物館。やんばるの多様な魅力を発見できます。",
    detail:(
      <>
        沖縄本島の北部、やんばるの玄関口に位置する名護市。
        <br />
        <br />2023年にリニューアルオープンした新しい「名護博物館」は、その歴史と文化を深く知ることができる拠点です。
        <br />
        <br />館内に入ると広がるのは、「名護・やんばるのくらしと自然」をテーマにした空間。
        <br />
        <br />単なる展示だけでなく、地域の人々と共に作り上げられた温かみが感じられ、訪れる人々にやんばるの奥深さを伝えます。
        <br />
        <br /><h2 className="font-bold">■ 圧巻！巨大なクジラの骨格標本</h2>
        <br />常設展示室に入ってすぐに目に飛び込んでくるのが、天井から吊り下げられた巨大なクジラの骨格標本です。
        <br />
        <br />全長約10メートルのザトウクジラとマッコウクジラの標本は迫力満点。
        <br />
        <br />かつて名護で行われていた捕鯨（ピトゥ漁）の歴史や、人と海との関わりを象徴する展示となっています。
        <br />
        <br /><h2 className="font-bold">■ やんばるの自然とくらし</h2>
        <br />「海」「山」「まち・ムラ」の3つのゾーンで構成された展示では、やんばるの豊かな自然環境と、そこで営まれてきた人々の暮らしを紹介しています。
        <br />
        <br />剥製や民具が展示されており、昔ながらの生活の知恵や自然との共生について学ぶことができます。
        <br />
        <br />参考リンク
        <a href={"https://www.city.nago.okinawa.jp/museum/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>名護博物館 公式サイト</span>
        </a>
        <a href={"https://nagomun.or.jp/facility/1646/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>名護市観光協会なごむん｜名護博物館</span>
        </a>
      </>
    ),
    image: "/nagohakubutukan.jpg",
    position: { x: 52, y: 37 },
    category: "culture",
  },
  {
    id: "a3",
    shopId: "3", // カーサタコス
    title: "うるマルシェ",
    description: "うるま市の新鮮な農産物や特産品が揃う、沖縄県最大級のファーマーズマーケット。レストランも併設されており、うるまの食文化を丸ごと楽しめます。",
    detail:(
      <>
        沖縄本島の中部、うるま市前原に位置する「うるマルシェ」。
        <br />
        <br />「食」をキーワードに、生産者と買い手を直接つなぐ農業・水産業の振興拠点施設です。
        <br />
        <br />施設内には、うるま市を中心とした沖縄県各地から食材が集まり、地域の活性化や豊かな暮らしを提案する場として多くの人で賑わいます。
        <br />
        <br /><h2 className="font-bold">■ 県内各地から届く新鮮な農水産物</h2>
        <br />農水産直売所には、地元農家が育てた野菜や畜産家による肉、近海で水揚げされた魚が並びます。
        <br />
        <br />素材そのものだけでなく、それらを使用して調理されたお惣菜やお弁当、特産品も購入可能です。
        <br />
        <br /><h2 className="font-bold">■ その場で味わう「うるま市民食堂」とフードコート</h2>
        <br />直売所の新鮮な食材を使用した料理を提供する「うるま市民食堂」や、地域食材を活用したショップが並ぶフードコートを併設しています。
        <br />
        <br />テラス席での食事や、貸切でバーベキューを楽しむこともでき、イベント広場では様々な催しが開催されます。
        <br />
        <br />参考リンク
        <a href={"https://urumarche.com/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>うるマルシェ 公式サイト</span>
        </a>
        <a href={"https://urumakankou.com/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>うるマルシェ | うるま市観光物産協会公式サイト「うるまいろ」</span>
        </a>
      </>
    ),
    image: "/urumaru.jpg",
    position: { x: 42, y: 62 },
    category: "spot",
  },
  {
    id: "a4",
    shopId: "4", // TACOBOX OKINAWA
    title: "道の駅かでな",
    description: "嘉手納基地の滑走路を一望できる展望台が人気。沖縄の特産品も揃う立ち寄りスポットです。",
    detail:(
      <>
        沖縄本島の中部、那覇から北部へ向かう道中に位置する嘉手納町。
        <br />
        <br />「道の駅かでな」は、極東最大級の米空軍嘉手納基地を一望できる、国内で唯一の道の駅です。
        <br />
        <br />2023年にリニューアルされた施設は、観光の拠点としてだけでなく、地域の歴史や現状を伝える学習の場としての役割も担っています。
        <br />
        <br /><h2 className="font-bold">■ 基地を見渡す展望所と学習展示室</h2>
        <br />4階の展望所からは、広大な基地の滑走路や施設を見渡すことができ、タイミングが合えば航空機の離発着を間近に見られます。
        <br />
        <br />3階にある学習展示室では、戦前・戦後の町の移り変わりや、町面積の多くを基地が占める嘉手納町の歴史について資料や写真で解説しています。
        <br />
        <br />展望所に設置された騒音計の数値や展示を通して、基地を抱える地域の日常や平和について考えることができます。
        <br />
        <br /><h2 className="font-bold">■ アメリカンフードと限定グッズ</h2>
        <br />飲食エリアでは、基地のお膝元らしいボリューム満点のジャンボチーズバーガーや、特産品の「野国いも」を使用したソフトクリームなどが味わえます。
        <br />
        <br />1階のショップには、他では手に入りにくい米空軍関連のTシャツや刺繍パッチなどのグッズが豊富に揃っています。
        <br />
        <br />地元の新鮮な農産物やサーターアンダギーも販売されており、ドライブの休憩やお土産選びに最適です。
        <br />
        <br />参考リンク
        <a href={"https://michinoeki-kadena.jp/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>道の駅かでな 公式サイト</span>
        </a>
        <a href={"https://www.kadena-kanko.com/tourism/learning/1026"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>道の駅かでな | 嘉手納町観光協会</span>
        </a>
      </>
    ),
    image: "/kadena.jpg",
    position: { x: 24, y: 57 },
    category: "spot",
  },
  {
    id: "a5",
    shopId: "5", // タコスカフェ タコロコ
    title: "美浜アメリカンビレッジ",
    description: "カラフルな建物が並ぶシーサイドタウン。ショッピングやグルメ、映画などが楽しめます。",
    detail:(
      <>
        沖縄本島の中部、西海岸沿いの北谷町美浜に位置する「美浜アメリカンビレッジ」。
        <br />
        <br />米軍基地の跡地を利用して建設されたこの広大なエリアは、アメリカ西海岸の雰囲気が漂う県内屈指のリゾートタウンです。
        <br />
        <br />カラフルな建物やヤシの木が並ぶ街並みには、ショッピング、グルメ、アミューズメント施設が集結し、訪れる人々に非日常的な高揚感を提供します。
        <br />
        <br /><h2 className="font-bold">■  異国情緒あふれるフォトジェニックな街並み</h2>
        <br />エリア内にはレンガ造りの歩道やポップな外壁の建物が続き、歩いているだけでまるで海外にいるかのような景観を楽しめます。
        <br />
        <br />輸入雑貨や古着を扱う個性的なショップが立ち並ぶほか、壁面のウォールアートなど写真映えするスポットも満載です。
        <br />
        <br />ストリートライブなどのパフォーマンスも頻繁に行われており、ショッピングだけでなく街全体の賑やかな空気感を満喫できます。
        <br />
        <br /><h2 className="font-bold">■ 東シナ海に沈む夕日と輝く夜景</h2>
        <br />西海岸に面しているため、夕暮れ時には隣接する「サンセットビーチ」や海沿いの遊歩道から、水平線に沈む美しい夕日を一望できます。
        <br />
        <br />日が沈むと街全体がイルミネーションで彩られ、昼間の活気ある雰囲気とは異なるロマンチックな夜景スポットへと姿を変えます。
        <br />
        <br />海風を感じるテラス席での食事や、週末に夜空を彩る花火など、朝から夜まで遊び尽くせる魅力が詰まっています。
        <br />
        <br />参考リンク
        <a href={"https://www.okinawa-americanvillage.com"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>美浜アメリカンビレッジ 公式サイト</span>
        </a>
        <a href={"https://love.chatan.jp/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>北谷町観光情報センター</span>
        </a>
      </>
    ),
    image: "/amerikan.jpg",
    position: { x: 22, y: 67 },
    category: "spot",
  },
  {
    id: "a6",
    shopId: "6", // TANK/DINER
    title: "コザ一番街商店街",
    description: "沖縄市の中心市街地にある歴史ある商店街。ディープな沖縄の日常と文化に触れられます。",
    detail:(
      <>
        沖縄本島の中部、沖縄市の中心市街地に位置する「コザ一番街商店街」。
        <br />
        <br />1975年に沖縄で初めて誕生したアーケード商店街は、地元の人々の生活の場として長く親しまれてきました。
        <br />
        <br />現在は「コザスタートアップ商店街」としての側面も持ち、古くからの商店と新しい才能が混ざり合うユニークなエリアへと進化しています。
        <br />
        <br /><h2 className="font-bold">■ 新旧の店舗が共存する多様な空間</h2>
        <br />通りには創業50年以上の呉服店や鞄店などの老舗と、カフェシアターや多国籍なショップが軒を連ねています。
        <br />
        <br />商店街の中心にある「コザBOX」は、観光情報の入手や休憩ができる交流拠点です。
        <br />
        <br />夜には手頃な価格で楽しめる居酒屋も賑わいを見せ、昼とは異なる大人の社交場としての顔を覗かせます。
        <br />
        <br /><h2 className="font-bold">■ 挑戦者を応援するスタートアップの拠点</h2>
        <br />商店街全体が起業家を支援する場となり、創業支援施設やシェアオフィスには多くのスタートアップ企業が入居しています。
        <br />
        <br />かつてロックミュージシャンを輩出したコザの土壌は、イノベーションを目指す若者を受け入れる場として受け継がれています。
        <br />
        <br />様々な背景を持つ人々が交流し、ビジネスや文化の新しい動きがここから生まれています。
        <br />
        <br />参考リンク
        <a href={"https://www.kozaweb.jp/spots/detail/307"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>一番街｜沖縄市観光ポータルコザウェブ</span>
        </a>
        <a href={"https://www.okinawastory.jp/spot/600007887"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>一番街 | 沖縄観光情報WEBサイト おきなわ物語</span>
        </a>
      </>
    ),
    image: "/kozasyoutenngai.jpg",
    position: { x: 31, y: 66 },
    category: "spot",
  },
  {
    id: "a7",
    shopId: "7", // Udo Tacos+
    title: "泡瀬干潟",
    description: "泡瀬干潟は、砂・泥・サンゴ礫・海草藻場・サンゴ礁が入り混じる複雑な浅海環境で、沖縄県内最大級の干潟・浅海域です。貝類・底生生物・魚類・海草、さらには渡り鳥やサンゴに至るまで、多様な生きものが確認されています。",
    detail:(
      <>
        沖縄本島の中部、沖縄市の東海岸に位置する中城湾に広がる「泡瀬干潟」。
        <br />
        <br />サンゴ礁の浅瀬に形成されたこの広大な干潟は、砂や泥、岩場など多様な環境が混在しています。
        <br />
        <br />その規模と生物多様性の高さから、国内最大級のサンゴ礁干潟として知られ、多くの貴重な生き物を育む重要な湿地です。
        <br />
        <br /><h2 className="font-bold">■ 日本一の海草藻場と渡り鳥の飛来地</h2>
        <br />泡瀬干潟には10種類以上の海草が生育しており、その種類の多さは日本一と言われています。
        <br />
        <br />豊かな生態系を求めて多くの渡り鳥が飛来し、特にムナグロの越冬数は日本国内で最大級を誇ります。
        <br />
        <br />トカゲハゼやクビレミドロといった絶滅危惧種も生息しており、学術的にも極めて価値の高い場所です。
        <br />
        <br /><h2 className="font-bold">■ 豊かな貝類と地域文化との関わり</h2>
        <br />確認された貝類は約500種に達し、琉球列島の干潟の中で最も種数が多い場所の一つとされています。
        <br />
        <br />古くから潮干狩りや伝統行事である「浜下り」の場として利用され、地域の人々の生活や文化と深く結びついてきました。
        <br />
        <br />現在は保全活動や環境教育のフィールドとしても活用され、自然と人との共生について考える場となっています。
        <br />
        <br />参考リンク
        <a href={"https://digitalarchiveproject.jp/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>沖縄の自然 泡瀬干潟 – 岐阜女子大学 デジタルアーカイブ研究所</span>
        </a>
        <a href={"http://awase.net"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>泡瀬干潟を守る連絡会</span>
        </a>
      </>
    ),
    image: "/awasehigata.jpg",
    position: { x: 34, y: 73 },
    category: "nature",
  },
  {
    id: "a8",
    shopId: "8", // カフェ マーメイド
    title: "中城城跡",
    description: "世界遺産の一つ。美しい曲線を描く城壁が特徴で、歴史と絶景を同時に楽しめます。",
    detail:(
      <>
        沖縄本島の中部、中城村と北中城村にまたがる標高約160メートルの高台に位置する「中城城跡」。
        <br />
        <br />「琉球王国のグスク及び関連遺産群」の一つとして世界遺産に登録されており、県内のグスクの中で最も遺構がよく残っている城跡です。
        <br />
        <br />一の郭から三の郭など6つの郭が連なる広大な敷地からは、東に中城湾、西に東シナ海を見渡すことができ、戦略上の要衝であったことがうかがえます。
        <br />
        <br /><h2 className="font-bold">■ ペリー提督も記録した巧みな石積み技術</h2>
        <br />琉球石灰岩で積まれた城壁は、自然の岩石や地形を巧みに利用し、美しい曲線を描いて構築されています。
        <br />
        <br />1853年に訪れたアメリカのペリー提督一行もその建築技術に驚き、詳細な測量図やスケッチを「日本遠征記」に残しました。
        <br />
        <br />「相方積み（あいかたづみ）」や「布積み（ぬのづみ）」など、郭によって異なる石積みの技法を間近で観察することができます。
        <br />
        <br /><h2 className="font-bold">■ 名将・護佐丸の歴史と伝説の舞台</h2>
        <br />15世紀中頃、読谷山按司であった護佐丸（ごさまる）が王府の命により移り住み、当時の最高技術を用いて城を拡張・完成させたと伝えられています。
        <br />
        <br />勝連城主・阿麻和利（あまわり）を牽制する役割を担っていましたが、1458年、阿麻和利の策謀により攻め入られ、護佐丸はこの地で自害しました。
        <br />
        <br />正門や裏門、水を確保するための井戸（ウフガー）などの遺構からは、当時の防御機能や城内での生活の様子を知ることができます。
        <br />
        <br />参考リンク
        <a href={"https://www.nakagusuku-jo.jp/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>沖縄の世界遺産 中城城跡</span>
        </a>
        <a href={"https://www.okinawastory.jp/spot/10092600"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>中城城跡（なかぐすくじょうあと） | 沖縄観光情報WEBサイト おきなわ物語</span>
        </a>
      </>
    ),
    image: "/nakagusuku.jpg",
    position: { x: 28, y: 76 },
    category: "culture",
  },
  {
    id: "a9",
    shopId: "9", // TeaRoom・SORA
    title: "中頭方西海道",
    description: "琉球王国時代の主要な道の一つ。浦添の石畳道で歴史の面影を感じながら散策できます。",
    detail:(
      <>
        沖縄本島の中部、かつて首里王府と地方を結ぶ主要な街道として整備された「中頭方西海道」。
        <br />
        <br />1597年、尚寧王の命により、首里城を起点として浦添を経て読谷、国頭方面へと続く道として整えられました。
        <br />
        <br />現在は国指定史跡として、琉球王国の歴史と交通の変遷を今に伝える貴重な文化財となっています。
        <br />
        <br /><h2 className="font-bold">■ 往時の姿を留める石畳と安波茶橋</h2>
        <br />街道の難所であった経塚と安波茶の谷間には、小湾川を渡るための石造りのアーチ橋「安波茶橋」が架けられています。
        <br />
        <br />橋の周辺には、当時の国家的な土木工事によって敷かれた琉球石灰岩の石畳道が現在も残っています。
        <br />
        <br />北橋と南橋からなるこの橋と石畳の遺構からは、かつて人や物資が行き交った往時の様子を観察することができます。
        <br />
        <br /><h2 className="font-bold">■ 王国の繁栄を支えた「公事道」の役割</h2>
        <br />この道は「宿道」あるいは「公事道」と呼ばれ、王府からの命令伝達や地方からの貢租の運搬に使われた重要なルートでした。
        <br />
        <br />1597年に建立された「浦添城の前の碑」には、木橋から石橋への架け替えや道の拡張など、大規模な整備工事の記録が刻まれています。
        <br />
        <br />琉球王国の政治や経済の発展を支えた大動脈であり、歴史的・文化的に極めて高い価値を有しています。
        <br />
        <br />参考リンク
        <a href={"https://www.urasoenavi.jp/_themes/img/urasoe_history/file_history_book_new-5-nakagamihouseikaidou.pdf"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>中頭方西海道｜浦添の歴史散歩</span>
        </a>
        <a href={"https://bunka.nii.ac.jp/heritages/detail/213076"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>中頭方西海道及び普天満参詣道 | 文化遺産オンライン</span>
        </a>
      </>
    ),
    image: "/nakagami.jpg",
    position: { x: 20, y: 79 },
    category: "culture",
  },
  {
    id: "a10",
    shopId: "10", // タコスプーン
    title: "福州園",
    description: "那覇市と福州市の友好を記念して1992年に造られた、中国福建省・福州の伝統庭園を忠実に再現した中国式庭園。異国情緒あふれるスポットです。",
    detail:(
      <>
        沖縄本島の南部、那覇空港や国際通りからもアクセスが良い那覇市久米に位置する「福州園」。
        <br />
        <br />中国・福州市と那覇市の友好都市締結10周年などを記念して、1992年に開園した本格的な中国式庭園です。
        <br />
        <br />この場所はかつて「久米村（クニンダ）」と呼ばれ、中国から移り住んだ人々が琉球王国の貿易や外交を支えた歴史的なゆかりの地です。
        <br />
        <br /><h2 className="font-bold">■ 本場の資材と技術で再現された風景</h2>
        <br />園内の建造物は福州産の資材を使用し、現地の職人が加工した部材を那覇へ運んで組み立てられました。
        <br />
        <br />福州地方独特の伝統的手法を用いており、中国の雄大な自然や名勝をイメージした異国情緒あふれる景観が広がっています。
        <br />
        <br />敷地内は「春」「夏」「秋冬」の季節ごとの景色に分かれており、四季折々の植物や特徴的な造形を鑑賞できます。
        <br />
        <br /><h2 className="font-bold">■ 「歩けるアート」と幻想的な夜の空間</h2>
        <br />「歩けるアート」をコンセプトに設計されており、回廊や池、滝などを巡りながら、歩を進めるごとに変化する景色を楽しむことができます。
        <br />
        <br />夜間は園内がライトアップされ、水音や風の音とともに、昼間とは異なる幻想的な雰囲気の中で散策が可能です。
        <br />
        <br />隣接する「クニンダテラス」には、久米村の歴史や文化を学べる展示室や、飲食店などの交流施設も併設されています。
        <br />
        <br />参考リンク
        <a href={"https://www.fksn-okinawa.jp/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>【公式】福州園</span>
        </a>
        <a href={"https://www.okinawastory.jp/spot/10092300"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>中国式庭園・福州園 | 沖縄観光情報WEBサイト おきなわ物語</span>
        </a>
      </>
    ),
    image: "/hukusyuen.jpg",
    position: { x: 12, y: 81 }, 
    category: "culture",
  },
  {
    id: "a11",
    shopId: "11", // ローレル
    title: "百名ビーチ",
    description: "琉球創世の女神アマミキヨが沖縄本島に最初に上陸したと伝えられる聖地としても有名な海岸です。",
    detail:(
      <>
        沖縄本島の南部、南城市玉城に位置する「百名ビーチ」。
        <br />
        <br />白く輝く砂浜と透明度の高い海が広がる、自然のままの姿を残した天然ビーチです。
        <br />
        <br />琉球の創世神話ゆかりの地として知られ、聖域としての静けさと美しさを併せ持っています。
        <br />
        <br /><h2 className="font-bold">■ 神話の女神が降り立った聖地</h2>
        <br />琉球の創世神「アマミキヨ」が久高島から渡り、沖縄本島で最初に上陸した場所と伝えられています。
        <br />
        <br />沖合には上陸地点を示す「ヤハラヅカサ」という石碑があり、干潮の時だけその全貌を見ることができます。
        <br />
        <br />近くには湧き水が流れる「浜川御嶽」もあり、古くから地域で大切に守られてきた祈りの場所です。
        <br />
        <br /><h2 className="font-bold">■ 手つかずの自然とアクティビティ</h2>
        <br />人工的な設備が少なく、ありのままの自然の中で静かに海を眺めることができるスポットです。
        <br />
        <br />遠浅で穏やかな海は、散策やビーチパーティ、カイトボードなどのマリンスポーツにも利用されています。
        <br />
        <br />隣接する新原ビーチとは岩場でつながっており、干潮時には歩いて行き来することも可能です。
        <br />
        <br />参考リンク
        <a href={"https://www.okinawastory.jp/spot/1008"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>百名ビーチ | 沖縄観光情報WEBサイト おきなわ物語</span>
        </a>
        <a href={"https://www.kankou-nanjo.okinawa/play/136/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>百名ビーチ | らしいね南城市</span>
        </a>
      </>
    ),
    image: "/momona.jpeg",
    position: { x: 29, y: 87 },
    category: "nature",
  },
  {
    id: "a12",
    shopId: "12", // GRINGO
    title: "シャボン玉石けん くくる糸満",
    description: "糸満市の観光・物産・文化の中心となる施設。お土産探しや地元の食事が楽しめます。",
    detail:(
      <>
        沖縄本島の南部、那覇空港から車で約20分の糸満市潮崎町に位置する「シャボン玉石けん くくる糸満」。
        <br />
        <br />糸満市の観光・文化・平和振興の拠点として2022年に開業した、地域の魅力を発信する複合施設です。
        <br />
        <br />大ホールや会議室を備えるほか、地域の歴史や伝統を伝える常設展示室があり、市民や観光客の交流の場として機能しています。
        <br />
        <br /><h2 className="font-bold">■ 糸満の歴史と海人文化を学ぶ常設展示</h2>
        <br />常設展示場では、漁業で栄えた「海人（うみんちゅ）のまち」としての海洋文化や、沖縄戦終焉の地としての歴史、戦後の復興の歩みを紹介しています。
        <br />
        <br />地域に色濃く残る旧暦文化や伝統行事についても、資料や模型を通じて体系的に学ぶことができます。
        <br />
        <br />市内各地の史跡やグスクに関する情報も発信しており、糸満観光の出発点として地域の概略を知ることができます。
        <br />
        <br /><h2 className="font-bold">■ 臨場感あふれるサバニシアター</h2>
        <br />展示エリアには、実物の伝統的木造船「サバニ」と共に、大型スクリーンを備えたシアターが設置されています。
        <br />
        <br />映像を通じて、サバニに乗り込み海原を行く海人の視点を疑似体験することができます。
        <br />
        <br />独自の発展を遂げた漁具「ミーカガン（水中メガネ）」などの展示と合わせ、先人の知恵や技術に触れることができます。
        <br />
        <br />参考リンク
        <a href={"https://www.kukuru-itomancity.jp/"} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          <span>「シャボン玉石けん くくる糸満」公式ウェブサイト</span>
        </a>
      </>
    ),
    image: "/kukuru.jpg",
    position: { x: 8, y: 89 },
    category: "spot",
  },
]

export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "オリオンビール",
    logo: "/orion-beer-logo-okinawa.png",
    website: "https://www.orionbeer.co.jp",
    description: "沖縄を代表するビールブランド",
    tier: "gold",
  },
  {
    id: "2",
    name: "沖縄県観光協会",
    logo: "/okinawa-tourism-association-logo.png",
    description: "沖縄の観光振興をサポート",
    tier: "gold",
  },
  {
    id: "3",
    name: "ローカルフードマーケット",
    logo: "/local-food-market-logo.png",
    description: "地元食材の提供パートナー",
    tier: "silver",
  },
]

// shops 配列と attractions 配列から mapPoints を自動的に生成
export const mapPoints: MapPoint[] = shops
  .map((shop) => {
    const attraction = attractions.find((attr) => attr.shopId === shop.id)
    if (!attraction) return null // attractionが見つからない場合はnullを返す

    return {
      id: `map-point-${shop.id}-${attraction.id}`,
      shop: shop,
      attraction: attraction,
      position: shop.position,
      region: shop.region,
    }
  })
  .filter((point): point is MapPoint => point !== null) as MapPoint[] // 型アサーションで型エラーを回避
