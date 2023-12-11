const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");


function plugins(isDev) {
    return ([
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: "./public/index.html"}),
        new MiniCssExtractPlugin({filename: "css/[name].css"}),
        isDev && new ReactRefreshWebpackPlugin()
      ])
}

module.exports = plugins;