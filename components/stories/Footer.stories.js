import { fn } from 'storybook/test';
import Footer from '../Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters';

export default {
  title: 'Footer',
  render: ({ filter }) => (
    <div className="todoapp">
      <Footer completedCount={10} activeCount={4} filter={filter} onClearCompleted={fn()} onShow={fn()} />
    </div>
  ),
};

export const DefaultView = { name: 'default view', args: { filter: SHOW_ALL } };
export const ShowCompleted = { name: 'show completed', args: { filter: SHOW_COMPLETED } };
export const ShowActive = { name: 'show active', args: { filter: SHOW_ACTIVE } };
