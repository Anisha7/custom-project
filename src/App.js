import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import spriteCreator from 'spriteCreator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class = "title">
            <h2> Create your own custom animated sprites </h2> 
            <h4> and download the code! </h4>
          </div>
          
          {/* Display sprite creator here */}
          {{spriteCreator}}

          {/* Confirm button here */}
          
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
          </a>
        </header>
      </div>
    );
  }
}

export default App;
