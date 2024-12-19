import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, removeTodo }) => {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodo(index)} 
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
