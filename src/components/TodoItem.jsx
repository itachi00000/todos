import React from 'react';
import PropTypes from 'prop-types';

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
    const { title, id } = this.props.todo;
    return (
      <div className="" style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}{' '}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
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

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  padding: '5px 9px',
  marginRight: '25px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem;
