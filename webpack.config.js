/**
 * Webpack configuration
 *
 * @author Codex Team
 * @copyright Khaydarov Murod
 */
'use strict';

module.exports = (env, argv) => {
  const path = require('path');
  const TerserPlugin = require('terser-webpack-plugin');
  const { LicenseWebpackPlugin } = require('license-webpack-plugin');
  const pkg = require('./package.json');

  /**
   * Environment
   *
   * @type {any}
   */
  const NODE_ENV = argv.mode || 'development';
  const VERSION = process.env.VERSION || pkg.version;

  /**
   * Plugins for bundle
   *
   * @type {webpack}
   */
  const webpack = require('webpack');

  return {
    entry: {
      editor: ['@babel/polyfill/noConflict','./src/sosie.js'], /*',*/
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'sosie.js',
      library: [ 'SoSIE' ],
      libraryTarget: 'umd',
    },

    watchOptions: {
      aggregateTimeout: 50,
    },

    /**
     * Tell webpack what directories should be searched when resolving modules.
     */
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      extensions: ['.js','ts'],
    },

    plugins: [
    
    
      /** Pass variables into modules */
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV),
        VERSION: JSON.stringify(VERSION),
      }),

      new webpack.BannerPlugin({
        banner: `SoSIE.js\n\n@version ${VERSION}\n\n@licence Apache-2.0\n@author SoSIE / sos-productions.com.   Uses Editor js codex-team <https://editorjs.io>`,
      }),

      new LicenseWebpackPlugin({
	  outputFilename: 'sosie.licenses.txt'
       })
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            }
          ],
        },
         {
          test: /\.ts$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'postcss-loader',
          ],
        },
        {
          test: /\.(svg)$/,
          use: [
            {
              loader: 'raw-loader',
            },
          ],
        },
      ],
    },

    devtool: NODE_ENV === 'development' ? 'source-map' : false,

    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
        }),
      ],
    },
  };
};
