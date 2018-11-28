import * as React from 'react';
import { todosModels } from './index';
import TodoItem from './todo-item';

interface Props {
  todos: todosModels.Todo[];
  toggleTodo: (id: string) => any;
}
export class TodoList extends React.Component<Props> {
  getStyle = (): React.CSSProperties => ({
    textAlign: 'left',
    margin: 'auto',
    width: 200,
  });
  render() {
    const { todos = [], toggleTodo }: Props = this.props;
    return (
      <ul style={this.getStyle()}>
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoItem item={todo} toggleItem={() => toggleTodo(todo.id)}/>
          </li>
        ))}
      </ul>
    );
  }
}
export default TodoList;
