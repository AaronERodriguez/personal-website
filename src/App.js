import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';

function App() {
  document.body.setAttribute("class", "dark")
  return (
    <div className="App">
      <Navbar />
      <h1>Hi</h1>
    </div>
  );
}

export default App;
