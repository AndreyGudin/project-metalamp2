let mode='development';
const PugPlugin= require('pug-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
var assetsManifest = {};
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

console.log(mode + 'mode')

module.exports={
  mode: mode,
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'/',
    assetModuleFilename:'assets/[hash][ext][query]',
    clean: true,
  },
  entry:{
    uiForms:'./src/pages/ui-kit/ui-forms/ui-forms.pug',
    'assets/js/uiforms':'./src/pages/ui-kit/ui-forms/ui-kit.js',
    uiCards:'./src/pages/ui-kit/ui-cards/ui-cards.pug',
    'assets/js/uicards':'./src/pages/ui-kit/ui-cards/ui-cards.js',
    // footerHeader:'./src/pages/ui-kit/footer-header/footer-header.pug',
    // 'assets/js/footerheader':'./src/pages/ui-kit/footer-header/footer-header.js',
    // landingPage:'./src/pages/site/landing-page/landing-page.pug',
    // 'assets/js/landing-page':'./src/pages/site/landing-page/landing-page.js',
    // registrationPage:'./src/pages/site/registration-page/registration-page.pug',
    // 'assets/js/registration-page':'./src/pages/site/registration-page/registration-page.js',
    // roomDetailsPage:'./src/pages/site/room-details-page/room-details-page.pug',
    // 'assets/js/room-details-page':'./src/pages/site/room-details-page/room-details-page.js',
    // searchRoomPage:'./src/pages/site/search-room-page/search-room-page.pug',
    // 'assets/js/search-room-page':'./src/pages/site/search-room-page/search-room-page.js',
    // signInPage:'./src/pages/site/sign-in-page/sign-in-page.pug',
    // 'assets/js/sign-in-page':'./src/pages/site/sign-in-page/sign-in-page.js',
  },
  devServer: {
    open: true,
    watchFiles:['src/**'],
    static: {
      directory: path.resolve(__dirname, './dist'),
    }
  },
  devtool: 'source-map',
  plugins:[
    new WebpackAssetsManifest({
      customize(entry, original, manifest, asset) {
        assetsManifest[`${entry.key}`] = `${entry.value}`;
        return {
          key: `src/${entry.key}`,
          value: `dist/${entry.value}`,
        };
      }
    }),
    new PugPlugin({
      modules:[
        PugPlugin.extractCss({
          filename: '[name].[contenthash:8].css',
        }),
        {
          test: /\.(pug)$/,
          postprocess: (content, info, compilation) => {
            let str = '';
            str = JSON.stringify(assetsManifest);
            console.log(`2 ${str}`);
            return content.replace('World', 'Pug');
          }
        }
      ]
    }),
    
  ],
  module: {
    rules:[
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options:{
          method: 'render',
        }
      },
      {
        test: /\.scss$/,
        use:[
          "css-loader","sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type:'asset/resource',
        exclude: path.resolve(__dirname, './src/fonts'),
        generator: {
          filename: 'assets/img/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type:'asset/resource',
        include: path.resolve(__dirname, './src/fonts'),
        generator: {
          filename: 'assets/fonts/[hash][ext][query]'
        }
      },
    
    ]
  },
};