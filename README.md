# egyo apps

egcamera、egtency、egweight、QuietBlack を紹介する静的サイトです。GitHub Pages で `https://egyo.github.io/app-showcase/` に公開します。

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
