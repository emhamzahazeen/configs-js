module.exports = (port, staticDir) => {
  return {
    static: {
      directory: staticDir
    },
    compress: true,
    devtool: 'inline-source-map',
    historyApiFallback: true,
    hot: true,
    mode: 'development',
    port
  };
};
