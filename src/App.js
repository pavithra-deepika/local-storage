import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <h1>Home</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

