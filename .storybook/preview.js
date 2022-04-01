import { themes } from '@storybook/theming';
import { MockedProvider } from '@apollo/client/testing';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import './global.css';

// Initialize MSW
initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.normal },
  },
  apolloClient: {
    MockedProvider,
  },
};

export const decorators = [mswDecorator];
