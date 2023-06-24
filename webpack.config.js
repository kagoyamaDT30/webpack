const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: {
        'index': path.resolve(__dirname, "./assets/js/index.js"),
        'style.css': path.resolve(__dirname, './assets/scss/style.scss')
    },
    mode: 'development', // buildコマンド時のコンパイルモード
    // devtool: 'source-map', // sourcemap出す
    watchOptions: {
        ignored: ['/node_modules/'],
    },
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名(省略可能)
        path: path.resolve(__dirname, 'dist'),
        // 出力ファイル名
        filename: 'js/[name].js'
    },
    module : {
        rules: [
            // sassのコンパイル設定
            {
                test: /\.(sa|sc|c)ss$/, // 対象にするファイルを指定
                use: [
                    // 下から順に実行
                    MiniCssExtractPlugin.loader, // JSとCSSを別々に出力する
                    'css-loader',
                    'postcss-loader', // オプションはpostcss.config.jsで指定
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'localhost:8888/webpack',
            notify: false,
            // リロード対象
            files: [
                './index.php',
                './hoge.php',
                './components/**'
            ]
        }),
        // css分離時に発生するjsを削除
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name]'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./assets/images"),
                    to: path.resolve(__dirname, "./dist/images"),
                }
            ]
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            plugins: [
                ImageminMozjpeg({
                    quality: 85,
                    progressive: true,
                }),
            ],
            pngquant: {
                quality: '70-85',
            }
        })
    ]
};
