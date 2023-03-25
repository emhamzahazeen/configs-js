const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (srcDirectory, distDirectory) => {
  return new HtmlWebpackPlugin({
    filename: path.join(distDirectory, 'index.html'),
    template: path.join(srcDirectory, 'index.pug')
  });
};
