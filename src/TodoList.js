import React from 'react';

const TodoList = ({todos, deleteTodo}) => {
  
  const todo = todos.length ? (
    todos.map(todo => {
      let isChecked = false;
      return (
      <div className="collection-item" key={ todo.id }>
        <label htmlFor={todo.id} >
          <input type="checkbox" className="filled-in" id={todo.id} onChange={() => {
            isChecked = !isChecked; 
            if (isChecked) {
              setTimeout(() => { deleteTodo(todo.id); }, 600);
            }
          }} />
          <span  >{ todo.content }</span>
        </label>
      </div>
      ) 
    })
    ) : (
    <p className="Todos__content--none collection-item">You have nothing to do!</p>
    );

  return(
    <div className="Todos__content collection">
      {todo}
    </div>
  )
}

export default TodoList;