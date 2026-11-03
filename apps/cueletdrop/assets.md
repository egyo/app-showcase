# CueletDrop 掲載画像の記録

2026年11月3日。紹介本文は0.1.3（ビルド4）と照合。

- `assets/cueletdrop-icon.png`：採用済みAppIconの1024px PNGを256pxへ縮小。新しい図案の生成なし。
- `playback.jpg`：配布版0.1.3（4）の通常画面。YouTube IFrame API公式サンプル動画 `M7lc1UVf-VE` の1:24付近を表示。音楽や動画の同梱を示さない。
- `setup.jpg`：同版の初回設定画面。OAuth未設定で、個人のリスト名・ID・接続情報なし。
- 実アプリは認証情報と通常設定を分離した公開サンプル検証用起動。agent-desktop 1.0.2で撮影、実行中のappは/Applications/CueletDrop.app、Info.plistで0.1.3確認。
- 元PNGは2584×1924。sipsで幅1800pxのJPEG（品質88）へ縮小・圧縮。透過したウィンドウ周囲はJPEGで白背景となる。切り抜き・UI改変・映像合成・AI画像生成なし。
- 写真は操作・表示例。今回Google本人認証・私的リスト・Premiumの再検証は行っていない。
- ページ冒頭の再生区間はHTML/CSSの説明図であり、実画面とは区別。

参照：[Google公式IFrame APIのサンプル](https://developers.google.com/youtube/iframe_api_reference#Getting_Started)。動画内の表示・ロゴは各権利者に帰属する。画像は自己ホストし、この紹介サイトにYouTubeプレイヤーを埋め込まない。

## 掲載ファイル SHA-256

- `assets/cueletdrop-icon.png`：`887b80ee4eb36b6e9abcbf1872c3015fb26a3b46e92be98b1f07d9462fea5ef9`
- `apps/cueletdrop/playback.jpg`：`755f30c37c273b4949e690cb99d3c0a3143d5560fa53108216e0175ecab82ffe`
- `apps/cueletdrop/setup.jpg`：`4331f3d829c1ae8c81228decbc2ec8e093da6abd2c445cd0af1f7749f65a9070`
