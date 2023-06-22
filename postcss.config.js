module.exports = {
    plugins: [
        require('autoprefixer')({ // 自動でベンダープレフィックスを付与
            "overrideBrowserslist": [ // 対象ブラウザの設定
                "last 2 version",
                "iOS >= 8",
                "Android >= 4.1"
            ]
        })
    ]
};
