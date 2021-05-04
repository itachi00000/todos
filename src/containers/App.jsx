import React from 'react';
import uuidV1 from 'uuid/dist/v1';

import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';

import Header from '../components/layout/Header';
import './App.css';

// main
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: uuidV1(), title: 'Take out Trash', completed: false },
        { id: uuidV1(), title: 'Meeting with Boss', completed: false },
        { id: uuidV1(), title: 'Dinner with Friends', completed: false }
      ]
    };
    this.markComplete = this.markComplete.bind(this);
    this.delTodo = this.delTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  markComplete(id) {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    }));
  }

  delTodo(id) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  }

  addTodo(title) {
    const { todos } = this.state;
    const newTodo = {
      // [x] need a key generator
      id: uuidV1(),
      title,
      completed: false
    };

    // limit is 10
    if (todos.length > 10 || !title) return;

    // putting new todo on top
    this.setState(prevState => ({ todos: [newTodo, ...prevState.todos] }));
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="tc">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
