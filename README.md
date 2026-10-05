# egyo apps

egcamera、egtency、egweight、egsplan、QuietBlack を紹介する静的サイトです。GitHub Pages で `https://egyo.github.io/app-showcase/` に公開します。掲載アプリは開発中・非公開で、一般向けの配布は行っていません。

## 更新方法

- アプリ一覧: `index.html`
- 各アプリの本文: `apps/<アプリ名>/index.html`
- 共通デザイン: `assets/styles.css`
- X 共有リンク: `assets/site.js`

サイトは HTML、CSS、少量の JavaScript のみで動作します。egtency ページには、提供スクリーンショットをもとに生成した紹介画像と、操作説明のための実際のスクリーンショットを掲載しています。egweight ページには、採用したアプリアイコンと画像生成によるUIデザイン案2枚を掲載し、実機スクリーンショットとは区別しています。ほかのアプリの画面写真を追加する際は画像を `assets/` に保存し、該当するアプリページに掲載してください。

アプリ本体とそのソースコードはこの公開リポジトリに含めません。

## egweight の掲載画像と更新

- 紹介ページ：`apps/egweight/index.html`
- 採用アイコン：`assets/egweight-icon.png`（表示窓にegを入れたB案）
- 1ヶ月のUIデザイン案：`assets/egweight-month-design.png`
- 過去2週間のUIデザイン案：`assets/egweight-history-design.png`

2026年10月1日時点では仕様を整理した段階で、アプリのプロトタイプはこれから実装します。紹介文は予定する機能として記述しています。掲載画像は架空の測定値・日付・メモを使ったデザイン案で、実データや動作確認済みの画面は含めていません。

実機スクリーンショットが用意できたら、個人情報が含まれていないことを確認して追加します。その際は撮影日・対応ビルド・画像の説明を更新し、デザイン案の表記と実際の画面を区別してください。対応OS・配布時期・価格は確定後に本文と開発状況へ反映します。

## egsplan の掲載内容と画像

- 紹介ページ：`apps/egsplan/index.html`
- アプリアイコン：`assets/egsplan-icon.png`
- 通知条件の実機画像：`apps/egsplan/notification-conditions.png`（提供画像 `IMG_8479.PNG`）
- 対象の予定の実機画像：`apps/egsplan/matching-schedules.png`（提供画像 `IMG_8480.PNG`）

2026年10月5日時点の初期実装（0.1.0）の仕様・画面・検証状況に基づき、目的、機能、操作手順、条件の判定、通知タイミング、対象外のモードを掲載しています。2枚のスクリーンショットは提供された画像を加工せず使用し、撮影時点の予定と現在の予定を区別しています。アプリのソースコード、内部の接続情報、認証情報は公開リポジトリに含めません。

予定データの提供元は [Splatoon3.ink](https://splatoon3.ink/) です。[データ利用方針](https://github.com/misenhower/splatoon3.ink/wiki/Data-Access)へのリンクと、非公式アプリであることを紹介ページに記載しています。通知機能に必要なサーバー保存・外部通信・登録削除は、プライバシーポリシーの egsplan 節にも反映しています。

更新時は、画像がどの時点の画面か、通常の条件通知の実機検証状況、対応範囲と一般配布の状態を確認してください。

## プライバシーポリシー

- 公開ページ：[プライバシーポリシー](https://egyo.github.io/app-showcase/privacy.html)（`privacy.html`）
- トップページはフッターにリンクのみを配置し、本文は専用ページへ掲載しています。
- 共通の `assets/styles.css` を使用し、アプリ紹介ページのナビゲーション・文字組み・目次と揃えています。

2026年10月2日時点の実装を確認し、egcamera の写真・LUT・センサー、egtency の ICMP 通信とログ、egweight の HealthKit 読み取りと端末内コメント、QuietBlack の操作状態の判定を記載しています。HealthKit の値はメモリ内、コメントはバックアップ対象外の保護されたファイルという扱いを区別しています。Apple/TestFlight の診断・フィードバック、GitHub Pages、利用者による共有、お問い合わせも対象です。

2026年10月5日に egsplan を追加し、端末単位の登録、通知条件・通知先・予約のサーバー保存、Cloudflare と APNs への通信、保持期間、アプリ内の登録削除を実装と照合して記載しました。基本方針の「開発者サーバーへ送信しない」という説明は、egsplan を除く4アプリに限定しています。

配布前には、配布するビルドの実装・SDK・権限・通信先と本文の整合、問い合わせ窓口の利用可否、App Store Connect の App Privacy 回答を確認してください。iOS アプリ内からもこのポリシーへアクセスできるリンクが必要です。通信・SDK・同期・広告・課金・ログ送信などを追加した場合は、ポリシーとプライバシーマニフェスト、App Privacy 回答を併せて再点検します。将来機能を実装済みとして記載しないでください。

確認に使用する公式資料：

- [Apple App Review Guidelines 5.1](https://developer.apple.com/app-store/review/guidelines/#privacy)
- [Apple App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)
- [TestFlight & Privacy](https://www.apple.com/legal/privacy/data/en/test-flight/)
- [GitHub Pages のアクセス記録について](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

Apple がいう「収集」と、端末内の読み取り・処理は同じ意味ではありません。一律に「データ未収集」と決めず、配布版と問い合わせ等の運用に基づいて回答してください。
