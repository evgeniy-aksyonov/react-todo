import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
  const deleteTodoHandler = (e) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className="todo-item">{todo.text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodoHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
