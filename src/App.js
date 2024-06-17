import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import './todo.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (

  
    <div className="container"> {/* Add the container class here */}
     <h1>Write down your Tasks!</h1>
      <div className="list">
        <h1>To-Do App</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add Task</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
