import {WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin} from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BuildOptions} from './types/config';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export const buildPlugins = (options: BuildOptions): Array<WebpackPluginInstance> => {
  const {paths, isDev} = options;

  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
};
