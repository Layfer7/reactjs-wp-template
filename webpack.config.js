const path = require("path");
const devServer = require("./build/devServer");
const plugins = require("./build/plugins");
const loaders = require("./build/loaders");
const resolve = require("./build/resolve");


module.exports = env => {
    const isDev = env.mode !== "production";
    return ({
    entry: './src/index.jsx',
    mode: isDev ? "development": "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'images/[name].[ext]',
        clean: true,
    },
    resolve: resolve(env),
    module: {
        rules: loaders(isDev)
    },
    plugins: plugins(isDev),
    devtool: isDev ? 'eval-source-map': 'source-map',
    devServer: isDev ? devServer(): undefined,
    })
};