import Image from 'next/image';
import step1Image from '../../public/images/step1.png';
import step2Image from '../../public/images/step2.png';
import step3Image from '../../public/images/step3.png';
import step4Image from '../../public/images/step4.png';
import step5Image from '../../public/images/step5.png';
import signalImage from '../../public/images/signal.png';
import telegramImage from '../../public/images/telegram.png';

// ステップデータの定義(iOS用)
const steps = [
  {
    id: 1,
    title: "子どものiPhoneで「設定」を開く",
    description: "まず、お子さんのiPhoneのホーム画面から歯車マークの「設定」アプリをタップして開きます。",
    image: step1Image,
  },
  {
    id: 2,
    title: "「スクリーンタイム」をタップする",
    description: "少し下にスクロールするとある「スクリーンタイム」を選択し、「スクリーンタイムをオンにする」をタップします。",
    image: step2Image,
  },
  {
    id: 3,
    title: "「これは子どものiPhoneです」を選ぶ",
    description: "画面の指示に従って進め、「これは子どものiPhoneです」を選択します。その後、親だけが知っている4桁のパスコードを設定します。",
    image: step3Image,
  },
  {
    id: 4,
    title: "「コンテンツとプライバシーの制限」を開く",
    description: "メニュー内にある「コンテンツとプライバシーの制限」をタップし、一番上のスイッチを【ON】にします。",
    image: step4Image,
  },
  {
    id: 5,
    title: "「Appのインストール」を【許可しない】にする",
    description: "「iTunesおよびApp Storeでの購入」＞「Appのインストール」と進み、【許可しない】にチェックを入れます。これで完了です！",
    image: step5Image,
  },
];

// Android用
const androidSteps = [
  {
    id: 1,
    title: "親のスマホに「Google ファミリー リンク」アプリを入れる",
    description: "Androidの場合、親のスマホから遠隔で制限をかけます。まずはPlayストア等から公式のファミリーリンクアプリをダウンロードし、画面の指示に従ってお子さんのアカウントと連携します。",
  },
  {
    id: 2,
    title: "ファミリーリンクから「コンテンツの制限」を開く",
    description: "アプリ内でお子さんの名前を選択し、「設定」＞「コンテンツの制限」＞「Google Play」の順番にタップして進みます。",
  },
  {
    id: 3,
    title: "「承認を必要とするコンテンツ」を【すべてのコンテンツ】にする",
    description: "「承認を必要とするコンテンツ」という項目をタップし、選択肢の中から【すべてのコンテンツ】にチェックを入れます。これで、お子さんが無料アプリを入れる際にも親のスマホに通知が届き、許可制になります！",
  },
];

const warningApps = [
  {
    name: 'Signal',
    image: signalImage,
    note: 'メッセージが消える設定や、見られたくない連絡に使われやすい代表例です。',
  },
  {
    name: 'Telegram',
    image: telegramImage,
    note: '知らない相手とのやり取りや、外部のグループ参加のきっかけになりやすいアプリです。',
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-4 text-center shadow-md">
        <div className="max-w-2xl mx-auto">
          <span className="bg-amber-400 text-slate-900 font-bold text-xs px-3 py-1 rounded-full tracking-wider">
            保護者向けガイド
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold mt-3 leading-tight">
            我が子を「闇バイト」から守る<br />スマホ防犯設定ガイド
          </h1>
          <p className="text-sm md:text-base mt-2 opacity-90">
            指示役が使う「暗号化アプリ（Signal、Telegram等）」を勝手にダウンロードさせないための設定手順です。
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

        {/* iPhoneセクション */}
        <section>
          <div className="text-center mb-8">
            <span className="bg-blue-500 text-white font-bold text-xs px-3 py-1 rounded-full tracking-wider">
              iPhone専用 / 所要時間3分
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold mt-2 text-slate-900">
              iPhone（スクリーンタイム）での設定手順
            </h2>
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
                <div className="w-full max-w-[280px] mx-auto bg-slate-100 rounded-2xl overflow-hidden border-4 border-slate-300">
                  <Image
                    src={step.image}
                    alt={step.title}
                    sizes="(max-width: 640px) calc(100vw - 64px), 280px"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
          </div>
        </section>

        // メインのコンポーネント内で、iPhone版の下あたりに以下のUIを追加します
        {/* Androidセクション */}
        <section className="mt-16 border-t-2 border-dashed border-slate-300 pt-12">
          <div className="text-center mb-8">
            <span className="bg-green-500 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              Android専用 / 所要時間5分
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold mt-2 text-slate-900">
              Android（ファミリーリンク）での設定手順
            </h2>
          </div>

          <div className="space-y-12">
            {androidSteps.map((step) => (
              <div key={step.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-green-50 px-4 py-3 border-b border-slate-200 flex items-center gap-3">
                  <span className="bg-green-600 text-white font-bold w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0">
                    {step.id}
                  </span>
                  <h3 className="font-bold text-base text-slate-900">{step.title}</h3>
                </div>
                <div className="p-4 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  
                  {/* 画像募集中プレースホルダー */}
                  <div className="w-full max-w-[280px] mx-auto p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center gap-2">
                    <span className="text-2xl">📸</span>
                    <span className="text-xs font-bold text-slate-500">Android版のスクショ募集中！</span>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      手元に実機がないため、設定画面の画像を提供してくださる優しい方を募集しています。
                    </p>
                    <a 
                      href="https://x.com/rio1451231" 
                      target="_blank" 
                      className="text-[11px] text-blue-600 underline font-medium mt-1"
                    >
                      詳細・提供はXのDMまで ➡
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-rose-200 bg-rose-50 p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-600 text-lg text-white">
              !
            </div>
            <div>
              <h3 className="text-lg font-bold text-rose-950">
                もしお子さんのスマホにこのアイコンのアプリが入っていたら、今すぐ話し合ってください
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-rose-900">
                すぐに叱るのではなく、「誰と何のために使っているのか」を落ち着いて確認してください。知らない大人や、すぐ消えるやり取りに誘導されていないかを一緒に見直すことが重要です。
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {warningApps.map((app) => (
              <div key={app.name} className="rounded-2xl border border-rose-100 bg-white p-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-sm">
                    <Image
                      src={app.image}
                      alt={`${app.name}のアプリアイコン`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">{app.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{app.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs leading-relaxed text-rose-800">
            アイコンの見た目や色は端末設定、アイコン着せ替え、更新等で変わることがあります。名前でも確認してください。
          </p>
        </section>

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