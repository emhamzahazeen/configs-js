module.exports = () => ({
  exclude: /node_modules/,
  loader: 'babel-loader',
  test: /\.([cm]?js|jsx)$/
});
