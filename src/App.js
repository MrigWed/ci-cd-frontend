import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className='App-link'>This app is hosted on AWS S3</h2>
        <h2 className='App-link'>Testing CI &amp; CD</h2>
        <h2 className='App-link'>Test completed</h2>
      </header>
    </div>
  );
}

export default App;
