const path = require('path');
const webpack = require('webpack');
const FilemanagerPlugin = require('filemanager-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtensionReloader = require('webpack-extension-reloader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WextManifestWebpackPlugin = require('wext-manifest-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const viewsPath = path.join(__dirname, 'views');
const sourcePath = path.join(__dirname, 'source');
const destPath = path.join(__dirname, 'extension');
const nodeEnv = process.env.NODE_ENV || 'development';
const targetBrowser = process.env.TARGET_BROWSER;


const getExtensionFileType = (browser) => {
  if (browser === 'opera') {
    return 'crx';
  }

  if (browser === 'firefox') {
    return 'xpi';
  }

  return 'zip';
};

module.exports = {
  devtool: false, // https://github.com/webpack/webpack/issues/1194#issuecomment-560382342

  stats: {
    all: false,
    builtAt: true,
    errors: true,
    hash: true,
  },

  mode: nodeEnv,

  entry: {
    
    background: path.join(sourcePath, 'Background', 'index.ts'),
    bgServiceWorker: path.join(sourcePath, 'Background', 'index.ts')
  },

  output: {
    path: path.join(destPath, targetBrowser),
    filename: 'js/[name].bundle.js',
  },

  resolve: {
    extensions: ['.ts','.js', '.json'],
    alias: {
      'webextension-polyfill-ts': path.resolve(
        path.join(__dirname, 'node_modules', 'webextension-polyfill-ts')
      ),
    },
  },

  module: {
    rules: [
      {
        type: 'javascript/auto', // prevent webpack handling json with its own loaders,
        test: /manifest\.json$/,
        use: {
          loader: 'wext-manifest-loader',
          options: {
            usePackageJSONVersion: true, // set to false to not use package.json version for manifest
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
  },

  plugins: [
    // Plugin to not generate js bundle for manifest entry
    new WextManifestWebpackPlugin(),
    // Generate sourcemaps
    new webpack.SourceMapDevToolPlugin({filename: false}),
    new ForkTsCheckerWebpackPlugin(),
    // environmental variables
    new webpack.EnvironmentPlugin(['NODE_ENV', 'TARGET_BROWSER']),
    // // delete previous build files
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: [
    //     path.join(process.cwd(), `extension/${targetBrowser}`),
    //     path.join(
    //       process.cwd(),
    //       `extension/${targetBrowser}.${getExtensionFileType(targetBrowser)}`
    //     ),
    //   ],
    //   cleanStaleWebpackAssets: false,
    //   verbose: true,
    // })
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', {discardComments: {removeAll: true}}],
        },
      })
    ],
  },
};