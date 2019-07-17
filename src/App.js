import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({ children }) {
  console.log({
    children,
  });
  
  console.log(React.Children.count(children));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <br />
          <br />
          <br />
          {children}
        </a>
      </header>
    </div>
  );
}

export default App;
