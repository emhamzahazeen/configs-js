const imageLoader = require('../loaders/image-loader');
const fontLoader = require('../loaders/font-loader');

module.exports = () => ({
  module: {
    rules: [imageLoader(), fontLoader()]
  }
});
