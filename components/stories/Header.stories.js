import { fn } from 'storybook/test';
import Header from '../Header';

export default {
  title: 'Header',
  render: () => (
    <div className="todoapp">
      <Header addTodo={fn()} />
    </div>
  ),
};

export const DefaultView = { name: 'default view' };
