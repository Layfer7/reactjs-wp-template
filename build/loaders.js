const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function loaders(isDev) {
    return ([
        {
          test: /\.(?:jsx|js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }],
                "@babel/preset-react",
              ],
              plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
              cacheDirectory: true,
            }
          }
        },
        {
          test: /\.css$/i,
          use: [
            isDev ? "style-loader": MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ])
}

module.exports = loaders;