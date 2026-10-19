/** @type {import('@storybook/react-webpack5').StorybookConfig} */
const config = {
  stories: ['../components/stories/*.stories.js'],
  framework: { name: '@storybook/react-webpack5', options: {} },
  addons: ['@storybook/addon-webpack5-compiler-babel'],
  // The repo .babelrc targets Babel 6 (legacy app/tests); keep it out of the Storybook build.
  babel: async (options) => ({
    ...options,
    babelrc: false,
    configFile: false,
    presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
  }),
};
export default config;
