module.exports = () => ({
  exclude: /node_modules/,
  test: /\.([cm]?ts|tsx)$/,
  use: 'ts-loader'
});
