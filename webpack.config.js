const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

console.log(envKeys)

module.exports = smp.wrap({
  entry: ["./src/index"],
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  watch: true,
  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
});
