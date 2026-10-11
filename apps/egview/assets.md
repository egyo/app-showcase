# 掲載画像の制作記録

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
