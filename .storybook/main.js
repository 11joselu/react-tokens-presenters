const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'react-docgen-typescript-loader',
      }
    );
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
