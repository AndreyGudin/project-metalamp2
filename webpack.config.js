let mode='development';
const PugPlugin= require('pug-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

console.log(mode + 'mode')

module.exports={
  mode: mode,
  output:{
    filename:'[name].[contenthash].js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'/',
    assetModuleFilename:'assets/[hash][ext][query]',
    clean: true,
  },
  entry:{
    uiforms:'./src/pages/ui-kit/ui-forms/ui-forms.pug',
    uiformsScripts:'./src/pages/ui-kit/ui-forms/ui-kit.js'
  },
  devtool: 'source-map',
  plugins:[
    new PugPlugin({
      modules:[
        PugPlugin.extractCss(),
      ]
    }),
  ],
  module: {
    rules:[
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.scss$/,
        type:'asset/resource',
        generator:{
          filename:'assets/css/[name].[hash:8].css'
        },
        use:[
          "css-loader",
          "resolve-url-loader",
          {
          loader:"sass-loader",
          options:{
            sourceMap: true,
          },
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type:'asset/resource',
        exclude: path.resolve(__dirname, './src/fonts'),
        generator: {
          filename: '/assets/img/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type:'asset/resource',
        include: path.resolve(__dirname, './src/fonts'),
        generator: {
          filename: '/assets/fonts/[hash][ext][query]'
        }
      }
    ]
  },
};