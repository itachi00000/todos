import React from 'react';
import PropTypes from 'prop-types';

// style
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  padding: '5px 9px',
  marginRight: '25px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

//
class TodoItem extends React.Component {
  constructor() {
    super();

    this.getStyle = this.getStyle.bind(this);
  }

  getStyle() {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  }

  render() {
    const { todo, delTodo, markComplete } = this.props;
    const { title, id } = todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={() => markComplete(id)} /> {title}
          <button type="button" style={btnStyle} onClick={() => delTodo(id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
