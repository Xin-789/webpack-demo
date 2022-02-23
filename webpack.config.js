const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                /**
                 * 模块loader可以链式调用，loader会逆序执行，
                 * 第一个loader会将其结果传递给下一个loader，以此类推，
                 * 最后webpack将loader返回JavaScript
                 */
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
}