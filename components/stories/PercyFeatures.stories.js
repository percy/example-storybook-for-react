import { fn } from 'storybook/test';
import Header from '../Header';
import MainSection from '../MainSection';

const todos = [
  { id: 'one', text: 'Item One', completed: false },
  { id: 'two', text: 'Item Two', completed: true },
];

export default {
  title: 'Percy Features',
  render: () => (
    <div className="todoapp">
      <Header addTodo={fn()} />
      <MainSection todos={todos} actions={{ clearCompleted: fn(), completeAll: fn() }} />
    </div>
  ),
};

// Captured at 320px (Storybook's mobile1) instead of the project widths.
export const MobileViewport = {
  name: 'viewport mobile1',
  globals: { viewport: { value: 'mobile1', isRotated: false } },
};

// Captured at 600px, from the custom "kiosk" option in .storybook/preview.js.
export const KioskViewport = {
  name: 'viewport kiosk',
  globals: { viewport: { value: 'kiosk', isRotated: false } },
};

// A story-level modes list replaces the .percy.yml list, so list dark again next to the
// addon-a11y vision simulator: red title and green check collapse into similar tones.
export const VisionModes = {
  name: 'vision modes',
  tags: ['visual-smoke'],
  parameters: {
    percy: {
      modes: [
        { name: 'dark', globals: { theme: 'dark' } },
        { name: 'deuteranopia', globals: { vision: 'deuteranopia' } },
      ],
    },
  },
};
