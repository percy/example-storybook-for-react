import 'todomvc-app-css/index.css';
import './theme.css';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';

const withTheme = (Story, { globals }) => {
  document.documentElement.dataset.theme = globals.theme || 'light';
  return <Story />;
};

export default {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: { title: 'Theme', icon: 'mirror', items: ['light', 'dark'], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  parameters: {
    viewport: {
      options: {
        ...MINIMAL_VIEWPORTS,
        kiosk: { name: 'Kiosk', styles: { width: '600px', height: '900px' }, type: 'desktop' },
      },
    },
  },
};
