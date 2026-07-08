# 📝 Todo App (TypeScript)

シンプルで直感的な Todo 管理 Web アプリです！TypeScript で型安全に実装しています。

🔗 デモ: https://todo-app-type-script-chi.vercel.app/

## ✨ 機能

- 入力欄に書いてボタンひとつで Todo を追加
- 空のまま追加しようとすると警告（入力バリデーション）
- Todo をクリックで完了 / 未完了を切り替え（取り消し線で表示）
- 各 Todo を個別に削除
- localStorage に自動保存（リロードしてもデータが残る）
- `key` にインデックスではなく一意の ID（`Date.now()`）を使用

## 🛠 技術スタック

| 項目 | 内容 |
| --- | --- |
| フレームワーク | React |
| 言語 | TypeScript |
| ビルドツール | Vite |
| スタイリング | CSS |
| 状態管理 | useState / useEffect |
| デプロイ | Vercel |

## 🚀 ローカルで動かす

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
npm install
npm run dev
```

ブラウザで http://localhost:5173 を開く。

## 📁 ディレクトリ構成

```
todo-app/
├── public
├── src
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 💡 実装のポイント

- `type Todo` で「id・text・done」の形を型定義し、扱うデータの形を保証
- `useState` で入力値（input）と Todo 配列（todos）を管理
- `useEffect` で todos の変更を検知し、localStorage へ自動保存
- 起動時に localStorage から読み込み、初期値として復元
- 完了状態の切り替えは `map` で対象の `done` を反転（スプレッド構文で不変更新）
- 削除は `filter` で対象 id 以外を残して実装
- 削除ボタンは `stopPropagation` で、親要素のクリック（完了切り替え）と分離

## 🔧 今後の改善案

- 編集機能
- 完了 / 未完了でのフィルタリング
- 残りタスク件数の表示
- Enter キーでの追加
