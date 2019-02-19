import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Learn React'},
      {id: 2, content: 'Learn React harder'},
      {id: 3, content: 'Repeat!'}
    ]
  }
  render() {
    return (
      <div className="Todos">
        <h1 className="Todos__heading">Todo List</h1>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
