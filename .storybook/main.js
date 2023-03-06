module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {},
        sourceLoaderOptions: null,
        configureJSX: true,
      },
    },
  ],
  babel: async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  core: {
    builder: 'webpack5',
  },
};
