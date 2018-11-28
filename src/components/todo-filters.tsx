import * as React from 'react';
import { todosModels } from './index';
const {
  TodosFilter: { All, Active, Completed },
} = todosModels;

interface Props {
  currentFilter: todosModels.TodosFilter;
  changeFilter: (id: string) => void;
}

const SEPARATOR = ' | ';
const FILTERS = [All, ' | ', Active, ' | ', Completed];

export class TodoFilters extends React.Component<Props> {
  getStyle = (active: boolean): React.CSSProperties => ({
    cursor: 'pointer',
    ...(active
      ? { textDecoration: 'underline', fontWeight: 'bold' }
      : { opacity: 0.4 }),
  });
  render() {
    const { currentFilter, changeFilter } = this.props;
    const Button = (idx: number, filter: string) => (
      <span
        key={idx}
        onClick={() => changeFilter(filter)}
        style={this.getStyle(filter === currentFilter)}
      >
      {filter.toString()}
      </span>
    );
    return (
      <div>
        {FILTERS.map(
          (filter, idx) =>
            filter === SEPARATOR ? SEPARATOR : Button(idx, filter),
        )}
      </div>
    );
  }
}
export default TodoFilters;
