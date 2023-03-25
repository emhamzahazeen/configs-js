module.exports = (port, staticDir) => {
  return {
    compress: true,
    devtool: 'inline-source-map',
    historyApiFallback: true,
    hot: true,
    mode: 'development',
    port,
    static: {
      directory: staticDir
    }
  };
};
