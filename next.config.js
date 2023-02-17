/** @type {import('next').NextConfig} */
const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// var JsConfigPathsPlugin = require("next/dist/build/webpack/plugins/jsconfig-paths-plugin").JsConfigPathsPlugin;
// const srcDir = path.join(__dirname);

const iconLoader = {
  test: /\.ttf$/,
  use: {
    loader: 'url-loader',
    options: {
      useRelativePath: false,
      name: '[sha512:hash:base62:5].[ext]',
      limit: 4096,
      outputPath: 'font/',
      publicPath: '/',
    },
  },
  include: [
    //path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'node_modules/@voltmoney/component'),
  ],
};

const imgLoader = {
  test: /\.(gif|jpe?g|png)$/,
  use: {
    loader: 'url-loader',
    options: {
      useRelativePath: false,
      name: '[sha512:hash:base62:5].[ext]',
      limit: 4096,
      outputPath: 'img/',
      publicPath: '/',
    },
  },
};

const svgLoader = {
  test: /\.(svg)$/,
  use: {
    loader: 'file-loader',
    options: {
      useRelativePath: false,
      name: '[sha512:hash:base62:5].[ext]',
      outputPath: 'img/',
      publicPath: '/',
    },
  },
};

const webViewLoader = {
  test: /postMock.html$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

const nextConfig = {
  experimental: {
    appDir: false,
  },
  webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module["rules"].push(iconLoader);
    config.module["rules"].push(imgLoader);
    config.module["rules"].push(svgLoader);
    config.module["rules"].push(webViewLoader);
    config.module["rules"].push({
      test: /\.(tsx|ts|jsx|js|mjs)$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    });
    config.module["rules"].push({
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    });
    config.module["rules"].push({
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      exclude: /node_modules/,
      use: ['file-loader?name=[name].[ext]'],
    });
    config.module["rules"].push({
      // Many react-native libraries do not compile their ES6 JS.
      test: /\.(tsx|ts|jsx|js|mjs)$/,
          include: /node_modules\/react-native-/,
          exclude: /node_modules\/react-native-web\//,
          loader: 'babel-loader',
    });
    config.module["rules"].push({
      test: [/\.js?$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
      enforce: 'pre',
      exclude: /node_modules/,
      use: ['source-map-loader'],
    });
    config.resolve = {
      ...config.resolve,
      extensions: [
        '.web.tsx',
        '.web.ts',
        '.tsx',
        '.ts',
        '.web.jsx',
        '.web.js',
        '.jsx',
        '.js',
      ],
      alias: {
        ...config.resolve.alias,
         ...Object.assign({
        'react-native$': 'react-native-web',
        'react-native-svg': 'react-native-svg-web',
        'lottie-react-native': 'react-native-web-lottie',
        'react-native-linear-gradient': 'react-native-web-linear-gradient',
        'react-native-fast-image': 'react-native-web-fast-image',
        '@react-native-clipboard/clipboard': 'react-native-web-clipboard',
        '@react-native-google-signin/google-signin': 'react-google-login',
        'react-navigation': path.resolve(__dirname, './react-navigation.web.js'),
        'react-native-web/dist/exports/DeviceInfo': path.resolve(
            './react-native-web-device-info.web.js',
        ),
        'react-native-webview': 'react-native-web-webview',
        }),
    }}
    return config
  },
}

module.exports = nextConfig
