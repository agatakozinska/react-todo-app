import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return(
      <form className="Todos__form" onSubmit={ this.handleSubmit }>
        <input type="text" placeholder="I have to..." onChange={ this.handleChange} value={ this.state.content }/>
        <button className="btn-floating btn-small waves-effect waves-light red">+</button>
      </form>
    )
  }

}

export default AddTodo;