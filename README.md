# egyo apps

egcamera、eglut、egtency、egweight、egsplan、egview、egpamph、QuietBlack、StartMyMac を紹介する静的サイトです。GitHub Pages で `https://egyo.github.io/app-showcase/` に公開します。掲載アプリは開発中・非公開で、一般向けの配布は行っていません。

## 更新方法

- アプリ一覧: `index.html`
- 各アプリの本文: `apps/<アプリ名>/index.html`
- 共通デザイン: `assets/styles.css`
- X 共有リンク: `assets/site.js`

サイトは HTML、CSS、少量の JavaScript のみで動作します。egtency ページには、提供スクリーンショットをもとに生成した紹介画像と、操作説明のための実際のスクリーンショットを掲載しています。egweight ページには、採用したアプリアイコンと画像生成によるUIデザイン案2枚を掲載し、実機スクリーンショットとは区別しています。ほかのアプリの画面写真を追加する際は画像を `assets/` に保存し、該当するアプリページに掲載してください。

アプリ本体とそのソースコードはこの公開リポジトリに含めません。

## egcamera の掲載内容と更新

- 紹介ページ：`apps/egcamera/index.html`
- 画面写真：`apps/egcamera/camera-portrait.png`（IMG_0097.PNG）、`lut-settings.png`（IMG_9823.PNG）、`camera-landscape.jpeg`（IMG_9866.jpg）。2026年10月12日提供の現行ビルドの実画面
- 比較作例：`apps/egcamera/sample-*.jpeg`、2026年9月30日提供の旧版資料
- トップ画像：`apps/egcamera/egcamera-showcase.png`。10月12日提供のIMG_0091.jpg／IMG_9535.PNGを使い、以前の暗い背景・横画面＋縦画面の構成を継承したAI合成。指示・出典は`egcamera-showcase-prompt.txt`
- 比較操作：`apps/egcamera/comparison.js`

2026年10月12日に処理版2026-10-12.1の実装・現行仕様と照合しました。同名／バイト列が同一のLUTは追加せず既存項目を先頭へ移すこと、資源待ちが連続3秒で保留表示になり解除判定時に回転へ戻ること、権限応答待ちとワーカー停止時の表示の違いを同期しました。RAW×LUTの保存構成、HEICのHDR／SDR、5画角と接写、最長10秒のタップAFに加え、Sony S-Log3 / S-Gamut3.Cine、LUT入力の解析・情報ボタンでの修正、最大輝度と復元、レンズフェード、即時シャッター、保存保留表示と追加撮影、復帰対策を同期しています。アプリ本体・処理版・配布番号はこの文書更新では変更していません。

- 操作説明図：`apps/egcamera/camera-controls-legend.png`。2026年10月11日提供の2枚の画像をもとに built-in imagegen で作成。1〜10の番号と隣の説明は同じ対応にする。実機スクリーンショット・新しい実機検証の証拠とは扱わない。
- 画像生成指示・出典：`apps/egcamera/camera-controls-legend-prompt.txt`。元画像自体は再配布しない。
- ④「マニュアルフォーカスポイント」はタップで指定するAF位置。手動距離調整と誤解しないよう説明を添える。
- ⑥「保存インジケーター」は進行／保留の状態表示。負荷・温度・省電力・失敗・権限待ちを説明し、シャッターが有効なら追加撮影可能とする。手動停止ボタンや無制限連写とは表現しない。
- カメラコントロールと音量調節ボタンもシャッターが有効な間、押し始めに撮影を受け付ける。
- ビルド・Mac自動検証の既存記録、以前の版への利用者報告、今回未実施の実機検証を区別する。実画面は2026年10月12日提供の3枚に更新。比較作例は2026年9月30日提供のまま保持する。

LUT サンプルはFUJIFILM→SONY（Y2氏のDreamy Night）→ARRI→AUXOUTの順。Sony入力は対応済みだが、Dreamy Nightには入力情報がなく手動指定が必要。以前のパーサー確認と実機画質未検証を区別し、LUT本体は再配布しません。外部配布ページの案内は2026年10月9日の確認記録を保持し、今回の再確認として日付を更新していません。プライバシー欄にも端末内のLUT入力設定・解析結果の保存を追記しました。

