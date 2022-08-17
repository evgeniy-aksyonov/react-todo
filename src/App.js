import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/TodoList';

function App() {
  // State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Effects

  // Run only once at the beginning
  useEffect(() => {
    getFromLocalStorage();
  }, []);

  // Run every time todos or filter change
  useEffect(() => {
    filterHanler();
    saveToLocalStorage();
  }, [todos, filter]);

  // Functions
  const filterHanler = () => {
    switch (filter) {
      case 'all':
        setFilteredTodos(todos);
        break;
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Saves todos to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // Checks if localStorage has todos and sets them to state
  const getFromLocalStorage = () => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    } else {
      localStorage.setItem('todos', JSON.stringify([]));
    }
  };

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
        setFilter={setFilter}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
