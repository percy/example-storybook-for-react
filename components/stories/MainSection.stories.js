import { fn } from 'storybook/test';
import MainSection from '../MainSection';

export default {
  title: 'MainSection',
  render: ({ todos }) => (
    <div className="todoapp">
      <MainSection todos={todos} actions={{ clearCompleted: fn(), completeAll: fn() }} />
    </div>
  ),
};

export const AllActive = {
  name: 'all active',
  args: {
    todos: [
      { id: 'one', text: 'Item One', completed: false },
      { id: 'two', text: 'Item Two', completed: false },
    ],
  },
};

export const SomeCompleted = {
  name: 'some completed',
  args: {
    todos: [
      { id: 'one', text: 'Item One', completed: false },
      { id: 'two', text: 'Item Two', completed: true },
      { id: 'three', text: 'Item Three', completed: false },
    ],
  },
};

export const AllCompleted = {
  name: 'all completed',
  args: {
    todos: [
      { id: 'one', text: 'Item One', completed: true },
      { id: 'two', text: 'Item Two', completed: true },
    ],
  },
};
