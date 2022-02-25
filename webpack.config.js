const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Caching",
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendors",
    //       chunks: "all",
    //     },
    //   },
    // },
    runtimeChunk: 'single',
  },
};

// module.exports = {
//   mode: "development",
//   entry: {
//     index: "./src/index.js",
//     // another: './src/another-module.js',
//   },
//   devtool: "inline-source-map",
//   // devServer: {
//   //     static: './dist',
//   // },
//   plugins: [new HtmlWebpackPlugin({ title: "代码分离" })],
//   output: {
//     // filename: 'bundle.js',
//     // 当资源内容发生变化时，[contenthash] 也会发生变化
//     filename: "[name].[contenthash].js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//     // publicPath: '/',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         /**
//          * 模块loader可以链式调用，loader会逆序执行，
//          * 第一个loader会将其结果传递给下一个loader，以此类推，
//          * 最后webpack将loader返回JavaScript
//          */
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: "asset/resource",
//       },
//     ],
//   },
//   optimization: {
//     // splitChunks: {
//     //   cacheGroups: {
//     //     vendor: {
//     //       test: /[\\/]node_modules[\\/]/,
//     //       name: "vendors",
//     //       chunks: "all",
//     //     },
//     //   },
//     // },
//     runtimeChunk: 'single',
//   },
//   // optimization: {
//   //     splitChunks: {
//   //        chunks: 'all',
//   //    }
//   // }
// };
