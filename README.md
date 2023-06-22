# webpack5対応フォーマット

## やること
webpack.configの編集
→proxy欄を編集

ターミナル
```
$ npm(yarn) install
```

`npm run watch`または`yarn watch`でコンパイル、ブラウザシンクかかるよ

### プラグイン
- mini-css-extract-plugin:jsからcssを分離
- webpack-fix-style-only-entries:css分離した後、余計なjsを削除する
- browser-sync-webpack-plugin:ブラウザシンクを組み込む