次回も実装・入力・保存・操作・公開配布と個別の実機結果を照合してください。画像を更新するときは撮影／提供日、実画面か説明図かを明記します。

## StartMyMac の掲載内容とアイコン

- 紹介ページ：`apps/startmymac/index.html`
- 紹介用アイコン：`assets/startmymac-icon.svg`
- 通知設定の実機画像：`apps/startmymac/notification-settings.png`
- 通知設定の表示調整：`apps/startmymac/notifications.css`
- プライバシーの説明：`privacy.html#startmymac`

2026年10月7日時点の1.3の README と設定・起動時・終了時・接続処理を確認し、目的、機能、起動時の8段階と終了時の7段階の順序、接続先なしでの起動、初回設定、権限、接続失敗時の後続処理省略、タイムアウト・中止、認証情報とログの扱いを掲載しています。終了時は電源オフではなくディスプレイスリープで、通知は開始時のみです。ログは直近1回分を最大500行保持し、次の実行やアプリ終了で失われます。1.3はアクセス権のある利用者向けに Private リポジトリの Releases で配布され、Developer ID署名・Apple公証と自動テスト138項目の記録があります。実機での終了処理の未検証範囲も明記しています。アプリの一般配布は行っていません。公開本文には実環境のホスト名・ユーザー名・接続パスや認証情報を含めず、接続先は説明用の例に置き換えています。

アイコンは画面・起動・ネットワーク接続をモチーフにしたオリジナルの SVG です。Finder の画像や Apple のロゴは使用していません。検証版のアプリアイコンとは区別し、紹介サイト内で使用します。StartMyMac 本体のアイコンはこの更新には含まれません。通知設定の実機画像は、2026年10月6日に提供されたスクリーンショットを加工せず掲載しています。画面内の検証版アイコンと紹介用アイコンを区別しています。

