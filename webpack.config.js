const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

let plugins = [
  new HtmlWebpackPlugin({
    title: 'kyc',
    template: './example/index.html',
    publicPath: '/demo/',
    favicon: "./example/favicon.png",
  }),
];



module.exports = {
  devtool: 'source-map',
  entry: {
    // WsMessage: './src/wsMessages.js',
    // Normal: {
    //   import: './src/Environments/Normal.ts',
    //   dependOn: ['WsMessage'],
    // },
    // LowPerformance: {
    //   import: './src/Environments/LowPerformance.ts',
    //   dependOn: ['WsMessage'],
    // },
    // FileOnly: {
    //   import: './src/Environments/FileOnly.ts',
    //   dependOn: ['WsMessage'],
    // },
    KYC: {
      import: './src/KYC.ts',
      // dependOn: ['WsMessage','Normal','LowPerformance','FileOnly'],
    },
    example: {
      import: './example/index.ts',
      dependOn: ['KYC'],
    },
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "statics"),
    }
  },
  
  plugins: plugins,
  output: {
    filename: '[name].[contenthash].js',
  },
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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
