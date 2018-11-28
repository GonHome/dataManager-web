import * as React from 'react';
import TodoForm from './todo-form';
import TodoFilters from './todo-filters';
import TodoList from './todo-list';
import { RootState } from '../store';
import { connect } from 'react-redux';
import * as todosActions from '../actions/actions';
import * as todosSelectors from '../selectots/selectors';
import * as todosModels from '../models/models';

type Props = {
  addTodo: (title: string) => any;
  currentFilter: todosModels.TodosFilter;
  changeFilter: (id: string) => void;
  todos: todosModels.Todo[];
  toggleTodo: (id: string) => any;
};

const Home = (props: Props) => {
  const {addTodo, currentFilter, changeFilter, todos, toggleTodo} = props;
  return (
    <React.Fragment>
      <TodoForm addTodo={addTodo} />
      <br/>
      <TodoFilters currentFilter={currentFilter} changeFilter={changeFilter}/>
      <TodoList {...{todos, toggleTodo}}/>
    </React.Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentFilter: todosSelectors.getTodosFilter(state.todos),
  todos: todosSelectors.getFilteredTodos(state.todos),
});

export default connect(mapStateToProps, {
  addTodo: (title: string) => todosActions.add({ title }),
  changeFilter: todosActions.changeFilter,
  toggleTodo: (id: string) => todosActions.toggle({ id }),
})(Home);