通知設定はデスクトップ・持続的・音なしを基本とする推奨値と理由を掲載しています。「通知を要約」は画像ではオンですが、日時と完了・エラー件数を元の文面で読めるようオフを推奨し、画像との差を明記しています。項目の説明は [Apple の通知設定ガイド](https://support.apple.com/ja-jp/guide/mac-help/mh40583/mac)を参照しています。

更新時は、待機時間の初期値と保存済み設定の移行、解除対象の範囲、権限、配布状態、検証範囲を確認してください。接続先・認証情報・ログの扱いが変わる場合は、紹介ページとプライバシーポリシーの両方を更新します。

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
- ホーム画面の通知例：`apps/egsplan/notification-banner.png`
- ロック画面の通知例：`apps/egsplan/notification-lock-screen.png`

2026年10月7日に初期実装（0.1.0）のソース・仕様・既存の検証記録と照合し、予定の通常取得を9:10・21:10 JSTの1日2回へ修正しました。目的、機能、操作手順、条件の判定、通知タイミング、対象外のモードを掲載しています。4枚の実機画像は2026年10月5日に提供された画像を加工せず保存し、通知例2枚はCSSで通知部分を切り出して表示します。画像を開くと全体を確認できます。撮影時点の予定と現在の予定を区別しています。アプリのソースコード、内部の接続情報、認証情報は公開リポジトリに含めません。

通常の1時間前通知は提供画像で受信表示を確認できます。5分前・まとめ通知、通知OFF・登録削除、再起動後の復元、Release / Productionでの受信は検証継続中です。「次の通知」は再計算した今後の時刻の先頭12件で、送信履歴ではありません。起動・予定更新時の自動登録と、登録削除後の再登録の扱いを紹介ページとプライバシーポリシーに反映しています。

予定データの提供元は [Splatoon3.ink](https://splatoon3.ink/) です。[データ利用方針](https://github.com/misenhower/splatoon3.ink/wiki/Data-Access)へのリンクと、非公式アプリであることを紹介ページに記載しています。通知機能に必要なサーバー保存・外部通信・登録削除は、プライバシーポリシーの egsplan 節にも反映しています。

更新時は、画像がどの時点の画面か、各通知タイミングの実機検証状況、通常取得時刻、登録・削除の動作、対応範囲と一般配布の状態を確認してください。

## プライバシーポリシー

- 公開ページ：[プライバシーポリシー](https://egyo.github.io/app-showcase/privacy.html)（`privacy.html`）
- トップページはフッターにリンクのみを配置し、本文は専用ページへ掲載しています。
- 共通の `assets/styles.css` を使用し、アプリ紹介ページのナビゲーション・文字組み・目次と揃えています。

2026年10月2日時点の実装を確認し、egcamera の写真・LUT・センサー、egtency の ICMP 通信とログ、egweight の HealthKit 読み取りと端末内コメント、QuietBlack の操作状態の判定を記載しています。HealthKit の値はメモリ内、コメントはバックアップ対象外の保護されたファイルという扱いを区別しています。Apple/TestFlight の診断・フィードバック、GitHub Pages、利用者による共有、お問い合わせも対象です。

2026年10月5日に egsplan を追加し、端末単位の登録、通知条件・通知先・予約のサーバー保存、Cloudflare と APNs への通信、保持期間、アプリ内の登録削除を実装と照合して記載しました。基本方針の「開発者サーバーへ送信しない」という説明は、egsplan を除く4アプリに限定しています。

2026年10月7日に egsplan の通知OFF時にも行う自動登録、登録削除時の端末内データ、削除後の起動・予定更新による再登録を追記しました。現在の基本方針は、StartMyMac を含む egsplan 以外の5アプリが開発者サーバーへ利用情報を自動送信しないことを説明しています。

配布前には、配布するビルドの実装・SDK・権限・通信先と本文の整合、問い合わせ窓口の利用可否、App Store Connect の App Privacy 回答を確認してください。iOS アプリ内からもこのポリシーへアクセスできるリンクが必要です。通信・SDK・同期・広告・課金・ログ送信などを追加した場合は、ポリシーとプライバシーマニフェスト、App Privacy 回答を併せて再点検します。将来機能を実装済みとして記載しないでください。

確認に使用する公式資料：

- [Apple App Review Guidelines 5.1](https://developer.apple.com/app-store/review/guidelines/#privacy)
- [Apple App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)
- [TestFlight & Privacy](https://www.apple.com/legal/privacy/data/en/test-flight/)
- [GitHub Pages のアクセス記録について](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

Apple がいう「収集」と、端末内の読み取り・処理は同じ意味ではありません。一律に「データ未収集」と決めず、配布版と問い合わせ等の運用に基づいて回答してください。


## egview の掲載内容と更新

- 紹介ページ：`apps/egview/index.html`、個別CSS：`apps/egview/egview.css`
- アイコン：`assets/egview-icon.png`
- 現行の画面例：`apps/egview/duo-outer-sample.png`、`duo-inner-sample.png`
- 素材の由来と生成プロンプト：`apps/egview/assets.md`
- 同期対象：`privacy.html#egview`、一覧カード`index.html`
- 公開URL：https://egyo.github.io/app-showcase/apps/egview/

2026-10-16、iOS 0.1.27 (28)／仕様v0.33と照合。旧0.1.10の画像限定・動画非表示・設定からURL確認という説明を更新し、Duo単一／デュアル、無音動画、UI非表示、写真保存と写真権限、スライドショー・時計、通常10／省エネ3投稿、通信警告、自分投稿除外を同期した。200MBは通信量でなく一時キャッシュの容量、96MBは総メモリ上限ではない。Duoの共通バーは右、触れた面のダブルタップ・保存はその面。通常iPhoneの先頭再生とDuoの現在位置再生を区別する。

本人の動作報告、既存の559項目・3ビルド、今回提供のSimulator画面と、未確認の長時間性能・実機個別条件を区別する。未配布とiPadOS／macOS未実装は維持する。

今回の画像は10月16日提供のiPhone Duo Simulator画面を参考に、写真全体とブログ名をbuilt-in imagegenで差し替えたもの。CSSの独自の模式枠へ収め、アウター縦／インナー横・Simulator由来・AI再構成によるUI細部差を明示する。Apple公式デバイス素材ではなく、内側に常設カメラ穴を描かない。原画像・第三者写真・元ブログ名・Privateソース・資格情報を公開しない。旧`viewer-sample.png`は10月12日の履歴素材として保持するが、現行ページでは参照しない。

更新時は機能・操作・画像・プライバシー・日付を合わせ、Chromeで広い画面と狭い画面の表示を確認する。画面提供日からアプリのビルド番号や全条件合格を推測しない。

## egpamph の掲載内容と画像

- 紹介ページ：`apps/egpamph/index.html`、個別CSS：`apps/egpamph/egpamph.css`
- アプリアイコン：`assets/egpamph-icon.png`。プロトタイプに採用済みのアイコンを256pxに縮小。
- 提供画面：`apps/egpamph/start-portrait.png`（IMG_0034.PNG）、`page-list-portrait.jpg`（IMG_0033.PNG）、`reader-dual-landscape.jpg`（IMG_0035.jpg）。2026年10月16日提供。
- 一覧：`index.html#ipados`。iPad専用のためiPadOS欄を新設。プライバシー：`privacy.html#egpamph`。

2026年10月16日、プロトタイプ0.1.5・仕様v1.3の実装と照合し、目的、単独／デュアル表示、1ページずつの送り、拡大と2本指パン、一覧、履歴10件、UI表示切替、端タップ、Webリンク・URL・QR認識を紹介しました。iPadOS 27.0以降・iPad専用、開発中・非公開・一般未配布を明記しています。公開時期・価格は未定。アプリ本体やソースコード、私有リポジトリの仕様全文は含めません。

開始画面は提供PNGをそのまま収録。他2枚は紙面とUIを変更せず、サイトの読込量を抑えるためそれぞれ長辺1800px／2000pxのJPEGへ縮小・再圧縮し、付随メタデータを除去しました。画像生成・内容の合成や切り抜きは行っていません。写真内の冊子はPDF閲覧例で、アプリ同梱物ではありません。撮影ビルド番号は未確認のため0.1.5の実画面とは断定しません。

閲覧専用、パスワード入力が必要なPDF非対応、Web以外のリンク非対応、クラウド取得には通信が必要なことを説明。端末内の一時コピー、履歴と位置の分離、閲覧記録のリセットと元PDFの管理、外部リンクへのアクセスをプライバシー欄と同期しました。重いPDFの性能、File Provider経路、認識精度・ブラウザ遷移は継続検証として扱います。更新時は機能・操作・画像の提供日と撮影版・対応OS・配布状態・プライバシーを照合してください。


## eglut の掲載内容と画像

- 紹介ページ：`apps/eglut/index.html`、個別CSS：`apps/eglut/eglut.css`
- アプリアイコン：`assets/eglut-icon.png`。採用アイコンを256pxに縮小。
- 一覧：`index.html#ios`、データの扱い：`privacy.html#eglut`。
- 2026年10月17日、プロトタイプ0.1.6（7）・現行仕様v0.13と照合。RAW写真から色をつくってDisplay P3の3D LUTへ出力する目的、11基本調整、5スタイル、3比較枠、長押し比較、操作と自動保存を紹介。アプリ本体・ソースコードは非公開、一般未配布、公開時期・価格未定。
- 実機画像4枚は同日提供。`start-portrait.png`（IMG_0891.PNG）、`style-landscape.jpg`（IMG_0892.jpg）、`export-portrait.png`（IMG_0895.PNG）は元ファイルをそのまま保存。`edit-portrait.jpg`（IMG_0894.PNG）は長辺1800pxへ縮小しJPEG圧縮。色プロファイルを維持し、UI・写真内容は変更していない。画像生成は使用していない。撮影時ビルド番号は未確認。
- 露出はプレビュー・比較枠に保持するが、.cubeと保存最終プレビューは0.0 EV。Display P3→Display P3、SDR／sRGB伝達関数／full range、33³互換初期選択・65³標準を明記。sRGB・Logへ指定し直して利用しない。
- egcameraのP3対応版を主用途として案内するが、共有から実際の読み込みまでの実機受入は未確認。回転ロック連動、大きなRAWの性能、iCloud／プロバイダーごとの動作、AI品質も継続確認中。
- Privateリポジトリへのリンク、ソースコード、内部仕様文書全文は公開しない。更新時は機能・操作・色契約・データの扱い・画像提供日を合わせる。
