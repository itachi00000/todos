import React from 'react';
// import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

function Todos(props) {
  return props.todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={props.markComplete}
      delTodo={props.delTodo}
    />
  ));
}

// Todos.propTypes = { todos: PropTypes.array.isRequired};

export default Todos;
