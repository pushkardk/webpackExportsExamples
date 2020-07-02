const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    treeShaking: './src/tree-shaking.js',
    dynamicImports: './src/dynamic-imports.js',
    webpackExports: './src/webpack-exports.js',
    limitations: './src/limitations.js',
    deepScopeAnalysis: './src/deep-scope-analysis.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].lazy.js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}