const path = require('path')

module.exports = {
  entry: {
    treeShaking: './src/tree-shaking.js',
    dynamicImports: './src/dynamic-imports.js',
    webpackExports: './src/webpack-exports.js',
    limitations: './src/limitations.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    chunkFilename: '[name].lazy.js'
  }
}