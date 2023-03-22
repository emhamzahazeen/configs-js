const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (srcDirectory, distDirectory) => {
  return new HtmlWebpackPlugin({
    template: path.join(srcDirectory, 'index.pug'),
    filename: path.join(distDirectory, 'index.html')
  });
};
