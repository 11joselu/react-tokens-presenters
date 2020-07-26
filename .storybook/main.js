const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx'],
  addons: ['@storybook/addon-docs', '@storybook/preset-create-react-app'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
