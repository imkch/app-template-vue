const CompressionPlugin = require('compression-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/app-template-vue/dist/' : '/',
  chainWebpack: config => {
    config.plugin('SpriteLoaderPlugin').use(SpriteLoaderPlugin, [
      {
        plainSprite: true
      }
    ]);
    if (process.env.NODE_ENV === 'production') {
      config.plugin('CompressionPlugin').use(CompressionPlugin, [
        {
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        }
      ]);
    }
    config.plugin('BundleAnalyzerPlugin').use(BundleAnalyzerPlugin);
  },
  pluginOptions: {
    svgSpriteLoader: {
      dir: path.resolve(__dirname, 'src/svgs'),
      test: /\.svg$/,
      options: {
        symbolId: 'icon-[name]',
        extract: true,
        outputPath: 'img/',
        publicPath: 'img/',
        spriteFilename: 'sprite.svg'
      }
    }
  }
};
