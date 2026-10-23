# 掲載画像の制作記録

## 掲載中：iPhone Duoの画面例（2026-10-16）

2026-10-23追記：紹介文は0.1.42 (43)／仕様v0.48へ同期したが、掲載画像は10月16日提供の画面を参考にしたまま保持する。後から追加したサムネイルバーは画像に含まれず、現行UIの全機能を再現した画像とは扱わない。

| 掲載ファイル | 寸法 | 撮影元の画面 |
| --- | --- | --- |
| `duo-outer-sample.png` | 1040×1513 | 本人提供のiPhone Duo Simulator・アウター縦（10月16日19:58の画像） |
| `duo-inner-sample.png` | 1494×1052 | 本人提供のiPhone Duo Simulator・インナー横デュアル（同日19:58の画像） |

制作はbuilt-in imagegenの画像編集。アウターは夕日の草原と山並み、インナーは青い山の湖と木漏れ日の森へ、写真全領域を新しく生成して置き換えた。ブログ名は架空の`sample`。UI位置と操作の種類は提供画像を参照し、細部はAI再構成で差があり得る。撮影元のビルド番号は未確認で、画像提供を新しい実機試験・性能測定の証拠にしない。

ページのCSSで、閉じたアウターと開いたインナーの模式枠を作成。画像比率を維持し、アウター右上のカメラ、閉じた端末の二重の縁、開いた端末中央の折り位置を控えめに描く。インナーの非使用時カメラは描かない。[Appleの指定ガイド](https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo)をChromeで確認したが、公式デバイス素材の転載や正確な製品寸法の再現ではない。

キャプションにアウター／インナー、iPhone Duo Simulator、提供日を併記する。写真差し替え・UI再構成・模式枠である旨を近くに記載する。ユーザー提供の原画像・第三者写真・元ブログ名はPublicに追加しない。以下は実行した生成指示で、原画像は公開しない。

### アウターの生成指示

```text
Use case: precise-object-edit. Asset type: publication screenshot for egview, outer display of iPhone Duo in portrait. Edit target: attached simulator screenshot. Replace the entire underlying third-party sunset-building photograph with a completely new original photorealistic landscape: a quiet alpine meadow, slender grasses, distant blue ridges and luminous late-afternoon sky, subtle warm sunlight. No houses, no recognisable locations, no people, no logos. Keep exact screenshot aspect ratio, full-screen black-backed aspect-fit image presentation and all four white UI glyphs at their identical positions on the right: play, reblog arrows, outline heart, gear inside translucent gray circles. Keep original top and bottom black margins and the source label position. Replace the source name with 'sample' and retain '· 元投稿 ↗' verbatim. Preserve legible Japanese UI. Do not add a device frame, camera, caption or extra controls. This must look like the same real app UI with only its photograph and source name replaced.
```

### インナーの生成指示

```text
Use case: precise-object-edit. Asset type: publication screenshot for egview inner display of iPhone Duo fully open in landscape, dual photo mode. Edit target: attached simulator screenshot. Replace BOTH underlying third-party photos completely with original new photorealistic landscapes: LEFT: tranquil blue alpine lake, distant rugged mountain ridges, a few subtle reed silhouettes, clear dawn light; RIGHT: sunlit woodland path through slender birch trees and fern undergrowth with dappled light, different composition from reference. No people, houses, brands or recognizable locations. Keep screenshot landscape aspect ratio and exact two-pane split, narrow black image-fit margins, top-right-panel page indicator '‹ ● ● 1 / 2 ›', the four vertically arranged circular controls at the far right (play triangle, reblog arrows, outline heart, gear), bottom-right single/dual display toggle, and BOTH source labels in the same positions. Replace source names with 'sample' and retain '· 元投稿 ↗' verbatim. Keep UI precise and Japanese legible. No device frame, camera, captions or extra controls. The app UI must stay faithful to the real screenshot; only replace photo content and source name.
```

## 旧掲載素材：通常iPhone（2026-10-12）

以下は旧`viewer-sample.png`の制作履歴。ファイルは保持するが、現行の紹介ページには表示しない。下部の大きな出典バー等は当時の表示であり、0.1.23以降の小ラベルとは区別する。

更新：2026-10-12。`viewer-sample.png`（851×1848）は、ユーザー提供のegview実機スクリーンショットをもとに、imagegenの組み込み編集ツールで作成した掲載用画面例。

元の第三者写真は人物・背景を含む全領域を、オリジナルの山と湖の生成風景へ差し替えた。投稿者名も`egview-sample`へ変更した。Photoset枚数・案内矢印・元投稿リンク・4操作バーを参考にしたが、AIによる再現の細部は実UIと異なり得る。画面キャプションで差し替えと再現を明記する。無加工の実機スクリーンショット、実投稿の取得例、実在するブログの掲載許諾を示すものではない。

原画像・第三者の写真・元の投稿者名はこのリポジトリに含めない。再生成時もそれらを公開しない。写真をさらに差し替える場合は、独自に用意した素材か生成素材を使い、UIの位置・機能・キャプションを照合する。

## 最初の編集プロンプト（元投稿者名は公開用に匿名化）

```text
Use case: precise-object-edit. Asset type: public egview app introduction screenshot. Input image is an edit target, an actual iPhone screenshot. Replace the ENTIRE photographed content area (including person, pool tiles and all original photographic pixels) with an original, photorealistic peaceful landscape of a turquoise alpine lake, mountain peaks and a pine shore at sunrise. No people, no copyrighted characters, no logo, no watermark. Retain the exact screenshot proportions, black top and bottom spaces, top Photoset dots and '2 / 2' pill, faint left/right chevrons, source bar, and four bottom icons/labels in their original locations, appearance and sizes. Replace ONLY the original blog name in the source bar with 'egview-sample'; keep '元投稿 ↗', '前の投稿', 'リブログ', 'ライク', '設定' text exact. The landscape must extend under the existing source bar up to the original bottom edge of the content. Preserve UI geometry exactly. Entire original third-party photograph must be removed. Do not add other UI or text.
```

## 修正プロンプト

```text
Remove the unwanted leading apostrophe before egview-sample. The name must read exactly egview-sample with no punctuation. Preserve landscape, all UI labels, icons, geometry and screenshot proportions.
```
