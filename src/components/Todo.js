import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const completeTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </li>
      <button onClick={completeTodoHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodoHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
