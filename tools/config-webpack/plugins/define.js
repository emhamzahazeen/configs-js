const { DefinePlugin } = require('webpack');

module.exports = (constants) => new DefinePlugin(constants);
