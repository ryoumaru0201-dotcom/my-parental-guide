import Image from 'next/image';

// ステップデータの定義
const steps = [
  {
    id: 1,
    title: "子どものiPhoneで「設定」を開く",
    description: "まず、お子さんのiPhoneのホーム画面から歯車マークの「設定」アプリをタップして開きます。",
    imageName: "step1.png", 
  },
  {
    id: 2,
    title: "「スクリーンタイム」をタップする",
    description: "少し下にスクロールするとある「スクリーンタイム」を選択し、「スクリーンタイムをオンにする」をタップします。",
    imageName: "step2.png",
  },
  {
    id: 3,
    title: "「これは子どものiPhoneです」を選ぶ",
    description: "画面の指示に従って進め、「これは子どものiPhoneです」を選択します。その後、親だけが知っている4桁のパスコードを設定します。",
    imageName: "step3.png",
  },
  {
    id: 4,
    title: "「コンテンツとプライバシーの制限」を開く",
    description: "メニュー内にある「コンテンツとプライバシーの制限」をタップし、一番上のスイッチを【ON】にします。",
    imageName: "step4.png",
  },
  {
    id: 5,
    title: "「Appのインストール」を【許可しない】にする",
    description: "「iTunesおよびApp Storeでの購入」＞「Appのインストール」と進み、【許可しない】にチェックを入れます。これで完了です！",
    imageName: "step5.png",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-4 text-center shadow-md">
        <div className="max-w-2xl mx-auto">
          <span className="bg-amber-400 text-slate-900 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            iPhone専用 / 所要時間3分
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold mt-3 leading-tight">
            我が子を「闇バイト」から守る<br />スマホ防犯設定ガイド
          </h1>
          <p className="text-sm md:text-base mt-2 opacity-90">
            指示役が使う「暗号化アプリ（Signal等）」を勝手にダウンロードさせないための設定手順です。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-xl mx-auto px-4 py-8">
        {/* 親への重要なメッセージ */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mb-8 shadow-sm">
          <h2 className="font-bold text-amber-950 flex items-center gap-2">
            ⚠️ 設定前の注意
          </h2>
          <p className="text-sm text-amber-900 mt-1 leading-relaxed">
            この設定を行うと、お子さんは<strong>新しいアプリを勝手に入れることができなくなります。</strong>
            アプリを入れたい時は、親のスマホ（またはこの画面）でパスコードを打ち込んで許可してあげる運用にしてください。
          </p>
        </div>

        {/* ステップ一覧 */}
        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              {/* ステップのタイトルバー */}
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-3">
                <span className="bg-blue-600 text-white font-bold w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0">
                  {step.id}
                </span>
                <h3 className="font-bold text-base md:text-lg text-slate-900">
                  {step.title}
                </h3>
              </div>

              {/* ステップの説明と画像 */}
              <div className="p-4 space-y-4">
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {step.description}
                </p>
                
                {/* スクリーンショット */}
                <div className="relative w-full aspect-[9/16] max-w-[280px] mx-auto bg-slate-100 rounded-2xl overflow-hidden border-4 border-slate-300">
                  <Image
                    src={`/images/${step.imageName}`}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 280px, 280px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* フッターメッセージ */}
        <div className="text-center mt-12 bg-indigo-50 border border-indigo-100 p-6 rounded-xl">
          <h3 className="font-bold text-indigo-900 text-lg">設定がおわったら</h3>
          <p className="text-sm text-indigo-700 mt-2 leading-relaxed">
            「怪しいアプリから身を守るためにこの設定にしたよ」と、お子さんとぜひ話し合ってみてください。親の目が届いていると伝えること自体が、最大の防犯になります。
          </p>
        </div>
      </main>

      <footer className="text-center py-8 text-xs text-slate-400 border-t border-slate-200 mt-12">
        <p>© 2026 子どものスマホ防犯プロジェクト</p>
      </footer>
    </div>
  );
}