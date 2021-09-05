const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [
  new HtmlWebpackPlugin({
    title: 'kyc',
    // Load a custom template (lodash by default)
    template: './example/index.html',
    favicon: "./example/favicon.png",
  }),
  new BundleAnalyzerPlugin(),
];



module.exports = {
  entry: process.env.NODE_ENV == 'development' ? './example/index.ts' : './src/KYC.ts',
  devServer: {
    contentBase: './dist',
  },
  plugins: process.env.NODE_ENV == 'development' ? plugins : [],

  module: {
    rules: [
      {
        test: /\.wasm$/i,
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
