import React from 'react';

class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
    this.submitForm = this.submitForm.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    if (!this.state.title) return;

    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.submitForm} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={{ flex: 10, padding: '5px' }}
          value={title}
          onChange={this.inputChange}
        />
        <button type="submit" className="btn" style={{ flex: 1 }}>
          Submit
        </button>
      </form>
    );
  }
}

export default AddTodo;
