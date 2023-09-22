import React from 'react';
import './App.css';

function App() {
  // localStorage.setItem('id', 101)
  return (
    <div>
      <p> Local Storage</p>
      <div>
        <p>Local storage {localStorage.getItem('id')}</p>
      </div>
    </div>
  )
}

export default App

