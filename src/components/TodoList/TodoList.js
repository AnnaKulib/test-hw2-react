import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <p>{text}</p>
        <button type="button" onClick={() => onDeleteTodo(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
