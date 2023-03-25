const PugPlugin = require('pug-plugin');

module.exports = ({ extractCss }) => {
  const pluginOptions = {
    js: {
      filename: 'assets/js/[name].[contenthash:8].js'
    },
    pretty: true // formatting HTML, useful for development mode
  };

  if (extractCss) {
    pluginOptions.extractCss = {
      filename: 'css/[name].[contenthash:8].css'
    };
  }

  return {
    module: {
      rules: [
        {
          loader: PugPlugin.loader,
          test: /\.pug$/
        }
      ]
    },
    plugins: [new PugPlugin(pluginOptions)]
  };
};
