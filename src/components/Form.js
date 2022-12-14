import { TodoSelect } from './TodoSelect';
import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setFilter }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInputText('');
  };

  const setFilterHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="ToDo text"
      />
      <button onClick={submitTodoHandler} type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <TodoSelect setFilterHandler={setFilterHandler} />
    </form>
  );
};

export default Form;
