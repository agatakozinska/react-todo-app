import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Learn React'},
      {id: 2, content: 'Learn React harder'},
      {id: 3, content: 'Repeat!'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {return todo.id !== id})

    this.setState({
      todos
    })
  }

  addTodo = (newTodo) => {
    if (newTodo.content === '') {
      return false;
    }
    newTodo.id = Math.random();
    let todos = [...this.state.todos, newTodo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="Todos">
        <h1 className="Todos__heading">Todo List</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
