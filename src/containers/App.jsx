import React from 'react';
import Todos from '../components/Todos';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, title: 'Take out Trash', completed: false },
        { id: 2, title: 'Meeting with Boss', completed: false },
        { id: 3, title: 'Dinner with Friends', completed: false }
      ]
    };
    this.markComplete = this.markComplete.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }

  markComplete(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  delTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="tc">
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
