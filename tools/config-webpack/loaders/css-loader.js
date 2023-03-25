const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = ({ extractCss, postcss, scss, less }) => {
  const matchers = ['c'];
  const loaders = [
    !extractCss ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        // Run `postcss-loader` on each CSS `@import` and CSS modules/ICSS imports,
        // do not forget that `sass-loader` compile non CSS `@import`'s into a single file
        // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
        importLoaders: 1
      }
    }
  ];

  if (postcss)
    loaders.push({
      loader: 'postcss-loader',
      options: { plugins: () => [postcssPresetEnv({ stage: 0 })] }
    });

  if (less) {
    matchers.push('le');
    loaders.push({
      loader: 'less-loader'
    });
  }

  if (scss) {
    matchers.push('sa');
    matchers.push('sc');
    loaders.push({
      loader: 'sass-loader'
    });
  }

  const regex = new RegExp(`\\.(${matchers.join('|')})ss$`, 'i');
  return {
    test: regex,
    use: loaders
  };
};
