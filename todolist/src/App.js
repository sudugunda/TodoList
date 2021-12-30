import React from 'react';
import './App.css';
import TodoList from './TodoList';


function App() {

  
  return (
    <>
      <div className='app'>
        <div className='center'>
          <h1>Todo List</h1>
            <TodoList/>
        </div>
      </div>
    </>
  );
}

export default App;
