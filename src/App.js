import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <ToDoList />
    </div>

  );
}

export default App;
