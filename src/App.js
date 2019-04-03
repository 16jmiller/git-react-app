import React, { Component } from 'react';
import './App.css';
import GitForm from './forms/GitForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This app allows a user to view git repositories at a glance.
          </p>
          <GitForm />
        </header>
      </div>
    );
  }
}

export default App;
