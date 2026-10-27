import { fn } from 'storybook/test';
import TodoItem from '../TodoItem';

export default {
  title: 'TodoItem',
  render: ({ completed }) => (
    <div className="todoapp">
      <div className="todo-list">
        <TodoItem
          todo={{ id: 'the-id', text: 'Hello Todo', completed }}
          editTodo={fn()}
          deleteTodo={fn()}
          completeTodo={fn()}
        />
      </div>
    </div>
  ),
};

export const NotCompleted = { name: 'not completed', args: { completed: false } };
export const Completed = { name: 'completed', args: { completed: true } };
