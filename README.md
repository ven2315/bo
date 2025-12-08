# Cafe Serenity Landing Page

都会の喧騒を忘れる、安らぎのカフェ「Cafe Serenity」のランディングページです。

## 特徴
- **プレミアムデザイン**: 落ち着いたカラーパレットと美しいタイポグラフィ（Cormorant Garamond, Noto Sans JP）を使用。
- **ダイナミックな演出**: スクロールに応じたフェードインアニメーションや、ヒーローセクションの視差効果風デザイン。
- **レスポンシブ対応**: PCからスマートフォンまで快適に閲覧可能。

## 技術スタック
- HTML5
- CSS3 (Variables, Grid, Flexbox)
- JavaScript (Vanilla JS, Intersection Observer API)
- Vite (ビルドツール)

## セットアップと実行

1. 依存関係のインストール
   ```bash
   npm install
   ```

2. 開発サーバーの起動
   ```bash
   npm run dev
   ```
   ブラウザでローカルサーバー（通常は `http://localhost:5173/bo/`）にアクセスしてください。

## デプロイ

ビルドコマンドを実行すると、`dist` ディレクトリに静的ファイルが生成されます。
`vite.config.js` で `base: '/bo/'` が設定されているため、サブディレクトリ `/bo/` へのデプロイを想定しています。

```bash
npm run build
```

## ディレクトリ構成
- `src/`: ソースコード (CSS, JS)
- `public/`: 静的アセット (画像など)
- `index.html`: メインHTMLファイル
