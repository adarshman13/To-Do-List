import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); // Start with an empty array of todos
  const [filter, setFilter] = useState('all');
  const [inputValue, setInputValue] = useState(''); // State to control the input value

  // Filter todos based on filter state
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all' filter
  });

  // Handle adding a todo
  const handleAddTodo = (text) => {
    if (text.trim()) {
      const newTodo = { id: Date.now(), text, completed: false };
      setTodos([...todos, newTodo]);
      setInputValue(''); // Clear the input field after adding a todo
    }
  };

  // Handle toggling a todo's completed state
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Handle removing a todo
  const handleRemoveTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      
      {/* Input field for new Todo */}
      <input 
        type="text" 
        placeholder="Add a new todo" 
        value={inputValue} // Controlled input field
        onChange={(e) => setInputValue(e.target.value)} // Update state on input change
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo(e.target.value)} // Add todo on Enter
      />
      
      {/* Add Todo Button */}
      <div className="add-todo-button">
        <button onClick={() => handleAddTodo(inputValue)}>Add Todo</button>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      {/* Todo List */}
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)} 
            />
            <span style={todo.completed ? { textDecoration: 'line-through', color: '#888' } : {}}>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
