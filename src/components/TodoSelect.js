import React from 'react';

export function TodoSelect({ setFilterHandler }) {
  return (
    <div className="todo-select">
      <select onChange={setFilterHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
