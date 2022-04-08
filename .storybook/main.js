module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-measure',
    '@storybook/addon-backgrounds',
    'storybook-dark-mode',
    'storybook-addon-apollo-client',
    'storybook-addon-designs',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
