import React from 'react';

const TodoList = ({todos}) => {
  const todo = todos.length ? (
    todos.map(todo => {
      return (
      <div className="collection-item" key={ todo.id }>
        <label htmlFor={todo.id} >
          <input type="checkbox" className="filled-in" id={todo.id} />
          <span >{ todo.content }</span>
        </label>
      </div>
      ) 
    })
    ) : (
    <p>You have nothing to do!</p>
    );
  return(
    <div className="todos collection">
      {todo}
    </div>
  )
}

export default TodoList;