# webpack5対応フォーマット

## やること
webpack.configの編集
→proxy欄を編集

ターミナル
```
$ yarn install
```

- `yarn build`
cssは非圧縮形式、ソースマップはなし

- `yarn prod`
cssは圧縮形式

- `yarn dev`
cssは非圧形式、ソースマップあり

- `yarn watch`
watchでブラウザ起動

### プラグイン
- browser-sync-webpack-plugin:ブラウザシンクを組み込む
- copy-webpack-plugin:画像圧縮時に画像のコピーが必要になる
- mini-css-extract-plugin:jsからcssを分離
- webpack-fix-style-only-entries:css分離した後、余計なjsを削除する
